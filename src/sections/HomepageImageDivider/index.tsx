import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react"

export const HomepageImageDivider = () => (
  <Flex
    w="full"
    h="400px"
    backgroundImage="url(/section-divider-1.jpeg)"
    backgroundSize="cover"
    backgroundPosition="top center"
  >
    <VStack
      w="full"
      justify="center"
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient="linear(to-r, blackAlpha.600, transparent)"
    />
  </Flex>
)
