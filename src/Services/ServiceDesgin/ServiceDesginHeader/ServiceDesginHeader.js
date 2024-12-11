import React from 'react'
import styles from './style.module.css'
import desimg from '../../../Img/desgin1.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ServiceDesginHeader = () => {
 
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
   
  //   gsap.from('#ServiceDesginHeaderBox1',{
  //     x:400,
  //     opacity:0,
  //     duration:2
  //   })

  //   gsap.from('#ServiceDesginHeaderBox2',{
  //     x:-400,
  //     opacity:0,
  //     duration:2
  //   })

  //   gsap.from('#ServiceDesginHeaderPara',{
  //     y:100,
  //     opacity:0,
  //     duration:2,
  //     scrollTrigger:{
  //       trigger:'#ServiceDesginHeaderPara',
        
  //     }
  //   })


  // })

  return (
    <div id='ServiceDesginHeader' className={styles.ServiceDesginHeader}>
        <section id='ServiceDesginHeaderBox1' className={styles.ServiceDesginHeaderBox1}>
         <img src={desimg} alt=''/>
        </section>

        <section id='ServiceDesginHeaderBox2' className={styles.ServiceDesginHeaderBox2}>
          <h1>DESIGN</h1>
          <h2 >We create designs to augment User Experiences.</h2>
          <h3 id='ServiceDesginHeaderPara'>We analyze human behavioral patterns and blend them with data science and information architecture to design a unique 'blended experience'.
          </h3>
       </section>
    </div>
  )
}

export default ServiceDesginHeader