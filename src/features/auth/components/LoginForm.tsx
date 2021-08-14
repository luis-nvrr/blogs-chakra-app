import React from 'react'
import {
  chakra,
  FormControl,
  Input,
  Box,
  Stack,
  Avatar,
  Heading,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  FormHelperText,
  Link
} from '@chakra-ui/react'
import { FaUserAlt, FaLock } from 'react-icons/fa'
import { LoginCredentials } from '../types'
import { useAuth } from '../hooks'

const CFaUserAlt = chakra(FaUserAlt)
const CFaLock = chakra(FaLock)

type Props = {
  onSuccess: () => void
}

const LoginForm: React.FC<Props> = ({ onSuccess }: Props) => {
  const [user, setUser, clearUser] = useAuth()
  const [showPassword, setShowPassword] = React.useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  const [password, setPassword] = React.useState<string>('')
  const [username, setUsername] = React.useState<string>('')

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setPassword(event.target.value)
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setUsername(event.target.value)
  }

  const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const credentials: LoginCredentials = {
      username,
      password
    }
    await setUser(credentials)

    onSuccess()
  }

  return (
    <Stack
      flexDirection="column"
      marginBottom="2"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar bgGradient="linear(to-r, green.200, pink.500)" />
      <Heading color="white">Welcome!</Heading>
      <form onSubmit={handleLoginSubmit}>
        <Stack
          spacing={4}
          padding="2rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
          borderRadius="xl"
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<CFaUserAlt color="gray.300" />}
              />
              <Input
                onChange={handleUsernameChange}
                type="text"
                placeholder="Username"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                children={<CFaLock color="gray.300" />}
              />
              <Input
                onChange={handlePasswordChange}
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link>forgot password?</Link>
            </FormHelperText>
          </FormControl>
          <Button
            borderRadius="md"
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
          >
            Login
          </Button>
        </Stack>
      </form>
    </Stack>
  )
}

export default LoginForm
