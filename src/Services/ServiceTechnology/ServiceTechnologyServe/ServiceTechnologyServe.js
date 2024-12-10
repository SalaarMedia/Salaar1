import React from 'react'
import styles from './style.module.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
const ServiceTechnologyServe = () => {
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
  // useGSAP(()=>{
  //    gsap.from('#ServiceTechnologyServe',{
  //     y:400,
  //     opacity:0,
  //     duration:2,
  //     scrollTrigger:{
  //       trigger:'#ServiceTechnologyServe',
  //       start:'top 80%',
  //     }
  //    })
  // })


  return (
    <div id='ServiceTechnologyServe' className={styles.ServiceTechnologyServe}>
        <h4>What do we serve ?</h4>
      <h1>End-to-end neuromarketing services and branding strategies of the digital world.</h1>
         <h5>Web Devlopments.</h5>
        <div className={styles.ServiceTechnologyServeList}>

          <ul> 
              <li>Web Design</li>
              <li>Back-End</li>
              <li>Animations</li>
              <li>React</li>
              <li>PHP</li>
          </ul>

          <ul>
              <li>Development</li>
              <li>Javascript</li>
              <li>CRM</li>
              <li>ERP</li>
              <li>Laravel</li>
          </ul>

          <ul>
              <li>Front-End</li>
              <li>Css 3</li>
              <li>Angular</li>
              <li>Wordpress</li>
              <li>E-commerce</li>
              
          </ul>


        </div>



        <h5>Mobile Apps.</h5>
        <div className={styles.ServiceTechnologyServeList}>

           <ul> 
               <li>IOS</li>
               <li>Ionic</li>
               
          </ul>

          <ul>
               <li>Native</li>
               <li>Android</li>
              
         </ul>

          <ul>
               <li>Hybrid</li>
    
          </ul>


</div>











    </div>
  )
}

export default ServiceTechnologyServe