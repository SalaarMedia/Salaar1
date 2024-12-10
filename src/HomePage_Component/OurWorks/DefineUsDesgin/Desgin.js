import React from 'react'
import styles from './style.module.css'
import g16 from '../../../Img/first figure/g16.png'
import g23 from '../../../Img/first figure/g23.png'
import g26 from '../../../Img/first figure/g26.png'
import g7 from '../../../Img/first figure/g7.png'
import path23 from '../../../Img/first figure/path23.png'
import path26 from '../../../Img/first figure/path26.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";





const Desgin = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //   let tl=gsap.timeline({
  //     scrollTrigger:{
  //       trigger:'#desginContainer',
  //       start:'top 60%'
  //     }
  //   });

  //   let tl1=gsap.timeline({
    
  //     scrollTrigger:{
  //       trigger:'#desginContainer',
  //       start:'top 30%'
  //     }
  //   });

  //   tl1.from('#svganim',{
  //     scale:0,
  //     duration:1
  //   })
  //   tl1.from('#Desgin',{
  //     x:-100,
  //     opacity:0,
  //     duration:1

  //   })

  //   gsap.from('#desginlist li',{
  //     y:50,
  //     duration:1,
  //     stagger:1,
  //     opacity:0,
  //     scrollTrigger:{
  //       trigger:'#desginContainer',
  //       start:'top 50%'
  //     }
  //   })

   

  //   gsap.to('#circle',{
  //     duration:5,
  //     rotateZ:'360deg',
  //     transformOrigin:'center',
  //     repeat:-1,
  //     ease:'none'
  //   })
    
  //   tl.from("#imageWrapper",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //     x:400,
     
  //   })

  //   tl.from("#img6",{
  //     scale:0.5,
  //     x:200,
  //     opacity:0,
  //     duration:0.5,
  //   })

  //   tl.from("#img5",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //     rotate:'90deg'
  //   })


  //   tl.from("#img1",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //   })

  //   tl.from("#img2",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //   })

  //   tl.from("#img3",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //   })

  //   tl.from("#img4",{
  //     scale:0.5,
  //     opacity:0,
  //     duration:0.5,
  //   })

 
 


  // })



  return (
    <div id='desginContainer' className={styles.desginContainer}>

<section className={styles.desginContentSection}>
        <h1>
            <svg id='svganim'>
                <circle id='circle'  cx="100" cy="50" r="40" stroke="white" stroke-width="3" fill="none" stroke-dasharray="5,5" />
                <circle cx="100" cy="50" r="27" stroke-width="2" fill="red" />
                
             </svg>
             <span id='Desgin'>Desgin</span>
        </h1>
        <ul  id="desginlist">
            <li>UI Design</li>
            <li>UX Design</li>
            <li>Ux Consultancy</li>
            <li>Design System</li>
            <li>Animation</li>
            <li>Illustration</li>
        </ul>
    </section>

    <section className={styles.desginImageWraper}>
        <div id='imageWrapper' className={styles.imageWrapper}>
        <img id='img1' src={g16} alt="" />
       <img id='img2' src={g23} alt="" />
       <img id='img3' src={g26} alt="" />
       <img id='img4' src={g7} alt="" />
       <img id='img5' src={path23} alt="" />
       <img id='img6' src={path26} alt="" />
        </div>

    </section>


    </div>
  )
}

export default Desgin