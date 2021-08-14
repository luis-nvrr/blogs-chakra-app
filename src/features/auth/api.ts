import { axios } from '~/lib/axios'
import { LoginCredentials, RegisterCredentials, AuthUser } from './types'

export const loginWithUsernameAndPassword = async (
  data: LoginCredentials
): Promise<AuthUser> => {
  return await axios.post('/login', data)
}

export const registerWithUsernameAndPassword = async (
  data: RegisterCredentials
): Promise<AuthUser> => {
  return await axios.post('/register', data)
}

export const getUserProfile = async (): Promise<AuthUser> => {
  return await axios.get('/me')
}
