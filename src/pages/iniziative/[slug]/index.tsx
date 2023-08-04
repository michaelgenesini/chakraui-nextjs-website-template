import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { Markdown } from "@/components/Markdown"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { getContent } from "@/utils/getContent"
import { getAllContent } from "@/utils/getAllContent"
import { isSlugValid } from "@/utils/isSlugValid"
import { Stack, Text } from "@chakra-ui/layout"
import { InferGetStaticPropsType, GetStaticPaths, GetStaticProps } from "next"

import Head from "next/head"
import { generateMetaTitle } from "@/utils/generateMetaTitle"
import { generateMetaDescription } from "@/utils/generateMetaDescription"
import { Gallery } from "@/components/Gallery"

export default function Initiative({
  initiative,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    content,
    frontmatter: {
      coverImage,
      title,
      location,
      startDate,
      date,
      endDate,
      description,
      gallery,
    },
  } = initiative

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
                  <b>Dove:</b> {location}
                </Text>
              )}
              {date && (
                <Text color="brand.text">
                  <b>Data:</b>{" "}
                  {new Date(date).toLocaleDateString("it-IT", {
                    year: "numeric",
                    month: "long",
                  })}
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
  const initiatives = getAllContent("initiative")

  return {
    paths: initiatives.map((initiative) => ({
      params: { slug: initiative.slug },
    })),
    fallback: false,
  }
}

type initiative = NonNullable<ReturnType<typeof getContent>>

export const getStaticProps: GetStaticProps<
  { initiative: initiative },
  { slug: string }
> = async (context) => {
  const params = context.params

  if (!params || !isSlugValid(params.slug)) {
    return {
      notFound: true,
    }
  }

  const initiative = getContent(params.slug, "initiative")

  if (!initiative) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      initiative,
    },
  }
}
