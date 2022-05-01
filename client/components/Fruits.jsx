import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, Text, Image  } from '@chakra-ui/react'

import { fetchFruits } from '../actions'

function Fruits () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <Flex w='75%' alignItems='center' justifyContent='space-around' p='6' bg='myColors.secondary' borderRadius='lg'>
       {fruits.map(fruit => (
          <Flex 
            key={fruit.id}
            flexDirection='column' 
            alignItems='center' 
            justifyContent='center' 
            bg='gray.100' 
            borderRadius='lg' 
            overflow='hidden'
          >
            <Text textTransform='capitalize' color='gray.800'>{fruit.name}</Text>
            <Image src={fruit.url} boxSize='250px' alt={fruit}/>
          </Flex>
        ))}
    </Flex>
  )
}

export default Fruits
