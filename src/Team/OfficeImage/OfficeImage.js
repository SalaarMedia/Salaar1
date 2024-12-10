import React from 'react'
import styles from './style.module.css'
import img1 from '../../Img/officeImage/img1.jpg'
import img2 from '../../Img/officeImage/img2.jpg'
import img3 from '../../Img/officeImage/img3.jpg'
import img4 from '../../Img/officeImage/img4.jpg'
import img5 from '../../Img/officeImage/img5.jpg'
import img6 from '../../Img/officeImage/img5.jpg'
 
const OfficeImage = () => {
  return (
    <div className={styles.OfficeImage}>
        <section className={styles.OfficeImageHeader}>
          <h2>Office Culture</h2>
          <h1>We believe in "we". You'll love working here.</h1>
        </section>
       
        <section className={styles.OfficeImageWraper}>
            <div className={styles.OfficeImageWraperBox1}>
            <img src={img1} alt=''/>
            </div>

            <div className={styles.OfficeImageWraperBox2}>
            <img src={img2} alt=''/>
            <img src={img3} alt=''/>
              
            </div>
            
            </section>




            <section className={styles.OfficeImageWraper}>
            <div className={styles.OfficeImageWraperBox1}>
            <img src={img4} alt=''/>
            </div>

            <div className={styles.OfficeImageWraperBox2}>
            <img src={img5} alt=''/>
            <img src={img6} alt=''/>
              
            </div>
            
            </section>

    </div>
  )
}

export default OfficeImage