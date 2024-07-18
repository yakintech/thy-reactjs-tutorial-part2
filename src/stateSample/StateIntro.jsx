import React from 'react'

function StateIntro() {

    var name = "Çağatay"
    var number = 0

    const changeName = () => {
        name = "THY"
        document.getElementById("title").innerHTML = "Name: " + name
    }

    return <>
        <h1 id='title'>Name: {name}</h1>
        <h1>Number: {number}</h1>
        <hr />
        <button onClick={changeName}>Change Name</button>
    </>
}

export default StateIntro