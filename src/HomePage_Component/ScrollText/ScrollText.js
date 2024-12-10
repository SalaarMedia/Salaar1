import React, { useRef } from 'react'
import styles from './sytle.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ScrollText = () => {
  const box=useRef()
  
  useGSAP(()=>{
   gsap.to("#scrollText",{
    transform:'translateX(-170%)',
    repeat:-1,
    duration:20, 
    ScrollTrigger:{
      trigger:'#headerImage',
      scroller:'body',
      start:'top 60%',
      end:'bottom top',
      scrub:true,
      markers:true
    }
   })
  },{scope:box})


  return (
    <div   className={styles.ScrollTextContainer}>
         
      <div ref={box} className={styles.ScrollTextwrap}>
        <p id='scrollText'>IT'S TIME TO CREATE A SALAAR MEDIA <i class="fa-solid fa-star-of-life"></i> IT'S TIME TO CREATE A SALAAR MEDIA <i class="fa-solid fa-star-of-life"></i> IT'S TIME TO CREATE A SALAAR MEDIA</p>
      </div>

    
    </div>
  )
}

export default ScrollText