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
            <img src={fruit.url} className='h-64 w-64' />
          </div>
        ))}
    </div>
  )
}

export default Fruits


// const FruitList = styled.div`
//     display: flex;
//     width: 75%;
//     justify-content: space-around;
//     align-items: center;
//     background-color: blanchedalmond;
//     padding: 2rem 0;
//     border-radius: .5rem;
//   `

//   const Fruit = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-color:rgb(250, 249, 249);
//   border-radius: .5rem;
//   overflow: hidden;
//     p {
//       text-transform: capitalize
//     }
//     img {
//       height: 250px;
//       width: 250px;
//     }
//   `