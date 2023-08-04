import { Flex, VStack, useBreakpointValue } from "@chakra-ui/react"

export const HomepageHero = () => (
  <Flex
    w={"full"}
    h={"80vh"}
    backgroundImage={"url(/media/2017/06/HomePage_3_900x600.jpg)"}
    // /media/2017/06/HomePage_1.png
    // /media/2017/06/HomePage_3_900x600.jpg
    // /media/2017/06/HomePage_4_900x600.png
    backgroundSize={"cover"}
    backgroundPosition={"center center"}
  >
    <VStack
      w={"full"}
      justify={"center"}
      px={useBreakpointValue({ base: 4, md: 8 })}
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
    />
  </Flex>
)
