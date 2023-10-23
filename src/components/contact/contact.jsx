import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bjoj8yv', 'template_dua6wvh', form.current, 'RGcoP1nT356rHknnA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };



  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>sagarsingh162003@gmail.com</h5>
              <a href="mailto:sagarsingh162003@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
              <BsLinkedin className='contact__option-icon'/>
              <h4>Linkedin</h4>
              <h5>sagar-singh16</h5>
              <a href="https://www.linkedin.com/in/sagar-singh16/message" target="_blank">Send a message</a>
            </article>

            <article className="contact__option"> 
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>8077966340</h5>
              <a href="https://api.whatsapp.com/send?phone=8077966340" target="_blank">Send a message</a>
            </article>
        </div>
        {/* End of contact options */}
        <form ref = {form} onSubmit = {sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name required' />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' requires></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
