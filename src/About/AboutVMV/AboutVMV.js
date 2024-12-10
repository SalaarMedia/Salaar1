import React from 'react'
import styles from './style.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";



 
const AboutVMV = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

// useGSAP(()=>{
//   const vmv=gsap.timeline()

//   gsap.from('#AboutVision',{
//     x:-300,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//       trigger:'#AboutVMV',
//       start:'top 60%'
//     }

//   })


//   gsap.from('#AboutMission',{
//     y:300,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//       trigger:'#AboutVMV',
//       start:'top 60%'
//     }

//   })

//   gsap.from('#AboutValue',{
//     x:300,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//       trigger:'#AboutVMV',
//       start:'top 60%',
//     }

//   })



// })



  





  return (
    <div id='AboutVMV' className={styles.AboutVMV}>
        <section id='AboutVision' className={styles.AboutVision}>
            <h1>Vision</h1>
            <p>To be the world's best and most trusted human experience design
            company</p>
            
        </section>

        <section id='AboutMission' className={styles.AboutMission}>
        <h1>Mission</h1>
        <p>To enhance and elevate human interaction</p>
        </section>

        <section id='AboutValue' className={styles.AboutValue}>
        <h1>Value</h1>
        <p>To pursue excellence through dedicated teamwork</p>
        </section>
    </div>
  )
}

export default AboutVMV