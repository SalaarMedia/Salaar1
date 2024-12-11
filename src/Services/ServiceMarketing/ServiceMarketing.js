import React from 'react'
import ServiceMarketingHeader from './ServiceMarketingHeader/ServiceMarketingHeader'
import ServiceMarketingServe from './ServiceMarketingServe/ServiceMarketingServe'
import ServiceMarketingHowWe from './ServiceMarketingHowWe/ServiceMarketingHowWe'
import ServiceMarketingTools from './ServiceMarketingTools/ServiceMarketingTools'
import ServiceMarketingWork from './ServiceMarketingWork/ServiceMarketingWork'
import Footer from '../../HomePage_Component/Footer/Footer'
const ServiceMarketing = () => {
  return (
    <div>
      <ServiceMarketingHeader/>
      <ServiceMarketingServe/>
      <ServiceMarketingHowWe/>
      <ServiceMarketingTools/>
      <ServiceMarketingWork/>
    </div>
  ) 
}

export default ServiceMarketing