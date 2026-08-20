import React, { useContext } from 'react'
import { Mystore } from '../ContextApi/MyContext'

const Comp4 = () => {
    console.log("Component 4 rendered")
    const { count, setCount } = useContext(Mystore)
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default Comp4