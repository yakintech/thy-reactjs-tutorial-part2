import React, { useState } from 'react'
import { productsData } from '../data/products'

function ObjectArraySample() {

    const [products, setproducts] = useState(productsData)
    const [sorted, setsorted] = useState(false)


    const sortByUnitPrice = () => {

        if (!sorted)
            products.sort((a, b) => a.unitPrice - b.unitPrice);
        else
            products.sort((a, b) => b.unitPrice - a.unitPrice);

        setsorted(!sorted)
        setproducts([...products])

    }

    const searchData = (data) => {
        var filteredProducts = productsData.filter(q => q.name.toLowerCase().startsWith(data.toLowerCase()))
        setproducts(filteredProducts)
    }

    return <>
        <h1>Products Length: {products.length}</h1>
        <button onClick={() => setproducts([])}>Clear</button>

        <hr />
        <div>
            <input type='text' onChange={(e) => searchData(e.target.value)} placeholder='search...' />
        </div>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th style={{ cursor: 'pointer' }} onClick={sortByUnitPrice}>Unit Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default ObjectArraySample