import React from 'react'
import Axios, { AxiosRequestConfig } from 'axios'

import { API_URL } from '~/config'
import storage from '~/utils/storage'
import { createStandaloneToast, useToast } from '@chakra-ui/react'

const authRequestInterceptor = (config: AxiosRequestConfig) => {
  const token = storage.getToken()
  if (token) {
    config.headers.authorization = `bearer ${token}`
  }
  config.headers.Accept = 'application/json'

  return config
}

export const axios = Axios.create({ baseURL: API_URL })

axios.interceptors.request.use(authRequestInterceptor)
axios.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const message = error.response?.data?.message || error.message
    const toast = createStandaloneToast()

    toast({
      title: 'Error',
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true
    })

    return Promise.reject(error)
  }
)
