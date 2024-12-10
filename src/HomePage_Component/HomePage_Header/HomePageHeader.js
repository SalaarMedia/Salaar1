import React, { useRef } from 'react';
import styles from './style.module.css'; 
import ladki from '../../Img/ladki.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  
 
function HomePageHeader() {

const box=useRef()
// useGSAP(()=>{
//   const tl=gsap.timeline()
 
//   gsap.from('#headerImage',{
//     x:'100%',
//     duration:1,
//     ease:'bounce',
   
//   })

//   gsap.to('#ourWorkPara',{
//     duration:7,
//       text: "Brands | Tech | Media | Production | IT", 
//       repeat:-1,
//       ease:'none'
//   })

//   tl.from("#box1",{
//     scale:0.5,
//     duration:0.5,
//     opacity:0,
//     zIndex:3,
//   })
//   tl.from("#box2",{
//     scale:0.5,
//     duration:0.5,
//     opacity:0,
//     zIndex:3,

//   })
//   tl.from("#box3",{
//     scale:0.5,
//     duration:0.5,
//     opacity:0,
//     zIndex:3,

//   })

//   tl.from("#box4",{
//     scale:0.5,
//     duration:0.5,
//     opacity:0,
//     zIndex:3,

//   })

//   tl.from("#contentWraper",{
//     left:'-100%',
//     opacity:0,
//     ease:'bounce',
//     zIndex:1,
    
//   })

//   tl.from('#bannerPara',{
//     y:'50px',
//     opacity:0,
//   })

// },{scope:box})




  return (
    <div ref={box}  className={styles.HomePageHeaderContainer} >
        <section className={styles.HomePageTopsection} id='HomePageTopsection'>
    
   <div   className={styles.boxWraper}>
       <div id='box1' className={styles.box1}></div>
       <div id='box2' className={styles.box2}></div>
       <div id='box3' className={styles.box3}></div>
       <div id='box4' className={styles.box3}></div>
   </div>


   <div id='contentWraper' className={styles.contentWraper}>
       
            <h1>Design</h1>
             <h4><span  className={styles.trans}> Transform </span> <span className={styles.accel}> &nbsp; Accelerate</span></h4>
   </div>

   <p id='bannerPara' className={styles.bannerPara}>Your Creative, Media & Technology Transformation Partner</p>
   <p id='ourWorkPara' className={styles.ourWorkPara}></p>


   <img id='headerImage' className={styles.headerImage} src={ladki} alt=""/>



</section> 
  
    </div>
  )
} 


export default HomePageHeader