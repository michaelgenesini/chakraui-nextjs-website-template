import { siteData } from "@/constants/siteData"
import Image from "next/image"

export const Logo = () => (
  <>
    <Image
      alt={`${siteData.meta.title} | logo`}
      src="/logo.png"
      width={250}
      height={30}
    />
  </>
)
