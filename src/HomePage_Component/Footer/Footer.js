import React from 'react'
import styles from './style.module.css'
import Logo from '../../Img/white 1.png'
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
    <div className={styles.footerMainContainer}>
        <div className={styles.footerWrapper}>
             <section className={styles.fooetrContentBox1}>
                <div>
                    <img src={Logo} alt='' />
                </div>
                <div className={styles.footerSocialIcons}>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-threads"></i>
                </div>
             </section>


             <section className={styles.fooetrContentBox2}>
                    
                    <div className={styles.footerContentHeader}>
                        <h2>Services</h2>
                    </div>
                    <ul>
                    <Link to="/serviceDesgin"><li>Design</li></Link>
                    <Link to="/serviceTechnology"><li>Technology</li></Link>
                    <Link to="/serviceMarketing"><li>Marketing</li></Link>
                    <Link to="/"> <li>Digital Marketing</li></Link>
                    </ul>

             </section>


             <section className={styles.fooetrContentBox3}>
             <div className={styles.footerContentHeader}>
                        <h2>About</h2>
                    </div>
                    <ul>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/team"><li>Team</li></Link>
                    <Link to="/career"><li>Career</li></Link>
                        <li>Clients</li>
                    </ul>
             </section>


             <section className={styles.fooetrContentBox4}>
             <div className={styles.footerContentHeader}>
                        <h2>Quick Links</h2>
                    </div>
                 
                    <ul>
                        <li>Work</li>
                        <li>Blog</li>
                        <li>Reach Us</li>
                        <li>Site Map</li>
                    </ul>

             </section>


             <section className={styles.fooetrContentBox5}>
             <div className={styles.footerContentHeader}>
                        <h2>Support Links</h2>
                    </div>


                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                        <li>Refund Policy</li>
                        <li>Copyrights Policy</li>
                    </ul>



             </section>
        </div>
       
       <h3 className={styles.footerCopyright}> All Rights Reserved - Salaar Media Marketing Agency |
       Terms and Conditions | Privacy Policy</h3>

    </div>
  )
}

export default Footer