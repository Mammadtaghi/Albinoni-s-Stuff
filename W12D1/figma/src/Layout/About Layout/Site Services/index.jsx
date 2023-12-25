import React from 'react'
import './index.scss'
import Service from '../../../Components/Common Components/Service'
import IconShop from "./../../../images/icon_shop.png";
import IconShoppingBag from "./../../../images/Icon-Shopping bag.png";
import IconMoneyBag from "./../../../images/Icon-Moneybag.png";
import { IconSale } from '../../../images/Icon-Sale';

function SiteServices() {
  return (
    <section id='SiteServices'>
      <div className="siteServicesContainer">
        <Service img={IconShop} fontSize='30px' border='1px solid black' width='270px' height='230px' serviceTitle={'10.5K'} serviceInfo={'Sallers active our site'} />
        <Service svg={IconSale} fontSize='30px' border='1px solid black' width='270px' height='230px' serviceTitle={'33K'} serviceInfo={'Mopnthly Produduct Sale'} />
        <Service img={IconShoppingBag} fontSize='30px' border='1px solid black' width='270px' height='230px' serviceTitle={'45.5K'} serviceInfo={'Customer active in our site'} />
        <Service img={IconMoneyBag} fontSize='30px' border='1px solid black' width='270px' height='230px' serviceTitle={'25K'} serviceInfo={'Anual gross sale in our site'} />
      </div>
    </section>
  )
}

export default SiteServices