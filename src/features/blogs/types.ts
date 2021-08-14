import { User } from '~/features/users/types'

export interface Blog {
  id: number
  likes: number
  title: string
  author: string
  url: string
  user: User
}
