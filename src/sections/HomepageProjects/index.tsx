import { ProjectPreview } from "@/components/ProjectPreview"
import { Heading, Wrap, Container, Button, Flex } from "@chakra-ui/react"

type Props = {
  projects: {
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

export const HomepageProjects = ({ projects }: Props) => (
  <Container maxW={"7xl"} px="8" py="16">
    <Flex direction="row" justify="center" mb={8}>
      <Heading as="h2" color="brand.text">
        Progetti
      </Heading>
    </Flex>

    <Wrap justify="center" spacing="30px" marginTop="5">
      {projects.map((project) => (
        <ProjectPreview key={project.slug} project={project} />
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
        Scopri tutti i progetti
      </Button>
    </Flex>
  </Container>
)
