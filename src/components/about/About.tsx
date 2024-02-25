import React, { useState, useEffect } from 'react'
import ReactGA from 'react-ga4';
import './About.css'
import AboutMe from '../../assets/meblack.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  }

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: "/about" });
  }, []);

  return (
    <section id="about">
      <h5>
        Get To Know
      </h5>
      <h2>
        About Me
      </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={AboutMe} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>
                Experience
              </h5>
              <small>
                3+ Years Practicing
              </small>
            </article>
            {/* <article className="about__card">
              <FiUser className="about__icon"/>
              <h5>
                Clients
              </h5>
              <small>
                 Comming
              </small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>
                Projects
              </h5>
              <small>
                10+ Completed
              </small>
            </article>
          </div>
        
      
          <p>
            {showFullDescription
              ? 'My expertise lies in crafting intricate and dynamic websites, showcasing not only a strong grasp of technical complexities but also a keen eye for user experience and design. With a firm foundation built over three years of consistent practice and project execution, I am enthusiastic about redirecting my focus toward new professional opportunities in web development adsoftware engineering. I am eager to bring my skills to fresh challenges, leveraging my comprehensive experience to contribute to innovative projects in this ever-evolving field.'
              : 'Over the last four years, I have passionately delved into the world of web development and software engineering, dedicating my time and expertise to a series of self-initiated projects. Embracing the intricacies of this field, I`ve meticulously designed, developed, and managed a range of dynamic and sophisticated websites. My journey in this domain has been a hands-on, self-driven adventure, with evenings dedicated to advancing my knowledge and skills in web development technologies. Experimentation and implementation have been central to my approach as I continuously sought to learn and integrate new tools, frameworks, and innovative solutions.'}
            <span
               className={`read-more-link ${showFullDescription ? 'less' : 'more'}`}
              onClick={toggleDescription}
            >
              {showFullDescription ? 'Read Less' : 'Read More'}
            </span>
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About