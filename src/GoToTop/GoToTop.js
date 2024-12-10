import React, { useEffect, useState } from 'react'
import styles from './style.module.css'

const GoToTop = () => {

    const [isVisible,setIsVisible]=useState(false)

    function gotoTop(){
      window.scrollTo({top:0,left:0,behavior:'smooth'})
     
    }


    const listenScroll = ()=>{
        let heightTohidden=150;
        const winScroll=document.body.scrollTop || document.documentElement.scrollTop
    
        if(winScroll > heightTohidden)
        {
          setIsVisible(true)
        }
        else{
            setIsVisible(false)
        }

    }


    useEffect(()=>{
        window.addEventListener('scroll',listenScroll)

        return () => window.addEventListener('scroll',listenScroll)
    },[])


  return (
    <div className={styles.GoToTop}>
   
   {isVisible && <button onClick={gotoTop}><i class="fa-solid fa-arrow-up"></i></button>}

    </div>
  )
}

export default GoToTop