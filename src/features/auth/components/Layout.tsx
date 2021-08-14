import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, TagLabel } from '@chakra-ui/react'

const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      bgGradient="linear-gradient(90deg, rgba(180,58,58,1) 0%, rgba(253,123,29,0.8491771708683473) 50%, rgba(252,176,69,1) 100%)"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  )
}

export default Layout
