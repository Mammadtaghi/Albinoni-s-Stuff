import React from 'react'
import './index.scss'
import { NavLink } from 'react-router-dom';
import QrCode from "./../../../images/Qrcode 1.png";
import PlayStore from "./../../../images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png";
import AppStore from "./../../../images/download-appstore.png";


function Footer() {
  return (
    <footer id='footer'>
      <ul className='footerList'>
        <li className='footerTitle'>Exclusive</li>
        <li><a href="_blank">Subscribe</a></li>
        <li><span>Get 10% off your first order</span></li>
        <li><div className="emailBox">
          <input type="text" placeholder='Enter your email' />
          <i className="fa-regular fa-paper-plane"></i>
        </div></li>
      </ul>
      <ul className='footerList'>
        <li className='footerTitle'>Support</li>
        <li><span>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span></li>
        <li><span>exclusive@gmail.com</span></li>
        <li><span>+88015-88888-9999</span></li>
      </ul>
      <ul className='footerList'>
        <li className='footerTitle'>Account</li>
        <li><NavLink to='/account'>My Account</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink> / <NavLink to='signup'>Register</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
        <li><NavLink to='/wishlist'>Wishlist</NavLink></li>
        <li><NavLink to='/shop'>Shop</NavLink></li>
      </ul>
      <ul className='footerList'>
        <li className='footerTitle'>Quick Link</li>
        <li><NavLink to='/'>Privacy Policy</NavLink></li>
        <li><NavLink to='/'>Terms Of Use</NavLink></li>
        <li><NavLink to='/faq'>FAQ</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <ul className='footerList'>
        <li className='footerTitle'>Download App</li>
        <li><span>Save $3 with App New User Only</span></li>
        <li><div className="downloadApp">
          <div className="downloadLSide"><img src={QrCode} alt="QrCode" /></div>
          <div className="downloadRSide">
            <img src={PlayStore} alt="PlayStore" />
            <img src={AppStore} alt="AppStore" />
          </div>
        </div></li>
        <li><div className="iconsBoxFooter">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
        </div></li>
      </ul>
    </footer>
  )
}

export default Footer