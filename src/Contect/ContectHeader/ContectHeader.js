import React from 'react'
import styles from './style.module.css'
import mail from '../../Img/mail.png'

const ContectHeader = () => {
  return ( 
    <div className={styles.contectHeaderContainer}>
        <section className={styles.contectHeaderBox1}>
           <h1>Let's talk!</h1>
           <div className={styles.contectHeaderImage}>
               <img src={mail} alt='' />
           </div>
        </section>

        <section className={styles.contectHeaderBox2}>

            <div className={styles.formSection}>
                <form action=''>
                    <div className={styles.inputWraper}>
                        <label>Hi! I am : </label>
                        <input type='text' placeholder='eg. Lucky'/>
                    </div>

                    <div className={styles.inputWraper}>
                        <label>Reach me at : </label>
                        <input type='text' placeholder='eg. Lucky@gmail.com'/>
                    </div>

                    <div className={styles.inputWraper}>
                        <label>Country : </label>
                        <input type='text' placeholder='eg. India'/>
                    </div>


                    <div className={styles.inputWraper}>
                        <label>Mobile No. : </label>
                        <input type='text' placeholder='eg. +91 00000-00000'/>
                    </div>

                </form>
            </div>


            <div className={styles.contectDetails}>
              <h1><span>IND : </span><span>+91 76850-75677 <br/>+91 76850-75677<br/>+91 76850-75677</span></h1>
              <h1><span>U.S : </span><span>+91 76850-75677 <br/>+91 76850-75677<br/>+91 76850-75677</span></h1>
              <h1><span>Join The Team : </span><span>{`+91 76850-75677`} </span></h1>
            </div>

        </section>
    </div>
  )
}

export default ContectHeader