import React from 'react'
import Fruits from './Fruits'


// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
// `

const App = () => {
  return (
    <div>
      <h1 className='text-3xl underline'>I Love Fruit!</h1>
      <Fruits />
    </div>
  )
}

export default App