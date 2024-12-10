import React from 'react'
import styles from './style.module.css'
import banner from '../../../Img/marketbanner.jpeg'


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceMarketingWork = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
 
//   useGSAP(()=>{
//       gsap.from('#ServiceMarketingWork',{
//           y:400,
//           opacity:0,
//           duration:2,
//           scrollTrigger:{
//               trigger:'#ServiceMarketingWork'
//           }
//       })
//   })



  return ( 
    <div id='ServiceMarketingWork' className={styles.ServiceMarketingWork}>
        <section className={styles.ServiceMarketingWorkBox1}>
            <h2>Marketing</h2>
            <img src={banner} alt=''/>
        </section>
      
        <section className={styles.ServiceMarketingWorkBox1}>
            <h1>Creative & Responsive</h1>
            <h2>We spiked downloads by building a super immersive startup brand.</h2>
            <ul>
                <li>UX-UI</li>
                <li>Web</li>
                <li>Mobile</li>
                <li>Brand</li>
              
            </ul>
        </section>


    </div>
  )
}

export default ServiceMarketingWork