import { Flex, Heading, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import api from '~/features/blogs/api'
import { Blog } from '~/features/blogs/types'
import header from '~/assets/header.png'
import BlogList from '~/features/blogs/components/BlogsList'
import CircularProgress from '~/app/layout/CircularProgress'
import { useBlogStore } from '~/features/blogs/hooks'

const HomeScreen: React.FC = () => {
  const { blogs, list } = useBlogStore()
  const [status, setStatus] = React.useState<
    'resolved' | 'pending' | 'rejected'
  >('pending')

  React.useEffect(() => {
    api.list().then((blogs) => {
      list(blogs)
      setStatus('resolved')
    })
  }, [])

  if (status === 'pending') {
    return <CircularProgress />
  }

  return (
    <Stack flex={1} spacing={6}>
      <Flex
        alignItems="flex-start"
        backgroundImage={`url(${header})`}
        backgroundSize="cover"
        borderRadius="md"
        justifyContent="flex-start"
        minHeight={64}
        padding={6}
      >
        <Heading color="white" fontSize="4xl">
          Blogs App
        </Heading>
      </Flex>
      <BlogList blogs={blogs} />
    </Stack>
  )
}

export default HomeScreen
