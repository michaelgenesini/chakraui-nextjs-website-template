import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaFacebook } from "react-icons/fa"
// import { BiMailSend } from "react-icons/bi"
import { Logo } from "@/components/Logo"
import { siteData } from "@/constants/siteData"
import { SocialButton } from "@/components/SocialButton"

export const Footer = () => {
  const today = new Date()

  return (
    <Box bg="white" color="brand.text">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{
            base: "1fr",
            md: "4fr 1fr 1fr 1fr",
          }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>

            <Box mb="4">
              <Text>{siteData.address}</Text>
              <Text>
                Tel. {siteData.tel} - Email. {siteData.email}
              </Text>
              <Text>
                C.F. {siteData.fiscalCode} - Registro Regionale delle OdV n°{" "}
                {siteData.odv}
              </Text>
              <Text>IBAN. {siteData.iban}</Text>
            </Box>

            <Text fontSize={"sm"}>
              © {today.getFullYear()} {siteData.meta.title}
            </Text>
          </Stack>

          <Stack align="flex-start">
            <Text fontWeight="900" fontSize={"lg"} mb={2}>
              Pagine
            </Text>
            <Link href="/chi-siamo">Chi siamo</Link>
            <Link href="/contattaci">Contattaci</Link>
            <Link href="/documenti">Documenti</Link>
            <Link href="/sostienici">Sostienici</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="900" fontSize={"lg"} mb={2}>
              Attività
            </Text>
            <Link href="/progetti">Progetti</Link>
            <Link href="/iniziative">Iniziative</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="900" fontSize={"lg"} mb={2}>
              Seguici
            </Text>
            <Stack direction={"row"}>
              <SocialButton label={"Facebook"} href={siteData.facebook}>
                <FaFacebook />
              </SocialButton>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
