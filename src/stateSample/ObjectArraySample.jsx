import React, { useMemo, useState } from 'react'
import { productsData } from '../data/products'

function ObjectArraySample() {

    const [products, setproducts] = useState(productsData)
    const [sorted, setsorted] = useState(false)
    const [cart, setcart] = useState([])


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


    const addtoCart = (item) => {

        //öncelikle sepette ürün var mı kontrol edeceğim.
        var cartItem = cart.find(q => q.id == item.id)

        if (cartItem) {
            cartItem.quantity = cartItem.quantity + 1
            setcart([...cart])
        }
        else {
            let newCartItem = {
                id: item.id,
                name: item.name,
                unitPrice: item.unitPrice,
                quantity: 1
            }

            setcart([...cart, newCartItem])
        }

    }


    const removeItem = (item) => {

        let cartItem = cart.find(q => q.id == item.id)

        if (cartItem) {
            if (cartItem.quantity == 1) {
                var filteredCart = cart.filter(q => q.id != item.id)
                setcart(filteredCart)
            }
            else {
                cartItem.quantity = cartItem.quantity - 1;
                setcart([...cart])
            }
        }

    }

    const addItem = (item) => {

        let cartItem = cart.find(q => q.id == item.id)

        if(cartItem){
            cartItem.quantity = cartItem.quantity + 1;
            setcart([...cart])
        }

    }


    let totalPrice = 0;

    totalPrice = useMemo(() => {
        cart.forEach(item => {
            totalPrice = totalPrice + (item.quantity * item.unitPrice)
        })
        return totalPrice
    }, [cart])

    

    return <>
        <h1>Products Length: {products.length}</h1>
        <button onClick={() => setproducts([])}>Clear</button>

        <hr />
        <div>
            <input type='text' onChange={(e) => searchData(e.target.value)} placeholder='search...' />
        </div>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: "4%" }}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th style={{ cursor: 'pointer' }} onClick={sortByUnitPrice}>Unit Price</th>
                        <th>Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(item => <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice.toFixed(2)}</td>
                            <td><button onClick={() => addtoCart(item)}>Add to cart</button></td>
                        </tr>)
                    }
                </tbody>
            </table>

            <ul>
                <h3>Cart Items Length: {cart.length}</h3>
                <h3>Total Price: {totalPrice}</h3>
                {
                    cart && cart.map(item => <li style={{ margin: 10 }}>
                        {item.name} - {item.quantity} * {item.unitPrice.toFixed(2)} = {(item.unitPrice * item.quantity).toFixed(2)}
                        <button onClick={() => removeItem(item)} style={{ marginLeft: 10 }}> - </button>
                        <button onClick={() => addItem(item)} style={{ marginLeft: 5 }}> + </button>

                    </li>)
                }
            </ul>
        </div>

    </>
}

export default ObjectArraySample