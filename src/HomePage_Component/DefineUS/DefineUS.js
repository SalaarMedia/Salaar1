import React from 'react'
import styles from './style.module.css'
import { motion } from "motion/react"

const DefineUS = () => {


  return (
    <div id='defineUsContainer' className={styles.defineUsContainer}>

        <div id='sectionLeft' className={styles.sectionLeft}>
            <h1>What defines us</h1>
            <h2><i class="fa-solid fa-arrow-right"></i></h2>
        </div>
       
        <div id='sectionRight' className={styles.sectionRight}>
       <p>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</p>

       <p>We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.</p>
       <div className={styles.btnWraper}>
        <button>Dive Into Our Culture &nbsp;<i class="fa-solid fa-arrow-right"></i></button>
       </div>

        </div>

    </div>
  )
}

export default DefineUS