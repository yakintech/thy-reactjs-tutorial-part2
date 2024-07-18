import React, { useState } from 'react'

function StateColor() {
    const [color, setcolor] = useState("red")

    return <>
        <div style={{ width: 100, height: 100, backgroundColor: color }}>

        </div>
        <button onClick={() => setcolor("blue")}>Change Color</button>
    </>
}

export default StateColor