import React, { useState } from 'react'

function StateIntro2() {

    //counter değişkenimin kendisi, setcounter değişkeni "değiştirecek" fonksiyon. 0 ise default value
    const [counter, setcounter] = useState(0)

    console.log("component rendered!")

    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increase</button>
    </>
}

export default StateIntro2