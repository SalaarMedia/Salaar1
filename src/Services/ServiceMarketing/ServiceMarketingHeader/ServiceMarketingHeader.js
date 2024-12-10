import React from 'react'
import styles from './style.module.css'
import marketimg from '../../../Img/market.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceMarketingHeader = () => {
 
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{

  //    gsap.from('#ServiceMarketingHeaderBox1',{
  //     x:-400,
  //     opacity:0,
  //     duration:2
  //    })


  //    gsap.from('#ServiceMarketingHeaderBox2',{
  //     x:400,
  //     opacity:0,
  //     duration:2
  //    })

  //    gsap.from('#ServiceMarketingHeaderPara',{
  //     y:300,
  //     opacity:0,
  //     duration:2,
  //     scrollTrigger:{
  //       trigger:'#ServiceMarketingHeaderPara'
  //     }
  //    })

  // })


  return (
    <div className={styles.ServiceMarketingHeader}>
          <section id='ServiceMarketingHeaderBox1' className={styles.ServiceMarketingHeaderBox1}>
         <img src={marketimg} alt=''/>
        </section>

        <section id='ServiceMarketingHeaderBox2' className={styles.ServiceMarketingHeaderBox2}>
          <h1>Marketing</h1>
          <h2>We design perceptions for the brands..</h2>
          <h3 id='ServiceMarketingHeaderPara'>Designing brand perceptions with neuromarketing and behavioral science to enhance customer experiences.
    
          </h3>
       </section>
    </div>
  )
}

export default ServiceMarketingHeader