

import React from 'react'

type minustypes = {
    nafi:string,
    val?:number,
    style?:React.CSSProperties
}
function Minus({nafi,val,style}:minustypes) {
  return (
    <div>
        <h2 style={style}>its a {nafi} wala component its value is {val}</h2>
    </div>
  )
}

export default Minus