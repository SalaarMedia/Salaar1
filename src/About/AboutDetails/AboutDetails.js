import React, { useState } from 'react'
import styles from './style.module.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutDetails = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
// useGSAP(()=>{
//   gsap.from('#AboutDetailsContent',{
//     y:500,
//     opacity:0,
//     duration:2,
//     scrollTrigger:{
//       trigger:'#AboutDetails',
//       start:'top 60%'
//     }
//   })
// })

const [less,setLess]=useState(false)
const[show,setShow]=useState(true)
const [para,setPara]=useState(false)




    const showFuntion=()=>{
        setShow(false)
        setLess(true)
        setPara(true)
    }

    const lessFuntion=()=>{
        setShow(true)
        setLess(false)
        setPara(false)
    }





  return (
    <div id='AboutDetails'  className={styles.AboutDetails}>
        <section id='AboutDetailsContent' className={styles.AboutDetailsContent}>
            <h1>About Us</h1>
            <p>
            At the intersection of art, technology and business, we create design solutions geared toward business success. Since 2012, we have been global leaders in design technology. Our services range from experience designing, identity development, product strategy, branding, user experience design, user interface design, technology development to digital marketing and SEO.
            </p>

          { para && <p>
            Our work has inspired positive business growth for many of our clients, including Travel XP, Sony, BMW and P&G to Unilever and more. For over eight years, we have designed experiences that honour brands; and we are proud of our awards and accolades which are testimony to our performance.
            Today, when a brand's virtual persona is imperative to business success, Leo9 strives to provide insightful and future-forward solutions designed specifically for your brand.
            </p>}
            {less && <span className={styles.togglebtn} onClick={lessFuntion}>Show Less</span>}
        {show &&<span className={styles.togglebtn} onClick={showFuntion}>Show More</span>}
        </section>
    </div>
  ) 
}

export default AboutDetails