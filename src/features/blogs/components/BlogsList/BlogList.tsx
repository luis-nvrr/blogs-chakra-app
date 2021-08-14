import { Divider, Stack } from '@chakra-ui/layout'
import React from 'react'

import { Blog } from '~/features/blogs/types'
import Grid from './Grid'
import Count from './Count'
import Filters from './Filters'
import { Filter } from './types'

interface Props {
  blogs: Blog[]
}

const BlogList: React.FC<Props> = ({ blogs }) => {
  const [filter, setFilter] = React.useState<Filter>(Filter.MostLiked)
  const filteredBlogs = React.useMemo(() => {
    switch (filter) {
      case Filter.MostLiked: {
        return [...blogs].sort((a, b) => b.likes - a.likes)
      }

      case Filter.LeastLiked: {
        return [...blogs].sort((a, b) => a.likes - b.likes)
      }
      default: {
        return blogs
      }
    }
  }, [filter, blogs])

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        divider={
          <Divider borderColor="gray.300" height={12} orientation="vertical" />
        }
        flex={1}
        spacing={6}
        width="100%"
      >
        <Count current={blogs.length} total={blogs.length} />
        <Filters active={filter} onChange={setFilter} />
      </Stack>
      <Grid blogs={filteredBlogs} />
      <Count current={filteredBlogs.length} total={filteredBlogs.length} />
    </Stack>
  )
}

export default BlogList
