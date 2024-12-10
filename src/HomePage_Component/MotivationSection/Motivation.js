import React from 'react'
import styles from './style.module.css'
import leo from '../../Img/leo.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

 

const Motivation = () => {
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //   gsap.from('#leftSection',{
  //     x:'-500px',
  //     duration:2,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:'#motivationContainer',
  //       start:'top 10%'
  //     }
  //   })

  //   gsap.from('#rightSection',{
  //     x:'500px',
  //     opacity:0,
  //     duration:2,
  //     scrollTrigger:{
  //       trigger:'#motivationContainer',
  //       start:'top 10%'
  //     }
  //   })
  // })


  return (
    <div id='motivationContainer' className={styles.motivationContainer}>

      <section id='leftSection' className={styles.leftSection}>
          
          <div className={styles.accordingContainer}>

          <div className={styles.accordingIcons}>
              <button className={styles.addIcon}>+</button><button className={styles.subIcon}>-</button>
            </div>

            <div className={styles.accordingContent}>
                <section className={styles.accordingContentheading}>
                    <h1>How To Enhance Motivation for Better Business Leads?</h1>
                </section>
                <section className={styles.accordingContentPara}>
                    <p>Read how businessmen must use UX design and enhancement of motivation for better business leads. Reveal the secret now!</p>
                     <a>Read More &nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
                </section>
            
            </div>


          </div>





          <div className={styles.accordingContainer}>

<div className={styles.accordingIcons}>
    <button className={styles.addIcon}>+</button><button className={styles.subIcon}>-</button>
  </div>

  <div className={styles.accordingContent}>
      <section className={styles.accordingContentheading}>
          <h1> Ways Neuromarketing Impact Marketing Campaign.</h1>
      </section>
      <section className={styles.accordingContentPara}>
          <p>Follow these  Neuromarketing ways and measures to create an astonishing impact in your upcoming marketing campaign. Read now!</p>
           <a>Read More &nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
      </section>
  
  </div>


</div>







<div className={styles.accordingContainer}>

<div className={styles.accordingIcons}>
    <button className={styles.addIcon}>+</button><button className={styles.subIcon}>-</button>
  </div>

  <div className={styles.accordingContent}>
      <section className={styles.accordingContentheading}>
          <h1>Can Good Design Grow Your Business And Customers?</h1>
      </section>
      <section className={styles.accordingContentPara}>
          <p>Learn how to grow your business and customers to generate huge profits and create awareness for your brand. Best way to grow your business in </p>
           <a>Read More &nbsp; <i class="fa-solid fa-arrow-right"></i> </a>
      </section>
  
  </div>


</div>









      </section>
      <section id='rightSection' className={styles.rightSection}>

        <img src={leo} alt=''/>

      </section>






    </div>
  )
}

export default Motivation