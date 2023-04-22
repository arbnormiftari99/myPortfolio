import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef as UseRef } from 'react';
import emailjs from '@emailjs/browser';




const contact = () => {
  const form = UseRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_b6a3lo7', 'template_r4jmqv6', form.current, 'beDIcbQaiN_K6YbGh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id="contact">
      <h5>
        Get In Touch
      </h5>
      <h2>
        Contact Me
      </h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>
             Email
            </h4>
            <h5>
              arbnnormiftari99@gmail.com
            </h5>
            <a href="mailto:arbnnormiftari99@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>
             Messenger
            </h4>
            <h5>
              Arbnor Miftari
            </h5>
            <a href="https://facebook.com/arbnorpitbulls" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>
             WhatsApp
            </h4>
            <h5>
              +37745282642
            </h5>
            <a href="https://wa.me/+37745282642" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact