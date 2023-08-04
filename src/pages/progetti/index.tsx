import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { ProjectPreview } from "@/components/ProjectPreview"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { getAllContent } from "@/utils/getAllContent"
import { Container, Wrap } from "@chakra-ui/react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"

export default function Projects({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Progetti</title>
        <meta name="description" content="Progetti" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text="lorem ipsum" image="placeholder.jpeg" />
          <Container maxW={"7xl"} px="8" py="16">
            <Wrap spacing="30px">
              {projects.map((project) => (
                <ProjectPreview key={project.slug} project={project} />
              ))}
            </Wrap>
          </Container>
          <HomepageSostieniciBanner />
          <HomepageContattaci />
        </Layout>
      </main>
    </>
  )
}

type project = {
  slug: string
  content: string
  frontmatter: any
}

export const getStaticProps: GetStaticProps<{
  projects: project[]
}> = async () => {
  const projects = getAllContent("project")

  return {
    props: {
      projects,
    },
  }
}
