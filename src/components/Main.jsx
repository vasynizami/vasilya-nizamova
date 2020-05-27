import React from 'react';
import Title from './Title';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function Main() {
    return (
      <app>
        <Title />
        <About />
        <Portfolio id="portfolio"/>
        <Contact />
        <Footer />
      </app>
    );
  }
  
  export default Main;