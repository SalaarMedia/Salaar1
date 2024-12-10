import React from 'react'
import styles from './style.module.css'
import g10 from '../../../Img/third figure/g10.png'
import g13 from '../../../Img/third figure/g13.png'
import g15 from '../../../Img/third figure/g15.png'
import g9 from '../../../Img/third figure/g9.png'
import mkhjk from '../../../Img/third figure/mkhjk.png'
import path13 from '../../../Img/third figure/path13.png'
import path15 from '../../../Img/third figure/path15.png'
import path16 from '../../../Img/third figure/path16.png'
import path19 from '../../../Img/third figure/path19.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";





const Business = () => {
  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  


// useGSAP(()=>{
//   gsap.to('#circle2',{
//     duration:5,
//     rotateZ:'360deg',
//     transformOrigin:'center',
//     repeat:-1,
//     ease:'none'
//   })

  

//   let tl5=gsap.timeline({
//     scrollTrigger:{
//       trigger:'#bussinessContainer',
//       start:'top 50%'
//     }
//   })


//   tl5.from('#b-svg',{
//     scale:0,
//     duration:1,
    
//   })


// tl5.from('#Business',{
//   x:-200,
//   opacity:0,
//   ease:'bounce'
// })

// gsap.from('#Businesslist li',{
//   y:50,
//   duration:1,
//   stagger:1,
//   opacity:0,
//   scrollTrigger:{
//     trigger:'#bussinessContainer',
//     start:'top 50%'
//   }
// })


// let tl6=gsap.timeline({
//   scrollTrigger:{
//     trigger:'#bussinessContainer',
//     start:'top 50%'
//   }
// })


// tl6.from('#b-imgWrapper',{
//   scale:0,
//   duration:1
// })

// tl6.from('#b-img5',{
//   scale:0,
//   duration:1
// })

// tl6.from('#b-img1',{
//   scale:0,
//   duration:1
// })

// tl6.from('#b-img2',{
//   x:200,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img3',{
//   x:-200,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img4',{
//   scale:0,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img5',{
//   scale:0,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img6',{
//   scale:0,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img7',{
//   scale:0,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img8',{
//   scale:0,
//   opacity:0,
//   duration:1
// })

// tl6.from('#b-img9',{
//   scale:0,
//   opacity:0,
//   duration:1
// })



// })





  return (
    <div id='bussinessContainer' className={styles.bussinessContainer}>
      <section className={styles.bussinessContent}>
        
        <h1> <svg id='b-svg'>
            <circle id='circle2'  cx="100" cy="50" r="40" stroke="white" stroke-width="3" fill="none" stroke-dasharray="5,5" />
            <circle cx="100" cy="50" r="27" stroke-width="2" fill="#9c34f0" />
            
         </svg>
          <span id='Business'> Business </span>
        </h1>
        <ul id='Businesslist'>
            <li>Branding</li>
            <li>Brand Name</li>
            <li>Brand Guidelines</li>
            <li>Strategy</li>
            <li>S.E.O</li>
        </ul>

    </section>


    <section className={styles.bussinessImgWrapper}>
        <div id='b-imgWrapper' className={styles.imgWrapper} >
            <img id='b-img1' src={g10} alt="" />
            <img id='b-img2' src={g13} alt="" />
            <img id='b-img3' src={g15} alt="" />
            <img id='b-img4' src={g9} alt="" />
            <img id='b-img5' src={mkhjk} alt="" />
            <img id='b-img6' src={path13} alt="" />
            <img id='b-img7' src={path15} alt="" />
            <img id='b-img8' src={path16} alt="" />
            <img id='b-img9' src={path19} alt="" /> 
     
         </div>
    </section>







    </div>
  )
}

export default Business