import { siteData } from "@/constants/siteData"

export const generateMetaTitle = (title: string) =>
  `${title} - ${siteData.meta.title}`
