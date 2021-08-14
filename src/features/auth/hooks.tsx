import React from 'react'

import UserContext, { Context } from './context'

export const useAuth = (): [
  Context['state']['user'],
  Context['actions']['setUser'],
  Context['actions']['clearUser']
] => {
  const {
    state: { user },
    actions: { setUser, clearUser }
  } = React.useContext(UserContext)

  return [user, setUser, clearUser]
}
