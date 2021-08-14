import React from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../components/Layout'
import LoginForm from '../components/LoginForm'

export const Login: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <LoginForm onSuccess={() => navigate('/app')} />
    </Layout>
  )
}
