
import React from 'react'

type plustypes ={
    jama:string
}

function Plus({jama}:plustypes) {
  return (
    <div>
      <h1 > its a <span style={{color:"green"}}>{jama}</span> wala component</h1>
    </div>
  )
}

export default Plus
