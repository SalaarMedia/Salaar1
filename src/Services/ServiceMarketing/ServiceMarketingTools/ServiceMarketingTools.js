import React from 'react'
import styles from './style.module.css'
import fb from '../../../Img/gif/fb.png'
import insta from '../../../Img/gif/insta.png'
import twitter from '../../../Img/gif/twitter.png'
import add from '../../../Img/gif/adsense.png'
import tool from '../../../Img/gif/tool.png'
import link from '../../../Img/gif/linkedin.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 

const ServiceMarketingTools = () => {

    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

    // useGSAP(()=>{
    //     gsap.from('#ServiceMarketingToolsCont',{
    //         y:400,
    //         opacity:0,
    //         duration:2,
    //         scrollTrigger:{
    //             trigger:'#ServiceMarketingToolsCont'
    //         }
    //     })
    // })



  return (
    <div id='ServiceMarketingToolsCont' className={styles.ServiceMarketingToolsCont}>
        <h1 className={styles.toolsHeader}>Tools We Use</h1>
        <section className={styles.ServiceMarketingToolsimgWrap1}>
            <div className={styles.imgBox}>
                <img src={link} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={tool} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={add} alt=''/>
            </div>

        </section>

        <section className={styles.ServiceMarketingToolsimgWrap2}>
            <div className={styles.imgBox}>
                <img src={twitter} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={fb} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={insta} alt=''/>
            </div>

        </section>
    </div>
  )
}

export default ServiceMarketingTools