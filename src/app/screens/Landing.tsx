import React from 'react'
import { useNavigate } from 'react-router'

import { useAuth } from '~/features/auth/hooks'
import {
  Heading,
  Center,
  Text,
  Stack,
  Box,
  Button,
  Flex,
  Container,
  Grid,
  Link,
  Divider
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Landing: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useAuth()

  const handleStart = () => {
    if (user) {
      navigate('/app')
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        bgGradient="linear-gradient(90deg, rgba(71,185,163,1) 0%, rgba(71,185,128,0.9612219887955182) 48%, rgba(39,118,213,0.8827906162464986) 100%);"
        justifyContent="center"
        alignItems="center"
      >
        <Center paddingY={6} maxWidth="6xl">
          <Stack
            height="100%"
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Heading as="h1" mb={6} size="2xl" color="blackAlpha">
              Blogs App
            </Heading>
            <Stack
              alignItems="center"
              direction="column"
              justifyContent="space-between"
            >
              <Box
                mb={3}
                maxWidth="60%"
                borderRadius="xl"
                boxShadow="md"
                padding={6}
                position="relative"
                backgroundColor="whiteAlpha.800"
              >
                <Text fontSize="xl" alignItems="center" color="blackAlpha">
                  Fullstack app developed as part of the{' '}
                  <Link href="https://fullstackopen.com/en/" isExternal>
                    FullstackOpen2021
                  </Link>{' '}
                  challenge.
                </Text>
                <Divider />
                <Stack
                  alignItems="flex-end"
                  direction="row"
                  justifyContent="flex-end"
                  marginTop="2"
                >
                  <Text fontSize="md" color="gray.500">
                    <Link href="https://github.com/luis-nvrr" isExternal>
                      Visit my Github <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Text>
                </Stack>
              </Box>
              <Button colorScheme="teal" onClick={handleStart}>
                Start!
              </Button>
            </Stack>
          </Stack>
        </Center>
      </Flex>
    </>
  )
}

export default Landing
