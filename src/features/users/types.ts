import { Blog } from '~/features/blogs/types'

export interface User {
  id: number
  username: string
  name: string
  blogs: Blog[]
}
