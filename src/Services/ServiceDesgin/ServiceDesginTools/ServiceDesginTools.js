import React from 'react'
import styles from './style.module.css'
import ai from '../../../Img/gif/ai.png'
import ps from '../../../Img/gif/ps.png'
import figma from '../../../Img/gif/figma.png'
import xd from '../../../Img/gif/xd.png'
import dimond from '../../../Img/gif/adobe_design.png'
import indin from '../../../Img/gif/Inkscape_Logo.svg.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const ServiceDesginTools = () => {

    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
    

    // useGSAP(()=>{
    //     gsap.from('#toolsHeader',{
    //         y:300,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#ServiceDesginToolsCont'
    //         }

    //     })

    //     gsap.from('#ServiceDesginToolsimgWrap1',{
    //         y:300,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#ServiceDesginToolsCont',
    //             start:'top 60%'
    //         }
    //     })


    //     gsap.from('#ServiceDesginToolsimgWrap2',{
    //         y:300,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#ServiceDesginToolsCont',
    //             start:'top 30%'
    //         }
    //     })




    // })


  return (
    <div id='ServiceDesginToolsCont' className={styles.ServiceDesginToolsCont}>
        <h1 id='toolsHeader' className={styles.toolsHeader}>Tools We Use</h1>
        <section id='ServiceDesginToolsimgWrap1' className={styles.ServiceDesginToolsimgWrap1}>
            <div className={styles.imgBox}>
                <img src={ai} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={ps} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={xd} alt=''/>
            </div>

        </section>

        <section id='ServiceDesginToolsimgWrap2' className={styles.ServiceDesginToolsimgWrap2}>
            <div className={styles.imgBox}>
                <img src={dimond} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={indin} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={figma} alt=''/>
            </div>

        </section>
    </div>
  )
}

export default ServiceDesginTools