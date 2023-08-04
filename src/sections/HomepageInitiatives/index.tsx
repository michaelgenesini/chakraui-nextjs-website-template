import { InitiativePreview } from "@/components/InitiativePreview"
import { Heading, Wrap, Container, Button, Flex } from "@chakra-ui/react"

type Props = {
  initiatives: {
    slug: string
    content: string
    frontmatter: {
      title: string
      description: string
      coverImage: string
      startDate: string
      endDate: string
      location: string
      gallery: string[]
      documents: string[]
      homepage: boolean
    }
  }[]
}

export const HomepageInitiatives = ({ initiatives }: Props) => (
  <Container maxW={"7xl"} px="8" py="16">
    <Flex direction="row" justify="center" mb={8}>
      <Heading as="h2" color="brand.text">
        Iniziative
      </Heading>
    </Flex>

    <Wrap spacing="30px" marginTop="5">
      {initiatives.map((initiative) => (
        <InitiativePreview key={initiative.slug} initiative={initiative} />
      ))}
    </Wrap>

    <Flex direction="row" justify="center" mt="32">
      <Button
        as="a"
        px="100px"
        fontWeight={600}
        color="white"
        bg="brand.red"
        href="progetti"
        _hover={{
          bg: "brand.redHover",
        }}
      >
        Scopri tutte le iniziative
      </Button>
    </Flex>
  </Container>
)
