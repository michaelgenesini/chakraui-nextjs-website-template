import { Flex, Text, VStack, Heading, Box } from "@chakra-ui/react"
import Link from "next/link"

export const HomepageContattaci = () => (
  <Flex position="relative" w="full" h="400px" bg="brand.red" justify="center">
    <VStack zIndex="dropdown" justify="center">
      <Heading
        fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
        textAlign="center"
        color="white"
        px="8"
      >
        RESTA IN CONTATTO CON NOI
      </Heading>

      <Text color="white" textAlign="center" px="8">
        Lasciando i tuoi dati riceverai comunicazioni sulle iniziative e i
        progetti di LOREM
      </Text>

      <Box pt="10">
        <Link href="/contattaci/">
          <svg width="77px" height="49px" viewBox="0 0 77 49">
            <path
              d="M6.13782643,0 L70.4349274,0 C73.8468728,0 76.5727538,2.7348125 76.5727538,6.106625 L76.5727538,42.893375 C76.5727538,46.262125 73.8254333,49 70.4349274,49 L6.13782643,49 C2.725881,49 0,46.2651875 0,42.893375 L0,6.106625 C0,2.737875 2.74732051,0 6.13782643,0 L6.13782643,0 Z M6.13476364,3.0625 C4.43797929,3.0625 3.06278764,4.440625 3.06278764,6.1464375 L3.06278764,42.8535625 C3.06278764,44.5563125 4.40735141,45.9375 6.13476364,45.9375 L70.4349274,45.9375 C72.1317117,45.9375 73.5069034,44.559375 73.5069034,42.8535625 L73.5069034,6.1464375 C73.5069034,4.4436875 72.1623396,3.0625 70.4349274,3.0625 L6.13476364,3.0625 L6.13476364,3.0625 Z M58.1929652,9.1875 L67.3813281,9.1875 L67.3813281,18.375 L58.1929652,18.375 L58.1929652,9.1875 L58.1929652,9.1875 Z M61.2557528,12.25 L61.2557528,15.3125 L64.3185404,15.3125 L64.3185404,12.25 L61.2557528,12.25 L61.2557528,12.25 Z M9.18836292,30.625 L9.18836292,33.6875 L33.690664,33.6875 L33.690664,30.625 L9.18836292,30.625 L9.18836292,30.625 Z M9.18836292,9.1875 L9.18836292,12.25 L21.4395135,12.25 L21.4395135,9.1875 L9.18836292,9.1875 L9.18836292,9.1875 Z M9.18836292,36.75 L9.18836292,39.8125 L33.690664,39.8125 L33.690664,36.75 L9.18836292,36.75 L9.18836292,36.75 Z"
              id="Shape"
              stroke="none"
              fill="#ffffff"
              fillRule="evenodd"
            ></path>
          </svg>
        </Link>
      </Box>
      {/* <Button
        as="a"
        px="100px"
        fontSize="sm"
        fontWeight={600}
        color="white"
        bg="green.500"
        href="progetti"
        _hover={{
          bg: "green.400",
        }}
      >
        Sostienici
      </Button> */}
    </VStack>
  </Flex>
)
