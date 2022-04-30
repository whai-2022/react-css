import React from 'react'
import styled from 'styled-components'
import Fruits from './Fruits'

function App () {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-color: lightblue;
  `;

  return (
    <Container>
      <h1>I Love Fruit!</h1>
      <Fruits />
    </Container>  
  )
}

export default App