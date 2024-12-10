import React from 'react'
import styles from './style.module.css'
import career from '../../Img/careerimg.png'

const CareerHeader = () => {
  return (
    <div className={styles.CareerHeader}>
        <div className={styles.CareerHeaderWraper}>
            <section className={styles.CareerHeaderContent}>
                <h1>Want to join the team ?</h1>
                <h2>Be our next human experience Designer & Devlopment.</h2>
            </section>

 
            <section className={styles.CareerHeaderImg}>
                <img src={career} alt=''/>
            </section>
        </div>
    </div>
  )
}

export default CareerHeader