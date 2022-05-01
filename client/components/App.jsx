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
    <div className='flex flex-col justify-center items-center bg-blue-400 h-screen w-screen'>
      <h1 className='text-3xl font-bold'>I Love Fruit!</h1>
      <Fruits />
    </div>
  )
}

export default App