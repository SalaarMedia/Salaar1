import React from 'react'
import styles from './style.module.css'
import research from '../../../Img/gif/research.gif'
import agre from '../../../Img/gif/agreement.gif'
import moniter from '../../../Img/gif/monitor.gif'
import marketing from '../../../Img/gif/banner.gif'
import check from '../../../Img/gif/server.gif'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ServiceMarketingHowWe = () => {

    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

    // useGSAP(()=>{
    //     gsap.from('#ServiceMarketingHowWe',{
    //         y:400,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#ServiceMarketingHowWe'
    //         }
    //     })
    // })


  return (
    <div id='ServiceMarketingHowWe' className={styles.ServiceMarketingHowWe}>

         <section className={styles.HowWeDoHeader}>
            <h4>HOW WE DO IT ?</h4>
            <h1>Our unique 5-step branding process to build a future-proof brand.</h1>
         </section>


        <div className={styles.boxWrapper1}>
        <section className={styles.ServiceMarketingHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={research} alt=''/>
            </div>
            <h1>Research</h1>
            <p>At Leo9, we develop future-proof brands with meticulous research to define a business problem by assessing existing marketing collaterals.</p>
        </section>

        <section className={styles.ServiceMarketingHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={agre} alt=''/>
            </div>
            <h1>Positioning</h1>
            <p>With brands, we work to co-create the brand’s purpose, vision, platform, architecture, and brand message matrix by blending human behavioural patterns with data science.</p>
        </section>
        </div>





        <div className={styles.boxWrapper2}>

        <section className={styles.ServiceMarketingHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={moniter} alt=''/>
            </div>
            <h1>Creative</h1>
            <p>Right from creating top-notch visual to verbal identity to guidelines, from brand assets to brand sprints, we help our clients deliver value-driven brand positioning outcomes.</p>
        </section>

        <section className={styles.ServiceMarketingHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={marketing} alt=''/>
            </div>
            <h1>Marketing</h1>
            <p>We create future-proof brand touchpoints and ensure seamless interaction between the brand and its users powered by security and performance.</p>
        </section>
        </div>



        
        <div className={styles.boxWrapper3}>
        <section className={styles.ServiceMarketingHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={check} alt=''/>
            </div>
            <h1>Management</h1>
            <p>We unlock scalable and accessible solutions for effortless customer interactions to help brands manage their customers’ pain points by identifying the customer experience gaps and bringing the brand closer to customers.</p>
        </section>

        </div>

       <h1 className={styles.HowWeDoFooter}>To know more read our blog</h1>


    </div>
  )
}

export default ServiceMarketingHowWe