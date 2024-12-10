import React from 'react'
import styles from './style.module.css'
import kol from '../../Img/kolkata.avif'

const LocationDetails = () => {
  return (
    <div className={styles.LocationDetails}>
      <div className={styles.LocationDetailsWraper}>
        <section className={styles.LocationDetailsImage}>
          <img src={kol}  alt=''/>
        </section>

        <section className={styles.LocationDetailsContent}>
        <h4>Office : </h4>
         <h2>No.202, 2nd Floor, Techno Park, Eksar, Link Road,
         Borivali (W), Kolkata: 400 092.</h2>
         
         <h4>Email : </h4>
         <h2>Info@SalaarMedia.com</h2>

        </section>

      </div>


    </div>
  )
}

export default LocationDetails