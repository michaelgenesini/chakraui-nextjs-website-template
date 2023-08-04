import { Layout } from "@/components/Layout"
import { siteData } from "@/constants/siteData"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageHero } from "@/sections/HomepageHero"
import { HomepageImageDivider } from "@/sections/HomepageImageDivider"
import { HomepageInitiatives } from "@/sections/HomepageInitiatives"
import { HomepageProjects } from "@/sections/HomepageProjects"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { getAllContent } from "@/utils/getAllContent"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { initiatives, projects } = props

  return (
    <>
      <Head>
        <title>{siteData.meta.title}</title>
        <meta name="description" content={siteData.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <HomepageHero />
          {!!initiatives.length && (
            <>
              <HomepageImageDivider />
              <HomepageInitiatives initiatives={initiatives} />
            </>
          )}
          {!!projects.length && (
            <>
              <HomepageImageDivider />
              <HomepageProjects projects={projects} />
            </>
          )}
          <HomepageSostieniciBanner />
          <HomepageContattaci />
        </Layout>
      </main>
    </>
  )
}

type initiative = {
  slug: string
  content: string
  frontmatter: any
}

type project = {
  slug: string
  content: string
  frontmatter: any
}

export const getStaticProps: GetStaticProps<{
  initiatives: initiative[]
  projects: project[]
}> = async (context) => {
  const initiatives = getAllContent("initiative").filter(
    (item) => item.frontmatter.homepage
  )
  const projects = getAllContent("project").filter(
    (item) => item.frontmatter.homepage
  )

  return {
    props: {
      initiatives,
      projects,
    },
  }
}
