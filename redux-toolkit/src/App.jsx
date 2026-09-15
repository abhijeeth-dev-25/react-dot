import React, { use, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, updatement } from './features/counterSlice'

const App = () => {

  const [value, setValue] = useState("")

 const count = useSelector((store) => {
  return store.counter.value
 })

 const dispatch = useDispatch()

  return (
    <div>
      <h1 className='h-10 w-60 p-5 border border-black text-black  flex items-center justify-center rounded-full m-5'>count: {count}</h1>
      <button className='h-10 w-45 bg-black text-white rounded-lg m-10'
       onClick={() => {
        dispatch(increment())
      }}>increment</button>

      <button  className='h-10 w-45 bg-black text-white rounded-lg'
      onClick={()=>{
        dispatch(decrement())
      }}>decrement</button>

      <input 
      onChange={(e)=>{
        setValue(e.target.value)
      }}
      value={value}
      className='h-10 w-75 bg-white rounded-full text-black p-5 m-5 border border-black '  type="text" placeholder='Enter any value'/>

      <button 
      onClick={()=>{
        dispatch(updatement(value))
        setValue("")
      }}
      className='h-10 w-45 bg-black text-white rounded-lg m-10'>Add value</button>

    </div>
  )
}

export default App