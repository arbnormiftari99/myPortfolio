import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
// import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { FaLinkedin } from 'react-icons/fa';






function getYear() {
  return new Date().getFullYear();

}






const Footer = () => {
  return (
    <footer>
      {/* <a href="# " className="footer__logo">YOUR LOGO</a> */}

      <ul className="permalinks">
        <li><a href="# ">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="Https://facebook.com/arbnorpitbulls"><FaFacebookF /></a>
        <a href="https://www.linkedin.com/in/arbnor-miftari-087033253/"><FaLinkedin /></a>
        {/* <a href="Https://twitter.com"><IoLogoTwitter /></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; {getYear()} Arbnor. All rights reseved.</small>
      </div>
    </footer>
  )
}

export default Footer