import { Container } from "@/components/Container"
import { Hero } from "@/components/Hero"
import { Layout } from "@/components/Layout"
import { siteData } from "@/constants/siteData"
import { HomepageSostieniciBanner } from "@/sections/HomepageSostieniciBanner"
import { Heading, Stack, Text } from "@chakra-ui/layout"

import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Chi siamo</title>
        <meta
          name="description"
          content={`Chi siamo - ${siteData.meta.title}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Hero text="Chi siamo" image="placeholder.jpeg" />
          <Container>
            <Stack spacing={3}>
              <Text color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illum, eum magni iste laboriosam dolorum qui repellendus,
                ratione quisquam doloribus velit exercitationem, inventore
                soluta veniam corporis. Incidunt, quidem expedita. Voluptas!
              </Text>

              <Text color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illum, eum magni iste laboriosam dolorum qui repellendus,
                ratione quisquam doloribus velit exercitationem, inventore
                soluta veniam corporis. Incidunt, quidem expedita. Voluptas!
              </Text>

              <Text color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illum, eum magni iste laboriosam dolorum qui repellendus,
                ratione quisquam doloribus velit exercitationem, inventore
                soluta veniam corporis. Incidunt, quidem expedita. Voluptas!
              </Text>

              <Text color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Text>

              <br />

              <Heading fontSize="xl" color="brand.text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illum, eum magni iste laboriosam dolorum qui repellendus,
                ratione quisquam doloribus velit exercitationem, inventore
                soluta veniam corporis. Incidunt, quidem expedita. Voluptas!
              </Heading>
            </Stack>
          </Container>
          <HomepageSostieniciBanner />
        </Layout>
      </main>
    </>
  )
}
