import React from 'react'
import ProductDetail from './props/ProductDetail'
import JsxEvents from './components/JsxEvents'
import Parent from './props/Parent'
import ProductList from './components/ProductList'
import StateColor from './stateSample/StateColor'
import StateArraySample from './stateSample/StateArraySample'
import ObjectArraySample from './stateSample/ObjectArraySample'
import InputStateSample from './stateSample/InputStateSample'

function App() {

  return <ObjectArraySample/>

  const hello = () => {
    console.log("Hello Props!")
  }

  const showData = (data) => {
    alert(data)
  }


  return <>
    {/* <SiteHeader/>
    <p>site content</p>
    <UserDetail/>
    <SiteFooter/>
    <hr /> */}
    <JsxEvents />
    <ProductDetail name="IPhone" unitPrice={2200} stock={100} points={[3, 5, 2]} hello={hello} show={showData}  />
    <Parent>
      <h1>Çağatay Yıldız</h1>
    </Parent>
    <ProductList/>
  </>
}

export default App