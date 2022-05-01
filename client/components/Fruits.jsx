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
    <div>
       {fruits.map(fruit => (
          <div key={fruit.id}>
            <p>{fruit.name}</p>
            <img src={fruit.url} style={{height: '250px', width: '250px'}} />
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