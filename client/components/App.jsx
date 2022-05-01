import React from 'react'
import Fruits from './Fruits'

const App = () => {
  return (
    <div className='flex flex-col  items-center bg-sky-200 h-screen w-screen'>
      <h1 className='text-3xl font-bold text-neutral-800 py-6'>I Love Fruit!</h1>
      <Fruits />
    </div>
  )
}

export default App

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 100vh;
//   width: 100vw;
// `