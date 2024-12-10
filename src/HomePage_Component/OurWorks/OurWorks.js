import React from 'react'
import styles from './style.module.css'
import Desgin from './DefineUsDesgin/Desgin'
import Technology from './DefineUsTechnology/Technology'
import Business from './DefineUsBussiness/Business'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OurWorks = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //   let tl=gsap.timeline();
  //   gsap.from('#ourWorksHeader',{
  //     y:'100px',
  //     duration:1,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:'#ourWorksHeader'
  //     }
  //   })
  // })




  return (
    <div className={styles.ourWorksContainer}>

<div id='ourWorksHeader' className={styles.ourWorksHeader}>
        <h1>We are a global creative agency that combines design expertise with technology and intelligence.</h1>
</div>

 <Desgin/>
 {/* <Technology/>
 <Business/> */}



    </div>
  )
}

export default OurWorks