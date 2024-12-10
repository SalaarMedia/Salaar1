import React from 'react'
import styles from './style.module.css'
import search from '../../../Img/gif/artificial.gif'
import brain from '../../../Img/gif/coding.gif'
import brain1 from '../../../Img/gif/learning.gif'
import proto from '../../../Img/gif/speed.gif'
import check from '../../../Img/gif/connection.gif'
import tec from '../../../Img/gif/technological.gif'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ServiceTechnologyHowWe = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

//   useGSAP(()=>{
//     gsap.from('#ServiceTechnologyHowWe',{
//         y:500,
//         opacity:0,
//         duration:2,
//        scrollTrigger:{
//         trigger:'#ServiceTechnologyHowWe'
//        }
//     })
//   })



  return (
    <div id='ServiceTechnologyHowWe' className={styles.ServiceTechnologyHowWe}>

         <section className={styles.HowWeDoHeader}>
            <h4>HOW WE DO IT ?</h4>
            <h1>Leaving no stone unturned at every step.</h1>
         </section>


        <div className={styles.boxWrapper1}>
        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={search} alt=''/>
            </div>
            <h1>Understand Objectives</h1>
            <p>As a client-focused web and mobile app development company, we gain in-depth insights into your digital requirements, consumer behaviours, technology platforms, functionalities, etc., to help you gain a competitive edge. This is our approach for developing the right user experience, emphasising top-notch aesthetic sensibilities that engage your consumers.</p>
        </section>

        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={brain} alt=''/>
            </div>
            <h1>Choose Right ​​​​​​​Technology</h1>
            <p>Empowered with tech-heavy centricity, our solutions transcend the usual methods of solving problems. We ensure a sophisticated frontend experience and develop a user-friendly backend by considering the bigger picture for tech-focused digital transformation that was once impossible.</p>
        </section>
        </div>





        <div className={styles.boxWrapper2}>

        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={brain1} alt=''/>
            </div>
            <h1>Documented Coding</h1>
            <p>From elegant designs to a custom-coded website, the radical development phase is driven by our digital mindfulness to translate your digital vision.</p>
        </section>

        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={proto} alt=''/>
            </div>
            <h1>Careful Testing</h1>
            <p>With our great knowledge in tech engineering, we employ a rigorous QA testing process that encompasses testing speed, security, user-friendly interface experience, and overall functionality and eliminates flaws before the product goes live.</p>
        </section>
        </div>



        
        <div className={styles.boxWrapper3}>
        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={check} alt=''/>
            </div>
            <h1>Successful Deployment</h1>
            <p>When you decide to work with a thriving web and mobile app development company like us, you unlock the best tech-driven solutions that stand the test of time across multiple environments, including staging and production.</p>
        </section>


        <section className={styles.ServiceTechnologyHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={tec} alt=''/>
            </div>
            <h1>AMC Support</h1>
            <p>Our technology experts are conversant with cutting-edge technology and software trends, maintaining a website and ensuring smooth app performance. Moreover, our foolproof AMC support lends best-in-class customer assistance equipped with hassle-free backend integration for our esteemed patrons.</p>
        </section>
        </div>

       <h1 className={styles.HowWeDoFooter}>To know more read <span> our blog</span></h1>


    </div>
  )
}

export default ServiceTechnologyHowWe