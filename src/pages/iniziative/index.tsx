import { Hero } from "@/components/Hero"
import { InitiativePreview } from "@/components/InitiativePreview"
import { Layout } from "@/components/Layout"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { getAllContent } from "@/utils/getAllContent"
import { Container, Wrap } from "@chakra-ui/react"
import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"

export default function Initiatives({
  initiatives,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Iniziative</title>
        <meta name="description" content="Iniziative" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero
            text="NESSUNO PUÒ FARE TUTTO, TUTTI POSSONO FARE QUALCOSA"
            image="placeholder.jpeg"
          />
          <Container maxW={"7xl"} px="8" py="16">
            <Wrap spacing="30px">
              {initiatives.map((initiative) => (
                <InitiativePreview
                  key={initiative.slug}
                  initiative={initiative}
                />
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

type initiative = {
  slug: string
  content: string
  frontmatter: any
}

export const getStaticProps: GetStaticProps<{
  initiatives: initiative[]
}> = async () => {
  const initiatives = getAllContent("initiative")

  return {
    props: {
      initiatives,
    },
  }
}
