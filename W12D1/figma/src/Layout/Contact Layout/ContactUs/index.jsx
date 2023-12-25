import React from 'react'
import PhoneEmail from '../../../Components/Contact Components/PhoneandEmail'
import './index.scss'
import SendMessage from '../../../Components/Contact Components/SendMessage'

function ContactUs() {
  return (
    <section id='ContactUs'>
        <PhoneEmail/>
        <SendMessage/>
    </section>
  )
}

export default ContactUs