export type Article = {
  id: string
  title: string
  content: string
  authorId: string
  tags: string[]
  published: boolean
  createdAt: Date
  updatedAt: Date
}