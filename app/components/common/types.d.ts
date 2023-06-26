export type PageContainerPropeties = {
  children: React.ReactNode
}

export type PageObject = {
  title: string
  url?: string
  index?: number
}
export type BreadcrumbProperties = {
  page: PageObject
}
export type BreadcrumbsProperties = {
  pages: PageObject[]
  id?: string
}
