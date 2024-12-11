import React from 'react'
import styles from './style.module.css'
import search from '../../../Img/gif/search-file.gif'
import brain from '../../../Img/gif/brain.gif'
import brain1 from '../../../Img/gif/artificial-intelligence.gif'
import proto from '../../../Img/gif/digital-creative.gif'
import check from '../../../Img/gif/checklist.gif'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 


const ServiceDesginHowWe = () => {

    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

    // useGSAP(()=>{
    //     let sh=gsap.timeline({
    //         scrollTrigger:{
    //             trigger:'#ServiceDesginHowWe',
    //         }
    //     })
    //     sh.from('#HowWeDoHeader',{
    //        y:300,
    //        opacity:0,
    //        duration:2

    //     })
    //     gsap.from('#boxWrapper1',{
    //         y:200,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#boxWrapper1'
    //         }
    //     })

    //     gsap.from('#boxWrapper2',{
    //         y:200,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#boxWrapper2'
    //         }
    //     })


    //     gsap.from('#boxWrapper3',{
    //         y:200,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#boxWrapper3'
    //         }
    //     })

    //     gsap.from('#HowWeDoFooter span',{
    //         scale:0,
    //         opacity:0,
    //         duration:1,
    //         ease:'back.inOut',
    //         repeat:-1
          
    //     })


    // })

  return (
    <div id='ServiceDesginHowWe' className={styles.ServiceDesginHowWe}>

         <section id='HowWeDoHeader' className={styles.HowWeDoHeader}>
            <h4>HOW WE DO IT ?</h4>
            <h1>Leaving no stone unturned at every step.</h1>
         </section>


        <div id='boxWrapper1' className={styles.boxWrapper1}>
        <section id='ServiceDesginHowWeBox1' className={styles.ServiceDesginHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={search} alt=''/>
            </div>
            <h1>Empathise</h1>
            <p>As a thriving UI UX agency, we harness the proven empathy-driven human-focused design process to craft the best digital solutions mapping the users preferences.</p>
        </section>

        <section className={styles.ServiceDesginHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={brain} alt=''/>
            </div>
            <h1>Define ( the Problem)</h1>
            <p>Apt logic and detailing is incorporated precisely with elements like design functions, features, functionalities, workflow and beyond to solve complex issues with minimal snags.</p>
        </section>
        </div>





        <div id='boxWrapper2' className={styles.boxWrapper2}>

        <section className={styles.ServiceDesginHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={brain1} alt=''/>
            </div>
            <h1>Ideation</h1>
            <p>With Proven ideation techniques combined with a client-centric approach at the core, we ideate roadmaps while mapping your business journey to decode human-focused problem statements.</p>
        </section>

        <section className={styles.ServiceDesginHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={proto} alt=''/>
            </div>
            <h1>Prototype</h1>
            <p>We develop a results-focused prototype meant to build an authentic digital connection with the utmost level of detail and quality based on diversified experiments.</p>
        </section>
        </div>



        
        <div id='boxWrapper3' className={styles.boxWrapper3}>
        <section className={styles.ServiceDesginHowWeBox1}>
            <div className={styles.HowWeDoIcon}>
                <img src={check} alt=''/>
            </div>
            <h1>Testing</h1>
            <p>We finetune our designs using state-of-the-art testing techniques by testing the overall product usability at Omni-channel platforms to impart a clear big picture of design experience benchmarking, blueprints, personas, and journey maps of ideal consumers.</p>
        </section>
        </div>

       <h1 id='HowWeDoFooter' className={styles.HowWeDoFooter}>To know more read <span> Our Blog</span></h1>


    </div>
  )
}

export default ServiceDesginHowWe