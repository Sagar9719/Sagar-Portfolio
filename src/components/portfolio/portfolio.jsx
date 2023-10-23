import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/12.jpeg'
import IMG2 from '../../assets/w.jpg'
import IMG3 from '../../assets/d.jpg'
import IMG4 from '../../assets/f.webp'
import IMG5 from '../../assets/m.jpg'
import IMG6 from '../../assets/s.jpg'
import IMG7 from '../../assets/c.avif'

function portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG2} alt="" />
          </div>
          <h3>tie-NOT-women</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/tie-NOT-women" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/tie-NOT-women" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG3} alt="" />
          </div>
          <h3>Doctors at door step</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/Doctors-At-Door-Step" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/Doctors-At-Door-Step" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG4} alt="" />
          </div>
          <h3>Fit Score</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/Spam_Bytes_FitScore" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/Spam_Bytes_FitScore" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG5} alt="" />
          </div>
          <h3>Bribe diminution in land registry system</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG6} alt="" />
          </div>
          <h3>Salary prediction</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/Bribe-Diminution-in-Land-Registry-System" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
           <img src={IMG7} alt="" />
          </div>
          <h3>iCoder</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Sagar9719/icoder-Bootstrap" className="btn" target='_blank'>Github</a>
          <a href="https://github.com/Sagar9719/icoder-Bootstrap" className="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

         
           
         
 
      </div>
    </section>
  )
}

export default portfolio
