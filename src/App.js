// PACKAGE DEPENDENCES
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// lOCAL DEPENDENCES
import HomePage from './pages/home/home';
import './App.css';
import Navbar from './components/nav';
import AboutPage from './pages/about/about';




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Switch>
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="about" exact path="/about" component={AboutPage} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  };
};

export default App;
