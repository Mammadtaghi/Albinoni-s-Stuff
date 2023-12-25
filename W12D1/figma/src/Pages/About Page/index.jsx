import React from 'react'
import OurStory from '../../Layout/About Layout/OurStory'
import SiteDevlopers from '../../Layout/About Layout/Site Developers'
import SiteServices from '../../Layout/About Layout/Site Services'
import Services from '../../Layout/CommonLayout/Services'
import './index.scss'

function About() {
  return (
    <main>
      <OurStory/>
      <SiteServices/>
      <SiteDevlopers/>
      <Services/>
    </main>
  )
}

export default About