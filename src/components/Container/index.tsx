import { Container as ChakraContainer } from "@chakra-ui/layout"
import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{}>

export const Container = ({ children }: Props) => (
  <ChakraContainer maxW="6xl" centerContent py="16">
    {children}
  </ChakraContainer>
)
