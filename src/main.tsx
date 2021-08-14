import React from 'react'
import ReactDOM from 'react-dom'

import theme from './theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './routes'
import { AppProvider } from './context'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
