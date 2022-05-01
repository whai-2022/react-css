import React from 'react'
import { Flex, Heading  } from '@chakra-ui/react'


import Fruits from './Fruits'

const App = () => {

  return (
    <Flex w='100vw' h='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center' bg='lightblue'>
      <Heading as='h1' textAlign='center' color='gray.800' pb='4'>I Love Fruit!</Heading>
      <Fruits />
    </Flex>
  )
}

export default App