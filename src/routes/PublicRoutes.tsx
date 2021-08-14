import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthRoutes } from '~/features/auth'
import Landing from '~/app/screens/Landing'

export const PublicRoutes = (): any => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
