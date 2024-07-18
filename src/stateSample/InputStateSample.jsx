import React, { useState } from 'react'

function InputStateSample() {

    const [number1, setnumber1] = useState(0)
    const [number2, setnumber2] = useState(0)

    const calc = () => {

        var result = number1 * number2
        alert(result)
        
    }

    return <>
        <div>
            <label htmlFor="">Number-1</label>
            <input value={number1} type='text' onChange={(e) => setnumber1(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Number-2</label>
            <input value={number2} type='text' onChange={(e) => setnumber2(e.target.value)} />
        </div>
        <div>
            <button onClick={calc}>Calc</button>
        </div>
    </>
}

export default InputStateSample