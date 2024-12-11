import React from 'react'
import styles from './styles.module.css'
import CareerHeader from './CareerHeader/CareerHeader'
import CareerOpening from './CareerOpening/CareerOpening'
import CareerFrom from './CareerFrom/CareerFrom'
import Footer from '../HomePage_Component/Footer/Footer'

const Career = () => {
  return (
    <div>
      <CareerHeader/>
      <CareerOpening/>
      <CareerFrom/>
    </div>
  )
}

export default Career