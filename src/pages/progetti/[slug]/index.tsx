import { Container } from "@/components/Container"
import { Gallery } from "@/components/Gallery"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { Markdown } from "@/components/Markdown"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { generateMetaDescription } from "@/utils/generateMetaDescription"
import { generateMetaTitle } from "@/utils/generateMetaTitle"
import { getAllContent } from "@/utils/getAllContent"
import { getContent } from "@/utils/getContent"
import { isSlugValid } from "@/utils/isSlugValid"
import { Stack, Text } from "@chakra-ui/layout"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

import Head from "next/head"

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    content,
    frontmatter: {
      coverImage,
      title,
      location,
      startDate,
      gallery,
      endDate,
      description,
    },
  } = project

  return (
    <>
      <Head>
        <title>{generateMetaTitle(title)}</title>
        <meta
          name="description"
          content={description || generateMetaDescription(content)}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text={title} image={coverImage} />
          <Container>
            <Stack w="100%" mb="8">
              {location && (
                <Text color="brand.text">
                  <b>Area di intervento:</b> {location}
                </Text>
              )}
              {startDate && (
                <Text color="brand.text">
                  <b>Data inizio:</b>{" "}
                  {new Date(startDate).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                  })}
                </Text>
              )}
              {endDate && (
                <Text color="brand.text">
                  <b>Data fine:</b>{" "}
                  {new Date(endDate).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                  })}
                </Text>
              )}
              {startDate && !endDate && (
                <Text color="brand.text">
                  <b>Data fine:</b> In corso
                </Text>
              )}
            </Stack>
            <Stack w="100%">
              <Markdown content={content} />
            </Stack>

            {gallery && (
              <Stack w="100%" p="16">
                <Gallery images={gallery.map((image) => ({ src: image }))} />
              </Stack>
            )}
          </Container>
          <HomepageSostieniciBanner />
          <HomepageContattaci />
        </Layout>
      </main>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const projects = getAllContent("project")

  return {
    paths: projects.map((project) => ({
      params: { slug: project.slug },
    })),
    fallback: false,
  }
}

type project = NonNullable<ReturnType<typeof getContent>>

export const getStaticProps: GetStaticProps<
  { project: project },
  { slug: string }
> = async (context) => {
  const params = context.params

  if (!params || !isSlugValid(params.slug)) {
    return {
      notFound: true,
    }
  }

  const project = getContent(params.slug, "project")

  if (!project) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      project,
    },
  }
}
