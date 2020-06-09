import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Title from './components/Title';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
    return (
      <div className="app">
        <Nav/>
        <Title/>
        <About id="about"/>
        <Portfolio id="portfolio" />
      </div>
    );
  }
  
export default App;