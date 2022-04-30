import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchFruits } from '../actions'

function App () {
  const fruits = useSelector(state => state.fruits)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFruits())
  }, [])

  const Fruits = styled.div`
    display: flex;
    width: 75%;
    justify-content: space-around;
    align-items: center;
    background-color: blanchedalmond;
    padding: 2rem 0;
    border-radius: .5rem;
  `;

  const Image = styled.img`
    height: 100px;
    width: 100px
  `;

  return (
      <div>
        <h1>I Love Fruit!</h1>
        <Fruits>
          {fruits.map(fruit => (
            <div key={fruit.id}>
              <p>{fruit.name}</p>
              <Image src={fruit.url} />
            </div>
          ))}
        </Fruits>
      </div>
  )
}

export default App