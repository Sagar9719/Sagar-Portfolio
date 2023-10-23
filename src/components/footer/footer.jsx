import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

function footer() {
  return (
     <footer>
      <a href='#' className='footer__logo'>Sagar Singh</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="services">Projects</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/sagar-singh16/"> <BsLinkedin /> </a>
        <a href="https://github.com/Sagar9719"> <FaGithub /> </a>
        <a href="https://leetcode.com/Sagar_Singh890/"> <SiLeetcode /> </a>
      </div>

      <div className="footer__copyright">
        <small>Made By Sagar Singh</small>
      </div>
     </footer>
  )
}

export default footer
