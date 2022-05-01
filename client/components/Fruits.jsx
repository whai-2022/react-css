import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function Fruits () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
    <div 
      className='w-3/4 flex justify-around align-center bg-yellow-100 py-6 rounded-lg'
    >
       {fruits.map(fruit => (
          <div 
            key={fruit.id}
            className='flex flex-col align-item-center justify-content-center bg-white rounded-lg overflow-hidden'
          >
            <p className='capitalize color text-neutral-800 text-center'>{fruit.name}</p>
            <img src={fruit.url} className='h-48 w-48' alt={fruit}/>
          </div>
        ))}
    </div>
  )
}

export default Fruits
