import React from 'react'
import styles from './style.module.css'

const CareerFrom = () => {
  return (
    <>
    <h1 className={styles.CareerFromHeader}>GET IN TOUCH</h1>
    <div className={styles.CareerFrom}>
        <from action=''>
               <div className={styles.inputwraper}>
                 <label>Full Name : </label>
                 <input type='text' placeholder='Enetr Your Name'/>
               </div>
               <div className={styles.inputwraper}>
                 <label>Email : </label>
                 <input type='text' placeholder='Enter Your Email'/>
               </div>
               <div className={styles.inputwraper}>
                 <label>Phone No.</label>
                 <input type='text' placeholder='Enetr Your Phone No'/>
               </div>
               <div className={styles.inputwraper}>
                 <label>Last Qualification : </label>
                 <input type='text' placeholder='Enter Your Last Qualification'/>
               </div>
               <div className={styles.inputwraper}>
                 <label>Passing Year : </label>
                 <input type='text' placeholder='Enter Your Passing Year'/>
               </div>
               <div className={styles.inputwraper}>
                 <label>Upload Your Resume : </label>
                 <input type='file' accept='pdf'/>
               </div>
        </from>
    </div>
    </>
  )
}

export default CareerFrom