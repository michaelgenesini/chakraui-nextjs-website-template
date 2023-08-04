export const isSlugValid = (
  slug: string | string[] | undefined
): slug is string => typeof slug === "string"
