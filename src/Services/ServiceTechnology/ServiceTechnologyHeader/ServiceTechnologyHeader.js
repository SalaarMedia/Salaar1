import React from 'react'
import styles from './style.module.css'
import tecimg from '../../../Img/tech.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 

const ServiceTechnologyHeader = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
  // useGSAP(()=>{
        
  //    gsap.from('#ServiceTechnologyHeaderBox1',{
  //     x:-400,
  //     opacity:0,
  //     duration:2,
  //    })

  //    gsap.from('#ServiceTechnologyHeaderBox2',{
  //     y:400,
  //     opacity:0,
  //     duration:2,
  //    })

 
  // })


  return (
    <div id='ServiceTechnologyHeader' className={styles.ServiceTechnologyHeader}>
        <section id='ServiceTechnologyHeaderBox1' className={styles.ServiceTechnologyHeaderBox1}>
         <img src={tecimg} alt=''/>
        </section>

        <section id='ServiceTechnologyHeaderBox2' className={styles.ServiceTechnologyHeaderBox2}>
          <h1>Technology</h1>
          <h2>Decoding the power of coding.</h2>
          <h3>We design to empower human experiences.
          </h3>
       </section>
    </div>
  )
}

export default ServiceTechnologyHeader