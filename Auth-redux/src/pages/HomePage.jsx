import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../features/counterSlice'


const HomePage = () => {

    const [data, setData] = useState('')

    const dispatch = useDispatch()

    const {value} = useSelector((store)=>(store.counter))

    console.log(value)


    return (
                    <div>
       <h1>value: {value}</h1>
                        <button 
       className='border border-black m-5 rounded-2xl p-2'
       onClick={()=>  dispatch(increment())}
       >increment</button>
                        <button
       className='border border-black m-5 rounded-2xl p-2'
       onClick={()=> dispatch(decrement())}
       >decrement</button>

                        <input 
       className='h-10 w-60 p-2 rounded-2xl border '
       onChange={(e) => {
        setData(e.target.value)
       }}
       type="text" placeholder='Enter your value:' />
                        <button 
       className='border border-black m-5 rounded-2xl p-2'
       onClick={()=> dispatch(incrementByAmount(data))}
       >Add value</button>
        </div>
    )
}

export default HomePage