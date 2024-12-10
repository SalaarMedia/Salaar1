import React from 'react'
import styles from './style.module.css'
import fonder from '../../Img/founder.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Founder = () => {

   gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

   // useGSAP(()=>{

   //    const founder=gsap.timeline({
   //       scrollTrigger:{
   //          duration:10,
   //          trigger:"#founderContainer",
   //          start:'top 10%'
   //       }
   //    })
   
   //    founder.from('#founderContainerWraper',{
   //    opacity:0,
   //    duration:1,
   //    x:'100%'
   //  })


   //  founder.from('#founderHeader',{
   //    opacity:0,
   //    duration:1,
   //  })


   //  founder.from('#founderContent',{
   //    opacity:0,
   //    duration:1,
   //  })

   //  founder.from('#founderImage',{
   //    opacity:0,
   //    duration:1,
   //  })


   // })



  return (
    <div id='founderContainer' className={styles.founderContainer}>
        <div id='founderContainerWraper' className={styles.founderContainerWraper}>
     <section id='founderHeader' className={styles.founderHeader}>
        <h1 className={styles.founderHeader1}>Meet <br/> Our <br/> Founder</h1>
        <h1 className={styles.founderHeader2}>Meet Our Founder</h1>
     </section>

     <section id='founderContent' className={styles.founderContent}>
        <div id='svgWraper' className={styles.svgWraper}>
        <svg  id=''>
        <circle id='b-circle1' r="15" cx="50" cy="50" fill="#fb5457" />
        </svg>
        <svg >
        <circle id='b-circle2' r="15" cx="50" cy="50" fill="#ffffff" />
        </svg>
        <svg >
        <circle id='b-circle3' r="15" cx="50" cy="50" fill="#ff4500" />
        </svg>
        </div>
        <h1>Md. Ethshyam</h1>
        <h2>Founder, Head of UX at Salaar Media.Behavioral science and Neuromarketing expert.</h2>
         <div className={styles.founderSocial}>
            <span><i class="fa-brands fa-linkedin"></i></span>
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-square-instagram"></i></span>
         </div>
     </section>


     <section id="founderImage" className={styles.founderImage}>
         <img src={fonder} alt='' />
     </section>

     </div>

    </div>
  )
}

export default Founder