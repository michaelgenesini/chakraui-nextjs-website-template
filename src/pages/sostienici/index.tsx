import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { HomepageContattaci } from "@/sections/HomepageContattaci"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { Stack, Text } from "@chakra-ui/layout"

import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Sostienici</title>
        <meta name="description" content="Sostienici" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text="Sostienici" image="placeholder.jpeg" />
          <Container>
            <Stack spacing={3}>
              <Text color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                odit quam illo provident fuga culpa adipisci beatae
                necessitatibus, numquam aperiam quas a, rerum consectetur velit
                odio nesciunt nemo dignissimos placeat.
              </Text>

              <Text color="brand.text">Lorem ipsum dolor:</Text>

              <Text fontWeight={900} color="brand.text">
                Lorem ipsum dolor
              </Text>

              <Stack spacing={3} pl="8" pb="8">
                <Text color="brand.text">Lorem ipsum dolor</Text>
                <Text color="brand.text">Lorem ipsum dolor</Text>
                <Text color="brand.text">Lorem ipsum dolor</Text>
                <Text color="brand.text">Lorem ipsum dolor</Text>
              </Stack>
            </Stack>
          </Container>
          <HomepageContattaci />
        </Layout>
      </main>
    </>
  )
}
