import React from 'react'
import styles from './style.module.css'
import shyamsir from '../../Img/cardimg.png'
import logo from '../../Img/white 1.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import user from '../../Img/userimg.jpg'


const TeamImage = () => {

    gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

    // useGSAP(()=>{
    //     const ourteam=gsap.timeline({
    //         scrollTrigger:{
    //             trigger:'#ourteamHeader',
    //             start:'top 80%'
    //         }
    //     })
    //     ourteam.from('#ourteamHeader',{
    //         y:'100px',
    //         opacity:0,
    //         duration:2,
           
    //             })

    //             ourteam.from('#teamimege',{
    //                 y:'100px',
    //                 opacity:0,
    //                 duration:2,
                    
                   
    //                     })
                          
                        
                        
    //                     ourteam.from('#teamimageWrapper',{
    //                         scale:0,
    //                         opacity:0,
    //                         duration:2,
    //                          stagger:1
                           
    //                             })
    // })


    const employdata=[
        {
            name:"Mukesh Kumar Tiwary",
            position:"Associate Web Devloper",
            img:logo,
            about:"Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered,"
        },
        {
            name:"Shyan Kumar",
            position:"Associate Web Devloper",
            img:logo
        },
        {
            name:"Subo Kumar",
            position:"Associate Web Devloper",
            img:logo
        },
        {
            name:"Md. Rashid",
            position:"Associate Web Devloper",
            img:logo
        },

        {
            name:"Md. Rashid",
            position:"Associate Web Devloper",
            img:logo
        },

        {
            name:"Md. Rashid",
            position:"Associate Web Devloper",
            img:logo
        },
        {
            name:"Md. Rashid",
            position:"Associate Web Devloper",
            img:logo
        },
    ]
  return (
    <>    
     <h3 id='ourteamHeader' className={styles.ourteamHeader}>Our Team</h3>
    <div id='teamimege' className={styles.teamimege}>
        {employdata.map((data)=>{
            console.log("employ data",data)
            return     <section className={styles.teamimageWrapper}>
            <div className={styles.teamlogo}>
            <img src={logo} alt=''/>
            </div>
            
            <div className={styles.card}>
            <div className={styles.circle}></div>
            <div className={styles.content}>
                <h1>{data.name}</h1>
                <h2>Associate Web Devloper</h2>
                <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with wo</p>
            </div>
            <img src={shyamsir} alt=''/>
            </div>
        </section>
           

        })}
        
    </div>




    <div id='teamimege' className={styles.teamimege1}>
        {employdata.map((data)=>{
            console.log("employ data",data)
            return     <section className={styles.teamimageWrapper1}>
            <div className={styles.teamlogo1}>
            <img src={logo} alt=''/>
            </div>

            <div className={styles.teamimg1}>
                <img src={user} alt=''/>
             </div>
            
            <div className={styles.card1}>
            <div className={styles.circle1}></div>
            <div className={styles.content1}>
                <h1>{data.name}</h1>
                <h2>Associate Web Devloper</h2>
                <p>Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with wo</p>
            </div>
            
            </div>
        </section>
           

        })}
        
    </div>





    </>

  )
}

export default TeamImage