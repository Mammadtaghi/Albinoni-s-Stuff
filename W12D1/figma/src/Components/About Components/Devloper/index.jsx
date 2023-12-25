import React from 'react'
import './index.scss'

function Devloper({ img, name, job }) {
    return (
        <div id='Devloper'>
            <div className="devloperImg"><img src={img} alt="" /></div>
            <h3 className='devloperName'>{name}</h3>
            <h6 className='devloperJob'>{job}</h6>
            <div className="developerIconContainer">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
    )
}

export default Devloper