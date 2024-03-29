import React from 'react'
import './Service.css'
import {BiCheck} from 'react-icons/bi'



const Services = () => {


  return (
    <section id="services">
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>
      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>
              UI/UX Design
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        END UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>
              Web Development
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
              Custom Web Development
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
              Responsive Web Design
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
              Content Management Systems
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
              E-commerce Solutions
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
              Website Maintenance and Support
              </p>
            </li>
          
          </ul>
        </article>
        {/*END WEB DEVELOPMENT */}

        {/* <article className="service">
          <div className="service__head">
            <h3>
             Content Creation
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </li>
          </ul>
        </article>
        END CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services