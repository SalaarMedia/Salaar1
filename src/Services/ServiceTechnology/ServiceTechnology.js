import React from 'react'
import ServiceTechnologyHeader from './ServiceTechnologyHeader/ServiceTechnologyHeader'
import ServiceTechnologyServe from './ServiceTechnologyServe/ServiceTechnologyServe'
import ServiceTechnologyHowWe from './ServiceTechnologyHowWe/ServiceTechnologyHowWe'
import ServiceTechnologyTools from './ServiceTechnologyTools/ServiceTechnologyTools'
import ServiceTechnologyWork from './ServiceTechnologyWork/ServiceTechnologyWork'
import Footer from '../../HomePage_Component/Footer/Footer'

const ServiceTechnology = () => {
  return (
    <div>
      <ServiceTechnologyHeader/>
      <ServiceTechnologyServe/>
      <ServiceTechnologyHowWe/>
      <ServiceTechnologyTools/>
      <ServiceTechnologyWork/>
     
    </div>
  )
}

export default ServiceTechnology