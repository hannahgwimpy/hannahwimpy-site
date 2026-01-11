export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags?: string[]
}

export interface WorkItem {
  title: string
  date: string
  location?: string
  description?: string
  tags: string[]
  link?: string
  image?: string
}
