import React from 'react'
import './index.scss'

function CategoryBox({children,props}) {
  return (
    <div className='categoryBox'>
      {children}
    </div>
  )
}

export default CategoryBox