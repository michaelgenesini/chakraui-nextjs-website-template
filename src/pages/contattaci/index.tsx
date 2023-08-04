import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { siteData } from "@/constants/siteData"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { Stack, Text } from "@chakra-ui/layout"

import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Contattaci</title>
        <meta
          name="description"
          content={`Contattaci - ${siteData.meta.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text="Contattaci" image="placeholder.jpeg" />
          <Container>
            <Stack spacing={3}>
              <Text color="brand.text">
                Per qualsiasi richiesta di informazioni conntattaci via email
                all’indirizzo{" "}
                <Text as="span" color="brand.black" decoration="underline">
                  <a href="mailto:info@lorem.ipsum?subject=Richiesta Informazioni">
                    info@lorem.ipsum
                  </a>
                </Text>
                .
              </Text>

              <br />

              <Text color="brand.text">
                Oppure chiamaci al numero{" "}
                <Text as="span" color="brand.black">
                  1234567
                </Text>
              </Text>
            </Stack>
          </Container>
          <HomepageSostieniciBanner />
        </Layout>
      </main>
    </>
  )
}
