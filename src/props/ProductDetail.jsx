import React from 'react'


function ProductDetail(props) {

    const { name, unitPrice, stock, points, hello, show} = props


    const merhaba = () => {
        console.log("MERHABA")
    }

    return <>
        <h2>Name: {name}</h2>
        <h2>Unit Price: {unitPrice}</h2>
        <h2>Stock: {stock}</h2>
        <ul>
            {
                points.map(item => <li>{item}</li>)
            }
        </ul>
        <button onClick={() => hello()}>Hello</button>
        <button onClick={() => show("Çağatay Yıldız")}>Show Data</button>
        <button onClick={merhaba}>Test</button>

    </>
}



// function ProductDetail({ name, unitPrice, stock }) {
//     return <>
//         <h2>Name: {name}</h2>
//         <h2>Unit Price: {unitPrice}</h2>
//         <h2>Stock: {stock}</h2>

//     </>
// }

// function ProductDetail(props) {
//   return <>
//         <h2>Name: {props.name}</h2>
//         <h2>Unit Price: {props.unitPrice}</h2>
//         <h2>Stock: {props.stock}</h2>

//   </>
// }

export default ProductDetail


