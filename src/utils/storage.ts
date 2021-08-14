import { AuthUser } from '~/features/auth/types'

const storagePrefix = 'blogapp_react_'

const storage = {
  getToken: (): AuthUser | undefined => {
    const user = window.localStorage.getItem(`${storagePrefix}token`)
    if (!user) return undefined
    return JSON.parse(user)
  },
  setToken: (token: AuthUser): void => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
  clearToken: (): void => {
    window.localStorage.removeItem(`${storagePrefix}token`)
  }
}

export default storage
