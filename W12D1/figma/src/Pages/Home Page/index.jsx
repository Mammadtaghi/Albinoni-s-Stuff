import React from 'react'
import './index.scss'
import Hero from '../../Layout/HomeLayout/Hero'
import Todays from '../../Layout/HomeLayout/Today\'s'
import Categories from '../../Layout/HomeLayout/Categories'
import BestSelling from '../../Layout/HomeLayout/BestSelling'
import HomeAdd from '../../Layout/HomeLayout/HomeAdd'
import OurProducts from '../../Layout/HomeLayout/OurProducts'
import Services from '../../Layout/CommonLayout/Services'

function Home() {
  return (
    <main>
      <Hero/>
      <Todays/>
      <Categories/>
      <BestSelling/>
      <HomeAdd/>
      <OurProducts/>

      <Services/>
    </main>
  )
}

export default Home