import {
  Stack,
  Flex,
  VStack,
  useBreakpointValue,
  AbsoluteCenter,
  Heading,
} from "@chakra-ui/react"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
  image: string
  text: string
}>

export const Hero = ({ image, text }: Props) => (
  <Flex
    w="full"
    h="300px"
    position="relative"
    backgroundImage={`url(/${image})`}
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
  >
    <AbsoluteCenter bg="white" w="full" h="full" opacity={0.7} />
    <VStack
      zIndex="dropdown"
      w="full"
      justify="center"
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    >
      <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
        <Heading
          as="h1"
          color="white"
          fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
        >
          {text}
        </Heading>
      </Stack>
    </VStack>
  </Flex>
)
