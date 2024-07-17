import React from 'react'

function JsxEvents() {

 const hello = () => {
    console.log("Hello...")
 }

  return <>
    <button onClick={hello}>Hello</button>
    <button onClick={() => hello()}>Hello-2</button>

  </>
}

export default JsxEvents