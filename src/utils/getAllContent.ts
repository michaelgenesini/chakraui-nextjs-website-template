import fs from "fs"
import matter from "gray-matter"
import { join } from "path"

type frontmatter = {
  title: string
  coverImage?: string
  date?: any
  startDate?: any
  endDate?: any
  closed?: boolean
  location?: string
  gallery?: string[]
  homepage?: boolean
}

export const getAllContent = (type: "project" | "initiative") => {
  try {
    const regex = /^(\d\d-)/
    const folder = type == "project" ? "projects" : "initiatives"
    const baseFolder = `content/${folder}`
    const files = fs.readdirSync(baseFolder)

    if (!files) {
      return []
    }

    const allContent = files
      .map((file) => {
        const readFile = fs.readFileSync(join(baseFolder, file), "utf-8")
        const slug = file.replace(".md", "").replace(regex, "")
        const order = file.match(regex) || -1
        const { data: frontmatter, content } = matter(readFile)

        return {
          order,
          slug,
          content,
          frontmatter: JSON.parse(JSON.stringify(frontmatter)) as frontmatter,
        }
      })
      .sort((a, b) => (a.order > b.order ? 1 : -1))
      .sort((a) => (a.frontmatter.closed ? 1 : -1))

    return allContent
  } catch (error) {
    console.error(error)

    return []
  }
}
