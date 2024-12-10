import React from 'react'
import styles from './style.module.css'


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ServiceMarketingServe = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
  // useGSAP(()=>{
  //   gsap.from('#ServiceMarketingServe',{
  //     y:400,
  //     opacity:0, 
  //     duration:2,
  //     scrollTrigger:{
  //       trigger:'#ServiceMarketingServe'
  //     }
  //   })
  // })

  return (
    <div id='ServiceMarketingServe' className={styles.ServiceMarketingServe}>
        <h4>What do we serve ?</h4>
      <h1>Comprehensive Marketing services that integrate digital craftsmanship and business goals.</h1>
    
        <div className={styles.ServiceMarketingServeList}>

          <ul> 
              <li>Email Marketing</li>
              <li>ASO</li>
              <li>Content Marketing</li>
          </ul>

          <ul>
              <li>Branding</li>
              <li>PPC Campaign</li>
              <li>Video Marketing</li>
          </ul>

          <ul>
              <li>SEO</li>
              <li>SMO</li>
              <li>SMM</li>
          </ul>


        </div>















    </div>
  )
}

export default ServiceMarketingServe