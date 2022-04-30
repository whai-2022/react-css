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
      <div>
        <h1>I Love Fruit!</h1>
        <ul>
          {fruits.map(fruit => (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
              <img src={fruit.url} style={{height: '100px', width: '100px' }}/>
            </div>
          ))}
        </ul>
      </div>
  )
}

export default App