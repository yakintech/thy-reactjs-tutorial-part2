import React, { useState } from 'react'

function StateArraySample() {

    const [numbers, setnumbers] = useState([3, 5, 7])

    const addRandom = () => {
        var randomNumber = Math.floor(Math.random() * 100)
        //stateler değişmesi için her zaman yeni bir REFERANSA İHTİYAÇ DUYARLAR!

        setnumbers([...numbers, randomNumber])
    }

    return <>
        <ul>
            {
                numbers.map(item => <li style={{fontSize:40}}>{item}</li>)
            }
        </ul>
        <button onClick={() => addRandom()}>Add Random Number</button>
    </>
}

export default StateArraySample