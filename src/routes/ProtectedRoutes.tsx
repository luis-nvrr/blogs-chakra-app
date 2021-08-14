import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'

import MainLayout from '~/app/layout/Layout'
import HomeScreen from '~/app/screens/Home'
import Landing from '~/app/screens/Landing'

const App = () => {
  return (
    <MainLayout>
      <Outlet />
      <HomeScreen />
    </MainLayout>
  )
}

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
