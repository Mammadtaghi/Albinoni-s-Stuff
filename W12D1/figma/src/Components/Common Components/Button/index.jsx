import React from 'react'
import "./index.scss"

function Button({ children, color = 'white', bgColor = 'tomato', fontSize = '18px', type = '', border = '0', rowGap='0', columnGap='0', alignSelf='normal' }) {
  return (
    <button id='button' type={type} style={{ color: color, backgroundColor: bgColor, fontSize: fontSize, border: border, rowGap:rowGap, columnGap:columnGap, alignSelf:alignSelf }}>
      {children}
    </button>
  )
}

export default Button