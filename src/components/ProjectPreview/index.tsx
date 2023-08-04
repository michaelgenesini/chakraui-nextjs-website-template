import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  WrapItem,
  Button,
  Badge,
} from "@chakra-ui/react"

type Props = {
  project: {
    slug: string
    content: string
    frontmatter: {
      title: string
      description: string
      coverImage: string
      startDate: string
      endDate?: string
      closed?: boolean
      location: string
      gallery: string[]
      documents: string[]
      homepage: boolean
    }
  }
}

export const ProjectPreview = ({ project }: Props) => (
  <WrapItem
    width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
    borderWidth={1}
    p={4}
    borderRadius="lg"
  >
    <Box as="a" href={`/progetti/${project.slug}`} w="100%">
      <Box borderRadius="lg" overflow="hidden" mb="4">
        <Image
          transform="scale(1.0)"
          src={project.frontmatter.coverImage}
          alt="some text"
          objectFit="cover"
          width="100%"
          h="300px"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>

      <Text as="p" fontSize="xs" mb="2" color="brand.text">
        {project.frontmatter.closed ? (
          <Badge colorScheme="yellow">CONCLUSO</Badge>
        ) : (
          <Badge colorScheme="green">IN CORSO</Badge>
        )}
      </Text>

      <Heading fontSize="xl" mb="2" color="brand.text">
        {project.frontmatter.title}
      </Heading>

      <Text as="p" fontSize="md" mb="2" color="brand.text">
        {project.frontmatter.description}
      </Text>

      <Button
        as="div"
        width="100%"
        fontSize="xs"
        fontWeight={600}
        size="sm"
        color="white"
        bg="brand.red"
        _hover={{
          bg: "brand.redHover",
        }}
      >
        Scopri
      </Button>
    </Box>
  </WrapItem>
)
