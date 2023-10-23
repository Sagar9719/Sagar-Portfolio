import React from 'react'
import './about.css'
import ME from '../../assets/sagar.JPG'
import {FaAward} from 'react-icons/fa'
import {GrProjects} from 'react-icons/gr'
import {MdOutlineEmojiEvents} from 'react-icons/md'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
           </div>

           <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
              </article>

              <article className='about__card'>
              <MdOutlineEmojiEvents className='about__icon' />
              <h5>Hackathons</h5>
              <small>10+ Hackathons</small>
              </article>

              <article className='about__card'>
                <GrProjects className='about__icon' />
              <h5>Projects</h5>
              <small>7+ Projects</small>
              </article>
            </div>

            <p>
            Hello, I'm Sagar Singh, a driven technologist with expertise in web development and problem-solving. Proficient in programming languages like C, C++, JavaScript, and Python, I specialize in crafting dynamic and user-friendly web applications.

My journey is marked by a passion for innovation. Projects like 'tie-NOT-women,' empowering athletes, and 'Doctor At Doorstep,' utilizing machine learning for healthcare, highlight my ability to find practical solutions to complex challenges.

I'm a continuous learner, with training in Data Science, Machine Learning, and blockchain. Leadership roles, including Technical Head at Unnat Bharat Abhiyan, have honed my teamwork and communication skills.

My portfolio reflects my dedication to transforming ideas into impactful technology. Explore my work to see how I shape the future of tech.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div>
      </div>
    </section>
  )
}

export default about
