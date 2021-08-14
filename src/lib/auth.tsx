import React from 'react'

import CircularProgress from '~/app/layout/CircularProgress'
import {
  loginWithUsernameAndPassword,
  registerWithUsernameAndPassword
} from '~/features/auth/api'
import {
  LoginCredentials,
  RegisterCredentials,
  AuthUser
} from '~/features/auth/types'
import storage from '~/utils/storage'

const handleUserResponse = async (data: AuthUser): Promise<AuthUser> => {
  const { token } = data
  storage.setToken(data)
  return data
}

const loadUser = async (): Promise<AuthUser | undefined> => {
  const data = storage.getToken()
  if (!data) return undefined
  return data
}

const loginFn = async (data: LoginCredentials): Promise<AuthUser> => {
  const response = await loginWithUsernameAndPassword(data)
  const user = await handleUserResponse(response)
  return user
}

const registerFn = async (data: RegisterCredentials): Promise<AuthUser> => {
  const response = await registerWithUsernameAndPassword(data)
  const user = await handleUserResponse(response)
  return user
}

const logoutFn = async (): Promise<void> => {
  storage.clearToken()
  window.location.assign(window.location.origin as unknown as string)
}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return <CircularProgress />
  }
}

export default {
  handleUserResponse,
  loadUser,
  loginFn,
  registerFn,
  logoutFn
}
