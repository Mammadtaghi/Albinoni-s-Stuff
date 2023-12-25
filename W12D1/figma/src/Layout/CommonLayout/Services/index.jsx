import React from 'react'
import './index.scss'
import DeliveryIcon from "../../../images/icon-Delivery Service.png";
import CostumerIcon from "../../../images/Icon-Customer service.png";
import SecureIcon from "../../../images/icon-Secure Service.png";
import Service from '../../../Components/Common Components/Service';


function Services() {
  return (
    <section id='Services'>
      <div className="servicesContainer">
        <Service img={DeliveryIcon} serviceTitle='FREE AND FAST DELIVERY' serviceInfo='Free delivery for all orders over $140' />
        <Service img={CostumerIcon} serviceTitle='24/7 CUSTOMER SERVICE' serviceInfo='Friendly 24/7 customer support' />
        <Service img={SecureIcon} serviceTitle='MONEY BACK GUARANTEE' serviceInfo='We return your money within 30 days' />
      </div>
    </section>
  )
}

export default Services