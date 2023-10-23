import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/13.jpeg'

// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
 


function testimonials() {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
         <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
         </div>
         <h5 className="client__name">Varun Kumar - Web Developer</h5>
          <small className="client__review">
          I had the pleasure of working with Sagar Singh on a web development project, and the experience was nothing short of exceptional. Sagar's expertise in AI and ML shone through, transforming a complex problem into a user-friendly solution.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
         </div>
         <h5 className="client__name">Ayushi Singhal - Health Tech Enthusiast</h5>
          <small className="client__review">
          Sagar's project is a game-changer in the health tech industry. It addresses the discomfort associated with invasive health metrics using AI and ML, and the results are astounding.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
         </div>
         <h5 className="client__name">Manik Grewal - User Experience Designer</h5>
          <small className="client__review">
          Working on a project with Sagar was a delightful experience. Their commitment to improving user comfort and convenience in health monitoring is evident in their work. 
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
         <div className="client__avatar">
          <img src={AVTR1} alt="Avatar One" />
         </div>
         <h5 className="client__name">Sachin Sharma - Software Engineer</h5>
          <small className="client__review">
          I had the privilege of collaborating with Sagar on a project, and I was thoroughly impressed by their technical skills and problem-solving abilities. 
          </small>
        </SwiperSlide>
        

     
      </Swiper>
    </section>
  )
}

export default testimonials
