import React from 'react'
import Devloper from '../../../Components/About Components/Devloper'
import './index.scss'
import TomCruise from "./../../../images/TomCruise.png";
import EmmaWatson from "./../../../images/EmmaWatson.png";
import WillSmith from "./../../../images/WillSmith.png";

function SiteDevlopers() {
  return (
    <section id='SiteDevlopers'>
      <div className="siteDevlopersContainer">
        <Devloper img={TomCruise} name={'Tom Cruise'} job={'Founder & Chairman'} />
        <Devloper img={EmmaWatson} name={'Emma Watson'} job={'Managing Director'} />
        <Devloper img={WillSmith} name={'Will Smith'} job={'Product Designer'} />
      </div>
    </section>
  )
}

export default SiteDevlopers