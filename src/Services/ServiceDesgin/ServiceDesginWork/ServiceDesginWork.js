import React from 'react'
import styles from './style.module.css'
import banner from '../../../Img/salaar-banner.jpg'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const ServiceDesginWork = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
  // useGSAP(()=>{
  //   gsap.from('#ServiceDesginWork',{
  //      x:'-100%',
  //      opacity:0,
  //      duration:2,
  //      scrollTrigger:{
  //       trigger:'#ServiceDesginWork',
  //       start:'top 50%'
  //      }
  //   })
  // })

  return (
    <div id='ServiceDesginWork' className={styles.ServiceDesginWork}>
        <section className={styles.ServiceDesginWorkBox1}>
            <h2>Design</h2>
            <img src={banner} alt=''/>
        </section>
      
        <section className={styles.ServiceDesginWorkBox1}>
            <h1>Creative & Responsive</h1>
            <h2>Created great experience for clients .</h2>
            <ul>
                <li>UX-UI</li>
                <li>Web</li>
                <li>Mobile</li>
                <li>Brandin</li>
            </ul>
        </section>


    </div>
  )
}

export default ServiceDesginWork