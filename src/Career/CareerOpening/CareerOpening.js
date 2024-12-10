import React from 'react'
import styles from './style.module.css'
import ui from '../../Img/UI.png'
import ux from '../../Img/UX.png'
import FE from  '../../Img/FE.png'
import BE from  '../../Img/BE.png'

const CareerOpening = () => {
 
const openingdata=[
    {
        jonName:"UI Designer",
        experience: "Experience : Experience 1 years",
        image:ui
    },
    {
        jonName:"UX Designer",
        experience: "Experience : Experience 1 years",
        image:ux

    },
    {
        jonName:"Front-End Devlopment",
        experience: "Experience : Experience 1 years",
        image:FE

    },
    {
        jonName:"Back-End Devlopment",
        experience: "Experience : Experience 1 years",
        image:BE

    }
]


  return (
    <div className={styles.CareerOpening}>
 <h3 className={styles.CareerOpeningheader}>OPENINGS</h3>
        <section className={styles.CareerOpeningWraper}>
           
           {openingdata.map((data)=>{
            return  <div className={styles.CareerOpeningImgBox}>
            <img src={data.image} alt=''/>
            <h1>{data.jonName}</h1>
            <h2>{data.experience}</h2>

        </div>
           })}
        </section>

    </div>
  )
}

export default CareerOpening