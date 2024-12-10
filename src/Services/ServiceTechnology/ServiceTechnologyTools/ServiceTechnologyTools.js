import React from 'react'
import styles from './style.module.css'
import git from '../../../Img/gif/git.png'
import file from '../../../Img/gif/file.png'
import speed from '../../../Img/gif/speed_ios.png'
import vs from '../../../Img/gif/vis.png'
import tool from '../../../Img/gif/tool5.png'
import tre from '../../../Img/gif/trello.png'


import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const ServiceTechnologyTools = () => {
   
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  
//   useGSAP(()=>{
//     gsap.from('#ServiceTechnologyToolsCont',{
//         y:500,
//         opacity:0,
//         duration:2,
//         scrollTrigger:{
//             trigger:'#ServiceTechnologyToolsCont',
            
//         }
//     })
//   })

  return (
    <div id='ServiceTechnologyToolsCont' className={styles.ServiceTechnologyToolsCont}>
        <h1 className={styles.toolsHeader}>Tools We Use</h1>
        <section className={styles.ServiceTechnologyToolsimgWrap1}>
            <div className={styles.imgBox}>
                <img src={git} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={file} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={speed} alt=''/>
            </div>

        </section>

        <section className={styles.ServiceTechnologyToolsimgWrap2}>
            <div className={styles.imgBox}>
                <img src={vs} alt=''/>
            </div>

            <div className={styles.imgBox}>
                <img src={tool} alt=''/>
            </div>
            
            
            <div className={styles.imgBox}>
                <img src={tre} alt=''/>
            </div>

        </section>
    </div>
  )
}

export default ServiceTechnologyTools