import React from 'react'
import styles from './style.module.css'
import safi from '../../Img/1.png'
import attechment from '../../Img/2.png'
import hamsafar from '../../Img/tab.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const PatnerClient = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
  


  // useGSAP(()=>{

  //   let patHead=gsap.timeline({
  //        scrollTrigger:{
  //         trigger:'#patnerClientCont',
  //         start:'top 60%',
  //        }
        
  //   })

  //   patHead.from('#patnerClientHeader',{
  //     y:300,
  //     opacity:0,
  //     duration:1,

  //   })

  //   patHead.to('#patnerClientHeader',{
  //     duration:5,
  //     text:'As global leaders in UX UI, technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.'
  //   })




  //   patHead.from('#clientBoxWraper',{
  //      y:300,
  //      duration:1,
  //      opacity:0
  //   })
    











  // })





  return (
    <div id='patnerClientCont' className={styles.patnerClientCont}>
      
      <div className={styles.patnerClientHeader}>
        <h1 id='patnerClientHeader'>As global leaders in UX UI, technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.</h1>
    </div>



    <div id='clientBoxWraper' className={styles.clientBoxWraper} >
    <div id='box1' className={styles.box1}>
       <div className={styles.clientBox1Header}>
        <h1>Hamsafar</h1>
        <h2>Innovated Community Empowerment Website.</h2>
        <h3>UX-Ui . Web . Mobile</h3>
       </div>
       <div className={styles.clientBox1Image}>
        <img id='b-img1' src={attechment} alt=""/>
       </div>

    </div>
    <div id='box2' className={styles.box2}>
        <div className={styles.clientBox2Header}>
            <h1>Attachments Express</h1>
            <h2>Engineered Investment Experience.</h2>
            <h3>UX-Ui . Web . Mobile</h3>
        </div>
       <div className={styles.clientBox2Image}>
        <img id='b-img2' src={hamsafar} alt=""/>
       </div>
    </div>
    <div id='box3' className={styles.box3}>
        <div className={styles.clientBox3Header}>
            <h1>Shafi Kafi</h1>
            <h2>Optimized the effertless on-the-go lifestyle. </h2>
            <h3>UX-Ui . Web . Mobile</h3>
        </div>
       <div className={styles.clientBox3Image}>
        <img id='b-img3' src={safi} alt=""/>
       </div>
    </div>
   </div>











    </div>
  )
}

export default PatnerClient