import React from 'react'
import './index.scss'
import homeAdImage from "../../../images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
import Button from '../../../Components/Common Components/Button'

function HomeAd() {
  return (
    <section id='HomeAd'>
      <div className="homeAdContainer">
        <div className="homeAdTextBox">
          <h5 className="homeAdTitle">Categories</h5>
          <h2 className='homeAdSubTitle'>Enhance Your <br /> Music Experience</h2>
          <div className="homeAdExpireTime">
            <div className="homeAdTime" data='Days'>23</div>
            <div className="homeAdTime" data='Hours'>05</div>
            <div className="homeAdTime" data='Minutes'>59</div>
            <div className="homeAdTime" data='Seconds'>35</div>
          </div>
          <Button bgColor='#00ff66'>Buy Now!</Button>
        </div>
        <div className="homeAdProductImg">
          <img src={homeAdImage} alt="" />
        </div>
      </div>
    </section>
  )
}

export default HomeAd