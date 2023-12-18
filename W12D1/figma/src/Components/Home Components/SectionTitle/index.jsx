import React from 'react'
import './index.scss'

function SectionTitle({children}) {
  return (
    <h4 className="sectionTitle">
        {children}
    </h4>
  )
}

export default SectionTitle