import React from 'react'
import HomePageHeader from './HomePage_Header/HomePageHeader'
import ScrollText from './ScrollText/ScrollText'
import DefineUS from './DefineUS/DefineUS'
import OurWorks from './OurWorks/OurWorks'
import PatnerClient from './Patner&Client/PatnerClient'
import Founder from './FounderSection/Founder'
import Motivation from './MotivationSection/Motivation'
import Testimonial from './Testimonial/Testimonial'




export const Home = () => {
  return (
    <div>
      <HomePageHeader/>
      <ScrollText/>
      <DefineUS/>
      <OurWorks/>
      <PatnerClient/>
      <Founder/>
      <Testimonial/>
      <Motivation/>
     
    </div>
  )
}
