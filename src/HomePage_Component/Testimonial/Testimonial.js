import React, { useState } from 'react'
import styles from './style.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import logo from '../../Img/white 1.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 

const Testimonial = () => {

  gsap.registerPlugin(useGSAP,TextPlugin,ScrollTrigger)

  // useGSAP(()=>{
  //   let testi=gsap.timeline({
  //     scrollTrigger:{
  //       trigger:'#Testimonial',
  //       start:'top 50%'
  //     }
  //   })

  //     testi.from('#Testimonial',{
  //       y:'100%',
  //       opacity:0,
  //       duration:1
  //     })
     
  //     testi.from('#TestimonialContent',{
  //       opacity:0,
  //       duration:1
  //     })
    
  //     testi.from('#sliderBox1',{
  //       y:300,
  //       opacity:0,
  //       duration:1
  //     })

  //     testi.from('#sliderBox2',{
  //       y:300,
  //       opacity:0,
  //       duration:1
  //     })

  //     testi.from('#sliderBox3',{
  //       y:300,
  //       opacity:0,
  //       duration:1
  //     })


  // })
    

  return (
    <div id='Testimonial' className={styles.Testimonial}>
        <section id='TestimonialContent' className={styles.TestimonialContent}>
            <h1>10,000+</h1>
            <p>Happy Customers</p>
            <h3>4.5 <span className={styles.start}> <i class="fa-solid fa-star" ></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            </span></h3>
        </section>
        <Swiper
         style={
          {
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': 'blue',
        }

        
      
      }
        className={styles.TestimonialSlider}
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,FreeMode]}
        // className="mySwiper"
      >
        <SwiperSlide id='sliderBox1' className={styles.sliderBox1}>
            <h1>“Easy to Assemble. Save THOUSANDS With This Pergola”</h1>
            <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </h4>
            <img src={logo} alt=''/>
        </SwiperSlide>
        <SwiperSlide id='sliderBox2' className={styles.sliderBox1}>
        <h1>“A Garden Must Have That Can Add $27k to Your Home Value”</h1>
        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </h4>
        <img src={logo} alt=''/>

        </SwiperSlide>
        <SwiperSlide id='sliderBox3' className={styles.sliderBox1}>
        <h1>“Thousands of U.S. Contractors Recommend Hanso’s Pergola Kit”</h1>
        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </h4>
        <img src={logo} alt=''/>

        </SwiperSlide>
  
        <SwiperSlide id='sliderBox4' className={styles.sliderBox1}>
        <h1>“Thousands of U.S. Contractors Recommend Hanso’s Pergola Kit”</h1>
        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </h4>
        <img src={logo} alt=''/>

        </SwiperSlide>
        <SwiperSlide id='sliderBox4' className={styles.sliderBox1}>
        <h1>“Thousands of U.S. Contractors Recommend Hanso’s Pergola Kit”</h1>
        <h4>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type </h4>
        <img src={logo} alt=''/>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial