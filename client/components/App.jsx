import React from 'react'
import styled from 'styled-components'
import Fruits from './Fruits'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const App = () => {
  return (
    <Container>
      <h1>I Love Fruit!</h1>
      <Fruits />
    </Container>
  )
}

export default App