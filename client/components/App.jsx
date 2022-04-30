import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFruits } from '../actions'

function App () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  return (
      <div className='app'>
        <h1>I Love Fruit!</h1>
        <div className='fruits'>
          {fruits.map(fruit => (
            <div key={fruit.id} className='fruit'>
              <p className='label'>{fruit.name}</p>
              <img src={fruit.url} className='image'/>
            </div>
          ))}
        </div>
      </div>
  )
}

export default App
