import ChakraUIRenderer from "chakra-ui-markdown-renderer"
import ReactMarkdown from "react-markdown"
import { Heading, Text } from "@chakra-ui/layout"

const newTheme = {
  h1: (props: any) => {
    const { children } = props
    return (
      <Heading as="h1" size="3xl" color="brand.text">
        {children}
      </Heading>
    )
  },
  h2: (props: any) => {
    const { children } = props
    return (
      <Heading as="h2" size="xl" color="brand.text">
        {children}
      </Heading>
    )
  },
  h3: (props: any) => {
    const { children } = props
    return (
      <Heading as="h3" size="lg" color="brand.text">
        {children}
      </Heading>
    )
  },
  h4: (props: any) => {
    const { children } = props
    return (
      <Heading as="h4" size="md" color="brand.text">
        {children}
      </Heading>
    )
  },
  h5: (props: any) => {
    const { children } = props
    return (
      <Heading as="h5" size="sm" color="brand.text">
        {children}
      </Heading>
    )
  },
  h6: (props: any) => {
    const { children } = props
    return (
      <Heading as="h6" size="xs" color="brand.text">
        {children}
      </Heading>
    )
  },
  p: (props: any) => {
    const { children } = props
    return <Text color="brand.text">{children}</Text>
  },
  li: (props: any) => {
    const { children } = props
    return <Text color="brand.text">{children}</Text>
  },
  b: (props: any) => {
    const { children } = props
    return (
      <Text as="b" color="brand.text">
        {children}
      </Text>
    )
  },
}

type Props = {
  content: string
}

export const Markdown = ({ content }: Props) => (
  <ReactMarkdown components={ChakraUIRenderer(newTheme)} skipHtml>
    {content}
  </ReactMarkdown>
)
