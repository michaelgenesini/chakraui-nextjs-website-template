import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

type frontmatter = {
  title: string
  description?: string
  coverImage: string
  date?: any
  startDate?: any
  endDate?: any
  closed?: boolean
  location?: string
  gallery?: string[]
  homepage?: boolean
}

export const getContent = (slug: string, type: "project" | "initiative") => {
  try {
    const regex = /^(\d\d-)/
    const folder = type == "project" ? "projects" : "initiatives"
    const baseFolder = `content/${folder}`
    const files = fs.readdirSync(baseFolder)
    const filename = files.find(
      (fileName) => fileName.replace(".md", "").replace(regex, "") === slug
    )

    if (!filename) {
      return null
    }

    const readFile = fs.readFileSync(join(baseFolder, filename), "utf-8")
    const order = (filename.match(regex) || -1) as Number
    const { data: frontmatter, content } = matter(readFile)

    return {
      order,
      content,
      slug,
      frontmatter: JSON.parse(JSON.stringify(frontmatter)) as frontmatter,
    }
  } catch (error) {
    console.error(error)

    return null
  }
}
