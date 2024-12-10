import React from 'react'
import styles from './style.module.css'
import banner from '../../../Img/techbanner.jpg'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const ServiceTechnologyWork = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //   gsap.from('#ServiceTechnologyWork',{
  //       x:-400,
  //       opacity:0,
  //       duration:2,
  //       scrollTrigger:{
  //         trigger:'#ServiceTechnologyWork'
  //       }
  //   })
  // })

  return (
    <div id='ServiceTechnologyWork' className={styles.ServiceTechnologyWork}>
        <section className={styles.ServiceTechnologyWorkBox1}>
            <h2>Tech</h2>
            <img src={banner} alt=''/>
        </section>
      
        <section className={styles.ServiceTechnologyWorkBox1}>
            <h1>Creative & Responsive</h1>
            <h2>Increased active users by a staggering 73% .</h2>
            <ul>
                <li>UX-UI</li>
                <li>Web</li>
                <li>Mobile</li>
              
            </ul>
        </section>


    </div>
  )
}

export default ServiceTechnologyWork