import React from 'react'
import styles from './style.module.css'
import TeamHeader from './TeamHeader/TeamHeader'
import TeamImage from './TeamImage/TeamImage'
import OfficeImage from './OfficeImage/OfficeImage'
import Footer from '../HomePage_Component/Footer/Footer'

const Team = () => {
  return (
    <div className={styles.team}>
       <TeamHeader/>
       <TeamImage/>
       <OfficeImage/>
       <Footer/>
    </div>
  )
}

export default Team