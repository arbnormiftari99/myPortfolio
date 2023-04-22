import React from 'react'
import './About.css'
import AboutMe from '../../assets/meblack.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
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
            <article className="about__card">
              <FiUser className="about__icon"/>
              <h5>
                Clients
              </h5>
              <small>
                 Comming
              </small>
            </article>
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
          I have six years of experience managing a team of 14-16 employees in our family business, while also pursuing my education and working on personal web development projects. My typical routine involves working from 6 AM to 4 PM on management duties, and then spending my evenings learning and practicing new web development skills. I'm now looking to focus exclusively on web development and seeking new professional opportunities to further my growth in the field. My experience includes creating dynamic and complex websites, and I'm excited to bring my skills to new projects and challenges.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About