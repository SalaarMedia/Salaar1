import React from 'react'
import styles from './style.module.css'
import g69 from '../../../Img/second figure/g69.png'
import g67 from '../../../Img/second figure/g67.png'
import g62 from '../../../Img/second figure/g62.png'
import g59 from '../../../Img/second figure/g59.png'
import g34 from '../../../Img/second figure/g34.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Technology = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
useGSAP(()=>{
  gsap.to('#circle1',{
    duration:5,
    rotateZ:'360deg',
    transformOrigin:'center',
    repeat:-1,
    ease:'none'
  })


  let tl3=gsap.timeline({
    scrollTrigger:{
      trigger:'#technologyContainer',
      start:'top 50%'
    }
  })

tl3.from('#t-svg',{
  duration:1,
  scale:0,
})

tl3.from('#Technology',{
  x:-200,
  opacity:0,
  ease:'bounce'
})

gsap.from('#techlist li',{
  y:50,
  duration:1,
  stagger:1,
  opacity:0,
  scrollTrigger:{
    trigger:'#technologyContainer',
    start:'top 50%'
  }
})


let tl4=gsap.timeline({
  scrollTrigger:{
    trigger:'#technologyContainer',
    start:'top 50%'
  }
})

tl4.from('#t-img5',{
  scale:0,
  duration:1
})

tl4.from('#t-img1',{
  scale:0,
  duration:1
})

tl4.from('#t-img2',{
  x:200,
  opacity:0,
  duration:1
})

tl4.from('#t-img3',{
  x:-200,
  opacity:0,
  duration:1
})

tl4.from('#t-img4',{
  scale:0,
  opacity:0,
  duration:1
})



})


  return (
    <div id='technologyContainer' className={styles.technologyContainer}>
        
        <section className={styles.technologyContent}>
        <h1> 
          <svg id='t-svg' >
            <circle id='circle1' cx="100" cy="50" r="40" stroke="white" stroke-width="3" fill="none" stroke-dasharray="5,5" />
            <circle cx="100" cy="50" r="27" stroke-width="2" fill="#5857f9" />
            
         </svg>
         <span id='Technology' style={{paddingLeft:'10px'}}>Technology</span>
        </h1>
        <ul id='techlist'>
            <li>Web Design</li>
            <li>Softwares</li>
            <li>Mobile Apps</li>
            <li>Web Apps</li>
            <li>Front-End</li>
            <li>Back-End</li>
        </ul>
    </section>


    <section className={styles.technologyImgWrapper}>
        <div id='t-imgWrapper' className={styles.imgWrapper}>
            <img id='t-img1'  src={g69} alt="" />
            <img id='t-img2' src={g67} alt="" />
            <img id='t-img3' src={g62} alt="" />
            <img id='t-img4' src={g59} alt="" />
            <img id='t-img5' src={g34} alt="" />
            
     
     
            
     
         </div>
    </section>











    </div>
  )
}

export default Technology