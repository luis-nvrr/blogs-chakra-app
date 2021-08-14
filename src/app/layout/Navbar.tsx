import { Box, Container, Stack, Image, Text, Icon } from '@chakra-ui/react'
import React from 'react'
import logo from '~/assets/logo.svg'
import { useAuth } from '~/features/auth/hooks'
import { CgLogOff } from 'react-icons/cg'
import { useNavigate } from 'react-router'
import { FaUser } from 'react-icons/fa'

const Navbar: React.FC = () => {
  const [user, setUser, clearUser] = useAuth()
  const navigate = useNavigate()

  const handleUserLogout = () => {
    navigate('/')
    clearUser()
  }

  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxWidth="6xl">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          justifyContent="space-between"
          paddingY={3}
        >
          <Image height={8} width={8} src={logo} />
          <Stack
            alignItems="center"
            color="gray.500"
            direction="row"
            spacing={3}
          >
            <Icon as={FaUser} w={6} h={6} />
            <Text fontWeight="500">{user?.name}</Text>
            <Stack
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius={9999}
              cursor="pointer"
              paddingX={3}
              paddingY={2}
              direciton="row"
              onClick={handleUserLogout}
            >
              <Icon as={CgLogOff}></Icon>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
