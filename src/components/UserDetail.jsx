import React from 'react'

function UserDetail() {

    var name = "Çağatay"
    var surname = "Yıldız"
    var points = [3, 11, 2]
    var status = true
    var address = {
        street: "Süleyman Seba caddesi",
        city:"İstanbul"
    }

    return <>
        <h1>Name: {name}</h1>
        <h1>Surname: {surname}</h1>
        <ul>
            {
                points.map(item => <li>{item}</li>)
            }
        </ul>
        {
            status == true ? <h1>User online..</h1> : <h1>user offline..</h1>
        }
        <p>Street: {address.street}</p>
        <p>City: {address.city}</p>

    </>
}

export default UserDetail