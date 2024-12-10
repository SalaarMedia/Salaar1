import React from 'react'
import styles from './style.module.css'
import ServiceDesginHeader from './ServiceDesginHeader/ServiceDesginHeader'
import ServiceDesginServe from './ServiceDesginServe/ServiceDesginServe'
import ServiceDesginHowWe from './ServiceDesginHowWe/ServiceDesginHowWe'
import ServiceDesginTools from './ServiceDesginTools/ServiceDesginTools'
import ServiceDesginWork from './ServiceDesginWork/ServiceDesginWork'
import Footer from '../../HomePage_Component/Footer/Footer'
const ServiceDesgin = () => {
  return (
    <div className={styles.serviceDesdinCont}>
      <ServiceDesginHeader/>
      <ServiceDesginServe/>
      <ServiceDesginHowWe/>
      <ServiceDesginTools/>
      <ServiceDesginWork/>
      <Footer/>
      
    </div>
  )
}

export default ServiceDesgin