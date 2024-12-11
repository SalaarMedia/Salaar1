import React from 'react'
import styles from './style.module.css'
import ServiceDesginHeader from './ServiceDesginHeader/ServiceDesginHeader'
import ServiceDesginServe from './ServiceDesginServe/ServiceDesginServe'
import ServiceDesginHowWe from './ServiceDesginHowWe/ServiceDesginHowWe'
import ServiceDesginTools from './ServiceDesginTools/ServiceDesginTools'
import ServiceDesginWork from './ServiceDesginWork/ServiceDesginWork'
const ServiceDesgin = () => {
  return (
    <div className={styles.serviceDesdinCont}>
      <ServiceDesginHeader/>
      <ServiceDesginServe/>
      <ServiceDesginHowWe/>
      <ServiceDesginTools/>
      <ServiceDesginWork/>
     
      
    </div>
  )
}

export default ServiceDesgin