import React from 'react'
import styles from './style.module.css'
import table from '../../Img/table.png'
import person from '../../Img/person.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AboutHeader = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  
  //   gsap.from('#aboutHeaderBox1',{
  //     opacity:0,
  //     x:-300,
  //     duration:2,

  //   })

  //   gsap.from('#aboutHeaderBox3',{
  //     opacity:0,
  //     x:300,
  //     duration:2,
      
  //   })

  //   gsap.from('#aboutHeaderBox2',{
  //     opacity:0,
  //     scale:0,
  //     duration:2,
      
  //   })


  // })


  return (
    <div className={styles.aboutHeaderContainer}>
        <section id='aboutHeaderBox1' className={styles.aboutHeaderBox1}>
         <img src={table} alt='' />
        </section>


        <section id='aboutHeaderBox2' className={styles.aboutHeaderBox2}>
            <h4>About Us.</h4>
            <h1>We, at Salaar Media, apply neuromarketing and behavioral science to design, digitize and grow your business.</h1>

        </section>


        <section id='aboutHeaderBox3' className={styles.aboutHeaderBox3}>
         <img src={person} alt='' />
        </section>
    </div>
  )
}

export default AboutHeader