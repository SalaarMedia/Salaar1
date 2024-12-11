import React from 'react'
import styles from './style.module.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ServiceDesginServe = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{ 
  //   let sd=gsap.timeline({
  //     scrollTrigger:{
  //       trigger:"#ServiceDesginServe",
        
  //     }
  //   })
  //   sd.from('#ServiceDesginServe',{
  //     y:300,
  //     opacity:0,
  //     duration:2,
  //   })
    
  //   sd.from('#ServiceDesginServeList ul li',{
  //     opacity:0,
  //     y:50,
  //     duration:1,
  //     stagger:1
  //   })



  // })


  return (
    <div id='ServiceDesginServe' className={styles.ServiceDesginServe}>
      <h4>What do we serve ?</h4>
      <h1>We help you translate a simple idea into an exotic Digital design transformation vision.</h1>

        <div id='ServiceDesginServeList' className={styles.ServiceDesginServeList}>

          <ul> 
              <li>UI Design</li>
              <li>UI Development</li>
              <li>UI guidelines</li>
              <li>Design System</li>
          </ul>

          <ul>
              <li>UX Design</li>
              <li>User Research</li>
              <li>UX Consultancy</li>
              <li>UX Writing</li>
          </ul>

          <ul>
              <li>Animations</li>
              <li>Iconography</li>
              <li>Illustrations</li>
              
          </ul>


        </div>

    </div>
  )
}

export default ServiceDesginServe