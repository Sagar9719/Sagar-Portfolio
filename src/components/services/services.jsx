import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function services() {
  return (
    <section id='services'>
      <h5>My Top 3 Projects</h5>
      <h2>Explaination</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>tie-NOT-women</h3>
          </div>
            
            <ul className="service__list">
               <li>
                <BiCheck className="service__list-icon" />
                <p> 
                A platform for sportperson to showcase their
                skills
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                Our project empowers women through job listings, training, and support
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                Our mission is to bridge the gender gap in the workforce.
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                We offer a user-friendly platform with all the necessary resources
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                  FrameWork : React.js 
                  <br />
                  Language : HTML, CSS and JS and Python
                  <br />
                  Database : Firebase
                  <br />
                  Technology : Machine Learning
                </p>
             </li>
            </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Doctors At Door Step</h3>
          </div>
            
            <ul className="service__list">
               <li>
                <BiCheck className="service__list-icon" />
                <p>
                Our platform allows patients to easily book appointments with healthcare providers online
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                We leverage machine learning to predict diseases, enhancing early detection and proactive healthcare
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>
                We aim to simplify and improve healthcare access for patients through technology and data-driven insights
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>
                Our platform empowers individuals to take charge of their health by providing early disease predictions and preventive measures
                </p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p> 
                  Language : HTML, CSS and JS and Python
                  <br />
                  Technology : Machine Learning
                </p>
             </li>
            </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Fit Score</h3>
          </div>
            
            <ul className="service__list">
               <li>
                <BiCheck className="service__list-icon" />
                <p>Addresses discomfort associated with invasive health metric measurements</p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>Utilizes Artificial Intelligence and Machine Learning for a more convenient approach</p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>Focuses on personalizing health metrics for each individual</p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>Incorporates Recurrent Neural Networks (RNNs) for continuous adaptation</p>
             </li>
             <li>
                <BiCheck className="service__list-icon" />
                <p>Begins with general scientific data and adapts based on user feedback and readings</p>
             </li>
            </ul>
        </article>
        {/* End of Content Creation*/}
      </div>
    </section>
  )
}

export default services
