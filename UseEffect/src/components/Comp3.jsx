import React, { useContext } from 'react'
import { Mystore } from '../ContextApi/MyContext'

const Comp3 = () => {
    console.log("Component 3 rendered")
    const { count, setCount } = useContext(Mystore)
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Comp3