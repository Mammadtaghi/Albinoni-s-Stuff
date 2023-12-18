import React from 'react'
import './index.scss'
import SectionTitle from '../../../Components/Home Components/SectionTitle'
import SectionSubTitle from '../../../Components/Home Components/SectionSubTitle'
import CategoryBox from '../../../Components/Home Components/CategoryBox'
import HeadPhone from '../../../Components/Home Components/HeadPhone'
import GamePad from '../../../Components/Home Components/GamePad'
import SmartWatch from '../../../Components/Home Components/SmartWatch'
import Camera from '../../../Components/Home Components/Camera'
import CellPhone from '../../../Components/Home Components/CellPhone'
import Computer from '../../../Components/Home Components/Computer'

function Categories() {
  return (
    <section id='Categories'>
      <SectionTitle>Categories</SectionTitle>
      <SectionSubTitle>Browse By Category</SectionSubTitle>
      <div className="CategoryContainer">
        <CategoryBox><CellPhone/><h4>CellPhone</h4></CategoryBox>
        <CategoryBox><Computer/><h4>Computer</h4></CategoryBox>
        <CategoryBox><SmartWatch/><h4>SmartWatch</h4></CategoryBox>
        <CategoryBox><Camera/><h4>Camera</h4></CategoryBox>
        <CategoryBox><HeadPhone/><h4>HeadPhone</h4></CategoryBox>
        <CategoryBox><GamePad/><h4>GamePad</h4></CategoryBox>
      </div>
    </section>
  )
}

export default Categories