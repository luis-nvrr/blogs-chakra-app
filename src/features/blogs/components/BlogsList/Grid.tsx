import React from 'react'
import { Grid as ChakraGrid } from '@chakra-ui/react'
import { Blog } from '~/features/blogs/types'
import BlogCard from './BlogCard'

interface Props {
  blogs: Blog[]
}

const Grid: React.FC<Props> = ({ blogs }) => {
  const [selected, setSelected] = React.useState<Blog['id'] | null>(null)

  return (
    <ChakraGrid
      gap={6}
      templateColumns="repeat(auto-fill, minmax(256px, 1fr))"
      width="100%"
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          isSelected={selected === blog.id}
          blog={blog}
          showDetails={() => {
            if (selected === blog.id) {
              setSelected(null)
            } else {
              setSelected(blog.id)
            }
          }}
        />
      ))}
    </ChakraGrid>
  )
}

export default Grid
