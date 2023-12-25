import React from 'react'
import './index.scss'

function PhoneEmail() {
  return (
    <div id='PhoneEmail'>
      <div className="contactPhone">
        <span className='contactTitle'><i className="fa-solid fa-phone"></i>Call To Us</span>
        <span>We are available 24/7, 7 days a week.</span>
        <p>Phone: <span>+8801611112222</span></p>
      </div>
      <hr color='grey' style={{ width: '100%' }} />
      <div className="contactEmail">
        <span className='contactTitle'><i className="fa-solid fa-envelope"></i>Call To Us</span>
        <span>Fill out our form and we will contact you within 24 hours.</span>
        <span>Emails: customer@exclusive.com</span>
        <span>Emails: support@exclusive.com</span>
      </div>
    </div>
  )
}

export default PhoneEmail