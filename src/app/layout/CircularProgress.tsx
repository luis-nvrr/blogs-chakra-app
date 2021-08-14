import React from 'react'
import {
  Flex,
  Center,
  CircularProgress as ChakraCircularProgress
} from '@chakra-ui/react'

const CircularProgress: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.100"
      justifyContent="center"
      alignItems="center"
    >
      <Center>
        <ChakraCircularProgress isIndeterminate color="primary.500" />
      </Center>
    </Flex>
  )
}

export default CircularProgress
