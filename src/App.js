import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import ProjectTwo from './components/Projects/ProjectTwo';
import ProjectFour from './components/Projects/ProjectFour';
import ProjectFive from './components/Projects/ProjectFive';
import ProjectSix from './components/Projects/ProjectSix';

function App() {
    return (
      <div>
        <Route
          exact path="/"
          component={Main}
        />
      
        <Route
          path="/project2"
          component={ProjectTwo}
        />
        
        <Route
          path="/project4"
          component={ProjectFour}
        />

        <Route
          path="/project5"
          component={ProjectFive}
        />

        <Route
          path="/project6"
          component={ProjectSix}
        />
      </div>
    );
  }
  
  export default App;