import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { siteData } from "@/constants/siteData"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { DownloadIcon } from "@chakra-ui/icons"
import { ListIcon, ListItem, Stack, Text, List } from "@chakra-ui/layout"

import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Documenti</title>
        <meta
          name="description"
          content={`Documenti - ${siteData.meta.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text="Documenti" image="placeholder.jpeg" />
          <Container>
            <Stack w="full" spacing={3}>
              <Text fontSize="2xl" color="brand.text">
                Documenti scaricabili
              </Text>
              <List>
                <ListItem color="brand.black">
                  <a href="media/2017/02/doc.pdf" target="_blank">
                    <ListIcon as={DownloadIcon} color="green.500" />
                    Documento da scaricare
                  </a>
                </ListItem>
              </List>
            </Stack>
          </Container>
          <HomepageSostieniciBanner />
        </Layout>
      </main>
    </>
  )
}
