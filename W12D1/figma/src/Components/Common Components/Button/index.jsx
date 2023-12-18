import React from 'react'
import "./index.scss"

function Button({children,color='white', bgColor='tomato',fontSize='18px'}) {
  return (
    <button id='button' style={{color:color, backgroundColor:bgColor,fontSize:fontSize}}>
        {children}
    </button>
  )
}

export default Button