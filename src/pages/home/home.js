import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, button } from 'reactstrap';
import './../../App.css';
import './../../pages/home/home.css';


class HomePage extends Component {
  render() {
    return (
      <React.Fragment>

        {/* LOGO/TITLE */}
        <header className="header_style">
          <h1 className="header_logo_style">Got Apples!</h1>
        </header>

        {/* NAVIGATION BAR */}
        <div className="nav_style">
          <Link to="/"><div className="current_nav_button_style">Home</div></Link>
          <Link to="about"><div className="nav_button_style">About</div></Link>
          <Link to="growers"><div className="nav_button_style">Growers</div></Link>
          <Link to="auctions"><div className="nav_button_style">Auctions</div></Link>
          <Link to="varieties"><div className="nav_button_style">Varieties</div></Link>
          <Link to="news"><div className="nav_button_style">News</div></Link>
          <Link to="contact"><div className="nav_button_style">Contact</div></Link>
          <Link to="login"><div className="nav_button_style">Login</div></Link>
        </div>





        </React.Fragment>
    );
  };
};

export default HomePage;
