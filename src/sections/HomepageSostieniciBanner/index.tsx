import { Container } from "@/components/Container"
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
  AbsoluteCenter,
} from "@chakra-ui/react"

export const HomepageSostieniciBanner = () => (
  <Flex
    position="relative"
    w="full"
    h="400px"
    backgroundImage="url(/section-divider-1.jpeg)"
    backgroundSize="cover"
    backgroundPosition="center center"
  >
    <AbsoluteCenter bg="white" w="full" h="full" opacity={0.7} />
    <Container>
      <VStack zIndex="dropdown" justify="center">
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
          lineHeight="150%"
          textAlign="center"
          color="brand.black"
          mb="8"
        >
          LOREM IPSUM DOLOR SIT AMET
        </Heading>

        <Button
          as="a"
          px="100px"
          color="white"
          bg="brand.red"
          href="/sostienici"
          _hover={{
            bg: "brand.redHover",
          }}
        >
          Sostienici
        </Button>
      </VStack>
    </Container>
  </Flex>
)
