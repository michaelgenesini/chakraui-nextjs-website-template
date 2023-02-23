import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren

export const Layout = ({ children }: Props) => {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>
}
