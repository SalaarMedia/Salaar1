import React from 'react'
import styles from './style.module.css'
import team from '../../Img/team.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 

const TeamHeader = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)
 
  // useGSAP(()=>{
  //   gsap.from('#teamHeaderContent',{
  //     x:-300,
  //     opacity:0,
  //     duration:2
  //   })


  //   gsap.from('#teamimg',{
  //     y:300,
  //     opacity:0,
  //     duration:2
  //   })

  // })


  return (
    <div className={styles.teamHeader}>
        <section className={styles.teamHeaderWraper}>
            <div id='teamHeaderContent' className={styles.teamHeaderContent}>
                <h2>TEAM</h2>
                <h1>We are designers, artists, scientists, researchers, technologists, observers.
                In a nutshell, we are Experience Designers working together.</h1>
            </div>
           <img id='teamimg' className={styles.teamimg} src={team} alt=''/>
        </section>
    </div>
  )
}

export default TeamHeader