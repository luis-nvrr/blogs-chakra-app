import {
  Box,
  BoxProps,
  Stack,
  Text,
  Image,
  Center,
  Divider,
  Flex,
  IconButton
} from '@chakra-ui/react'
import React from 'react'
import { FcCancel } from 'react-icons/fc'

import { Blog } from '~/features/blogs/types'
import like from '~/assets/like.svg'
import storage from '~/utils/storage'
import { useBlogStore } from '../../hooks'

interface Props extends BoxProps {
  blog: Blog
  isSelected: boolean
  showDetails: () => void
}

const BlogCard: React.FC<Props> = ({
  blog,
  isSelected,
  showDetails,
  ...props
}) => {
  const canDelete = blog.user.username === storage.getToken()?.username
  const { removeBlog } = useBlogStore()

  return (
    <Box
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="md"
      cursor={canDelete ? 'pointer' : 'pointer'}
      opacity={canDelete ? 1 : 0.5}
      padding={6}
      position="relative"
      {...props}
    >
      <Stack spacing={3}>
        <Stack
          alignItems="center"
          backgroundColor="white"
          borderColor={canDelete ? 'primary.500' : 'orange.500'}
          borderRadius={9999}
          borderWidth={1}
          color={canDelete ? 'primary.500' : 'orange.500'}
          direction="row"
          fontSize="sm"
          fontWeight="500"
          justifyContent="center"
          paddingX={3}
          paddingY={1}
          position="absolute"
          right={6}
          spacing={2}
          top={6}
        >
          <Text>{blog.likes}</Text>
          <Image height={4} src={like} width={4} />
        </Stack>
        <Center onClick={showDetails}>
          <Image
            objectFit="contain"
            src="http://www.cuevadelobo.com/wp-content/uploads/2017/03/Blog-intro.jpg"
            width={64}
          />
        </Center>
        {canDelete && (
          <Stack
            alignItems="center"
            backgroundColor="white"
            borderRadius={9999}
            borderWidth={1}
            direction="row"
            fontSize="sm"
            fontWeight="500"
            justifyContent="center"
            paddingX={0.5}
            paddingY={0.5}
            position="absolute"
            right={5}
            spacing={1}
            bottom={20}
          >
            <IconButton
              aria-label="Delete blog"
              icon={<FcCancel />}
              w={5}
              h={5}
              onClick={() => removeBlog(blog.id)}
            />
          </Stack>
        )}
        <Divider />
        <Stack alignItems="flex-start" spacing={0}>
          <Text color="gray.500" fontSize="sm">
            {blog.author}
          </Text>
          <Text fontWeight="500">{blog.title}</Text>
        </Stack>
      </Stack>
      {isSelected && (
        <Flex
          alignItems="center"
          borderRadius="sm"
          height="100%"
          justifyContent="center"
          left={0}
          position="absolute"
          top={0}
          width="100%"
          zIndex={2}
          onClick={showDetails}
        >
          <Box
            backgroundColor="primary.500"
            borderRadius="sm"
            height="100%"
            left={0}
            opacity={0.9}
            position="absolute"
            top={0}
            width="100%"
          />
          <Center maxWidth="50%">
            <Stack
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              spacing={6}
              zIndex={3}
            >
              <Text>
                {blog.url} by {blog.author}
              </Text>
            </Stack>
          </Center>
        </Flex>
      )}
    </Box>
  )
}

export default BlogCard
