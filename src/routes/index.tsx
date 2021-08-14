import React from 'react'
import { lazyImport } from '~/utils/lazyImport'
import { useAuth } from '~/features/auth/hooks'

const { ProtectedRoutes } = lazyImport(
  () => import('./ProtectedRoutes'),
  'ProtectedRoutes'
)
const { PublicRoutes } = lazyImport(
  () => import('./PublicRoutes'),
  'PublicRoutes'
)

export const AppRoutes = (): any => {
  const [user, setUser, clearUser] = useAuth()
  return user ? <ProtectedRoutes /> : <PublicRoutes />
}
