import React from 'react'
import './index.scss'

function Service({img='', svg='',serviceTitle,serviceInfo,fontSize='18px',border='0px',width='inherit',height='inherit'}) {
  return (
    <div id='Service' style={{border:border, width:width, height:height}}>
      <div className="imgBox">{ img ? <img src={img} /> : svg}</div>
      <h4 className='serviceTitle' style={{fontSize:fontSize}}>{serviceTitle}</h4>
      <h6 className='serviceInfo'>{serviceInfo}</h6>
    </div>
  )
}

export default Service