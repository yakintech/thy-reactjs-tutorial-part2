import React from 'react'
import { productsData } from '../data/products'

function ProductList() {

  return <table>
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Unit Price</th>
        </tr>
    </thead>
    <tbody>
        {
            productsData.map(item => <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.unitPrice}</td>
            </tr>)
        }
    </tbody>
  </table>
}

export default ProductList