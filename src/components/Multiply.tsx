
import React from 'react'
type multitypes={
    zarab:string
    children:React.ReactNode
}
function Multiply({zarab,children}:multitypes) {
  return (
    <div>
        <h1>

      its a {zarab} wala component {children}
        </h1>
    </div>
  )
}

export default Multiply
