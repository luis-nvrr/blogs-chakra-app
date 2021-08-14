import { Center } from '@chakra-ui/layout'
import React from 'react'
import CircularProgress from '~/app/layout/CircularProgress'

import { LoginCredentials, AuthUser } from './types'
import { loginWithUsernameAndPassword } from './api'
import auth from '~/lib/auth'
import storage from '~/utils/storage'

export interface Context {
  state: {
    user: AuthUser | undefined
  }
  actions: {
    setUser: (data: LoginCredentials) => Promise<AuthUser>
    clearUser: () => void
  }
}

const UserContext = React.createContext({} as Context)

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = React.useState<AuthUser | undefined>()
  const [status, setStatus] = React.useState<
    'pending' | 'resolved' | 'rejected'
  >('pending')

  const handleLogin = async (data: LoginCredentials): Promise<AuthUser> => {
    const userAuthenticated = await loginWithUsernameAndPassword(data)

    if (userAuthenticated) {
      storage.setToken(userAuthenticated)
      setUser(userAuthenticated)
      setStatus('resolved')
    }

    return userAuthenticated
  }

  const handleLogout = (): void => {
    storage.clearToken()
    setUser(undefined)
  }

  React.useEffect(() => {
    auth.loadUser().then((user) => {
      setUser(user)
      setStatus('resolved')
    })
  }, [])

  if (status === 'pending') {
    return <CircularProgress />
  }

  const state: Context['state'] = {
    user
  }

  const actions: Context['actions'] = {
    setUser: handleLogin,
    clearUser: handleLogout
  }

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext as default, UserProvider as Provider }
