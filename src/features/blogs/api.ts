import { Blog } from './types'
import { axios } from '~/lib/axios'

const list = async (): Promise<Blog[]> => {
  return await axios.get('/blogs')
}

export default { list }
