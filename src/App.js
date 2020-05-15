// PACKAGE DEPENDENCES
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// lOCAL DEPENDENCES
import HomePage from './pages/home/home';
import './App.css';
import Navbar from './components/nav';
import AboutPage from './pages/about/about';
import GrowersPage from './pages/growers/growers';
import GrowerPage from './pages/growers/grower/grower';
import AuctionsPage from './pages/auctions/auctions';
import AuctionPage from './pages/auctions/auction/auction';
import VarietiesPage from './pages/varieties/varieties';
import VarietyPage from './pages/varieties/variety/variety';
import NewsPage from './pages/news/news';
import ArticlePage from './pages/news/article/article';
import ContactPage from './pages/contact/contact';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/login/register/register';
import DashboardPage from './pages/login/dashboard/dashboard';
import ManageAuctionsPage from './pages/login/dashboard/manage_auctions/manage_auctions';
import ManageAccountPage from './pages/login/dashboard/manage_account/manage_account';


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
              <Route name="growers" exact path="/growers" component={GrowersPage} />
              <Route name="grower" exact path="/grower" component={GrowerPage} />
              <Route name="auctions" exact path="/auctions" component={AuctionsPage} />
              <Route name="auction" exact path="/auction" component={AuctionPage} />
              <Route name="varieties" exact path="/varieties" component={VarietiesPage} />
              <Route name="variety" exact path="/variety" component={VarietyPage} />
              <Route name="news" exact path="/news" component={NewsPage} />
              <Route name="article" exact path="/article" component={ArticlePage} />
              <Route name="contact" exact path="/contact" component={ContactPage} />
              <Route name="login" exact path="/login" component={LoginPage} />
              <Route name="register" exact path="/register" component={RegisterPage} />
              <Route name="dashboard" exact path="/dashboard" component={DashboardPage} />
              <Route name="manage_auctions" exact path="/manage_auctions" component={ManageAuctionsPage} />
              <Route name="manage_account" exact path="/manage_account" component={ManageAccountPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  };
};

export default App;
