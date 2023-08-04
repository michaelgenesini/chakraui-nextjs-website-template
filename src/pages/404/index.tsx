import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { siteData } from "@/constants/siteData"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { Heading, Stack, Text, VStack } from "@chakra-ui/layout"

import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Pagina non trovata</title>
        <meta
          name="description"
          content={`Pagina non trovata - ${siteData.meta.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Container>
            <VStack justify="center" h="300px">
              <Text fontSize="4xl" color="brand.text">
                Pagina non trovata
              </Text>
            </VStack>
          </Container>
          <HomepageSostieniciBanner />
          <HomepageContattaci />
        </Layout>
      </main>
    </>
  )
}
