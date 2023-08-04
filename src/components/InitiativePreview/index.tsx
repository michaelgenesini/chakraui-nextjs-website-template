import {
  Box,
  Heading,
  Image,
  Text,
  WrapItem,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react"

type Props = {
  initiative: {
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
  }
}

export const InitiativePreview = ({ initiative }: Props) => (
  <WrapItem
    w={{ base: "100%", lg: "45%" }}
    h={{ sm: "auto", md: "100%", lg: "200px" }}
    borderWidth={1}
  >
    <Box as="a" href={`/iniziative/${initiative.slug}`} h="100%" w="100%">
      <HStack w="100%" h="100%" align="stretch">
        <Box overflow="hidden" w="50%" h="100%">
          <Image
            transform="scale(1.0)"
            src={initiative.frontmatter.coverImage}
            alt="some text"
            objectFit="cover"
            bgPosition="center"
            w="100%"
            h="100%"
            transition="0.3s ease-in-out"
            _hover={{
              transform: "scale(1.05)",
            }}
          />
        </Box>

        <Flex p={2} w="50%" h="100%" direction="column" justify="space-between">
          <Heading fontSize="xl" mt="8" color="brand.text">
            {initiative.frontmatter.title}
          </Heading>

          <Text as="p" fontSize="md" mt="2" color="brand.text">
            {initiative.frontmatter.description}
          </Text>

          <Button
            as="div"
            mt="8"
            width="100%"
            fontSize="sm"
            fontWeight={600}
            color="white"
            bg="brand.red"
            _hover={{
              bg: "brand.redHover",
            }}
          >
            Scopri
          </Button>
        </Flex>
      </HStack>
    </Box>
  </WrapItem>
)
