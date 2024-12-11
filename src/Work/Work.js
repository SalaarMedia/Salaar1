import React from 'react'
import styles from './style.module.css'
import workimg from '../Img/work/workheader.png'
import alphabe from '../Img/work/alphabe.jpg'
import bmw from '../Img/work/bmw.jpg'
import hungerpack from '../Img/work/hungerpack.jpg'
import nirmal from '../Img/work/nirmal.jpg'
import payzli from '../Img/work/payzli.jpg'
import reckrut from '../Img/work/reckrut.jpg'
import rigi from '../Img/work/rigi.webp'
import sps from '../Img/work/sps.jpg'
import travelxp from '../Img/work/travelxp.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";






const Work = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //  gsap.from('#workHeaderContent',{
  //   x:-300,
  //   opacity:0,
  //   duration:2,
  //  })
   
  //  gsap.from('#workHeaderImage',{
  //   opacity:0,
  //   y:400,
  //   duration:2
  //  })

  //  gsap.from('#ourProjectContent',{
  //      opacity:0,
  //      y:300,
  //      duration:2,
  //      stagger:2,
  //      scrollTrigger:{
  //       trigger:'#ourProjectContent',
  //       start:''
  //      }
  //  })


  // })

let projectData=[
  {
    projectName:'RIGI',
    img:rigi,
    details:'Innovated Community Empowerment Website',
    
  },
  {
    projectName:'BMW',
    img:bmw,
    details:'Optimized the effortless on-the-go lifestyle',
    
  },
  {
    projectName:'AlphaBee',
    img:alphabe,
    details:'Personalized Financial Planning Platform',
    
  },
  {
    projectName:'Travelxp',
    img:travelxp,
    details:'Customized Holiday Booking Experience.',
    
  },

,{
    projectName:'SPS Canada',
    img:sps,
    details:'Enriched Immigration Process Experience.',
    
  },{
    projectName:'Nirmal Bang',
    img:nirmal,
    details:'Engineered Investment Experience',
    
  },
  {
    projectName:'Hunger Packs',
    img:hungerpack,
    details:'Boosted Packaged Food Purchase Experience',
    
  },
  {
    projectName:'Payzli',
    img:payzli,
    details:'Elevated Payment Process Method',
    
  },
  {
    projectName:'Reckrut',
    img:reckrut,
    details:'Raised Talent Aquisition Experience',
    
  },

]




  return (
    <div className={styles.WorkMainContainer}>
      <div className={styles.WorkMainContainerWraper}>
            <section id='workHeader' className={styles.workHeader}>
                 <div id='workHeaderContent' className={styles.workHeaderContent}>
                    <h1>WORK</h1>
                    <h2>We have designed experiences for over 260 projects.</h2>
                 </div>

                 <div id='workHeaderImage' className={styles.workHeaderImage}>
                   <img src={workimg} alt=''/>
                 </div>
            </section>

            <section className={styles.ourProjectCont}>
              <div className={styles.ourProjectWtaper}>
               {
                projectData.map((data)=>{
                  return <section id='ourProjectContent' className={styles.ourProjectContent}>
                    <h1>{data.projectName}</h1>
                    <img src={data.img} alt=''/>
                    <div className={styles.detailswrap}>
                      <h2>{data.details}</h2>
                      <ul>
                        <li>UI US</li>
                        <li>WEB</li>
                        <li>MOBILE</li>
                      </ul>
                    </div>
                  </section>
                })
               }
              </div>
            </section>
      </div>
     
    </div>
  )
}

export default Work