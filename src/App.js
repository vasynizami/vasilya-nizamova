import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
// import About from './components/About';
import Portfolio from './components/Portfolio';
// import Footer from './components/Footer';

function App() {
    return (
      <div className="app">
        <Nav/>
        <Title id="title"/>
        {/* <About id="portfolio"/> */}
        <Portfolio id="portfolio" />
        {/* <Footer/> */}
      </div>
    );
  }
  
export default App;