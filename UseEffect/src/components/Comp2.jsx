import React, { useState } from 'react'

const Comp2 = () => {
    console.log("Component 2 rendered")
    const [num, setNum] = useState(0)
    return (
        <div>
            <p>{num}</p>
            <button onClick={() => setNum(num + 1)}>Add +1</button>
        </div>
    )
}

export default Comp2