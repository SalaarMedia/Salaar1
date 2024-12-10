import React, { useState } from 'react'
import styles from './style.module.css'
import logo from '../../Img/white 1.png'
import {Link} from 'react-router-dom'


const Menu = () => {


const [showElement, setShowElement] = useState(false)
const [showAboutElement, setShowAboutElement] = useState(false)
const [mobileMenu,setMobileMenu]=useState(false)
const [mobileServiceMenu,setMobileServiceMenu]=useState(false)
const [mobileAboutMenu,setMobileAboutMenu]=useState(false)
 
function homeFuntion(){
   setShowElement(false)
   setShowAboutElement(false)
}

const serviceFuntion=()=>{
   setShowElement(true)
   setShowAboutElement(false)
   
}


function workFuntion(){
   setShowElement(false)
   setShowAboutElement(false)
}

function aboutFuntion(){
   setShowElement(false)
   setShowAboutElement(true)
}

function contectFuntion(){
   setShowElement(false)
   setShowAboutElement(false)
}

function mobileMenuFuntion(){
   setMobileMenu(true)
}

function closeMobileMenuFuntion(){
   setMobileMenu(false)
   setMobileServiceMenu(false)
   setMobileAboutMenu(false)
}




function homeFuntion1(){
   setMobileMenu(false)
}

const serviceFuntion1=()=>{
   // setMobileMenu(false)
   setMobileServiceMenu(true)
   
}


function workFuntion1(){
   setMobileMenu(false)
}

function aboutFuntion1(){
   // setMobileMenu(false)
   setMobileAboutMenu(true)
}

function contectFuntion1(){
   setMobileMenu(false)
}

function mobileServiceDesgin(){
   setMobileMenu(false)

}

function mobileServiceTechnology(){
   setMobileMenu(false)

}

function mobileServiceMarketing(){
   setMobileMenu(false)

}

function careerMobileFuntio(){
   setMobileMenu(false)

}

function teamMobileFuntio(){
   setMobileMenu(false)

}

function aboutMobileFuntio(){
   setMobileMenu(false)

}


  return (
    <div className={styles.menuContainer}>
     
     <div className={styles.menuWrapper}>

     <section className={styles.logoSection}>
      <Link to="/"> <img src={logo} alt=''/></Link>
     </section>

     <section className={styles.menuItems}>
        <ul>
           <Link  to="/" onClick={() => homeFuntion()}> <li>Home</li></Link>
            <li onClick={serviceFuntion}>Services <i class="fa-solid fa-angle-down"></i></li>
           <Link to="/work" onClick={() => workFuntion()}><li>Work</li></Link>
           <Link  onClick={() => aboutFuntion()}><li>About <i class="fa-solid fa-angle-down"></i></li></Link>
           <Link to="/contect" onClick={() => contectFuntion()}> <li>Contect</li></Link> 
           
        </ul>
     </section>


     <section className={styles.mobileTabletMenu}>
     <button className={styles.menuButton} onClick={mobileMenuFuntion}><i class="fa-solid fa-bars"></i></button>
     {mobileMenu && <section className={styles.mobileTabletMenuItems}>
      <button onClick={closeMobileMenuFuntion} className={styles.menuCloseButton}>X</button>
        <ul>
           <Link  to="/" onClick={homeFuntion1}> <li>Home</li></Link>
            <li className={styles.serviceMenu}>
            <Link  to="#" onClick={serviceFuntion1} > <span>Services <i class="fa-solid fa-angle-down"></i></span></Link>
             {mobileServiceMenu && <ul className={styles.serviceMenuItem}>
              <Link to="/serviceDesgin" onClick={mobileServiceDesgin}> <li>Design</li></Link>
              <Link to="/serviceTechnology" onClick={mobileServiceTechnology}><li>Technology</li></Link> 
               <Link to="/serviceMarketing" onClick={mobileServiceMarketing}><li>Marketing</li></Link>
             </ul>}
           
           </li>
           <Link to="/work" onClick={workFuntion1}><li>Work</li></Link>
           <li className={styles.aboutMenu}>
           <Link  onClick={aboutFuntion1}><span>About <i class="fa-solid fa-angle-down"></i></span></Link>
           {mobileAboutMenu && <ul className={styles.aboutMenuItem}>
             <Link to="/about" onClick={aboutMobileFuntio}><li>About Us</li></Link>  
               <Link to="/team" onClick={teamMobileFuntio}><li>Team</li></Link>
               <Link to="/career" onClick={careerMobileFuntio}><li>Career</li></Link>
             </ul>}
            
            </li>
           <Link to="/contect" onClick={contectFuntion1}> <li>Contect</li></Link> 
           
        </ul>
     </section>}

     </section>


     </div>

    { showElement && <section className={styles.servicesSubMenu}>
     <ul>

          
           <Link to="/serviceDesgin"><li>
            <h3>Design</h3>
            <p>Handcraft the User Experience.</p>
            </li></Link>
           <Link to="/serviceTechnology"><li>
           <h3>Technology</h3>
           <p>Leverage the power of code.</p>
            </li></Link>
           <Link to="/serviceMarketing"> <li>
           <h3>Marketing</h3>
           <p>Creative strategies for brands.</p>
            </li></Link>
           
        </ul>
     </section>}



     { showAboutElement && 
    <section className={styles.servicesSubMenu}>
     <ul>

          
           <Link to="/about"><li>
            <h3>About US</h3>
            <p>We are super-efficient yet humble to serve you!.</p>
            </li></Link>
           <Link to="/team"><li>
           <h3>Team</h3>
           <p>we are pround of our experienced</p>
            </li></Link>
           <Link to="/career"> <li>
           <h3>Career</h3>
           <p>Can you offer such Experience?</p>
            </li></Link>
           
        </ul>
     </section>}

    

    


    </div>
  )
}

export default Menu