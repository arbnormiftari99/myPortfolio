import React,{ useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from './components/header/Header'
import Nav from './components/nav/Navigation'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-MMVW6M9HNL'); 
    ReactGA.send({ hitType: "pageview", page: "/home" });

  }, []);


  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
