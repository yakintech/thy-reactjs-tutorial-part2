import React from 'react'

function Parent({children}) {

  return <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {children}
  </div>
}

export default Parent