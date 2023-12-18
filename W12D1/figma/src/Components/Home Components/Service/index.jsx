import React from 'react'
import './index.scss'

function Service({img,serviceTitle,serviceInfo}) {
  return (
    <div id='Service'>
      <div className="imgBox"><img src={img} /></div>
      <h4 className='serviceTitle'>{serviceTitle}</h4>
      <h6 className='serviceInfo'>{serviceInfo}</h6>
    </div>
  )
}

export default Service