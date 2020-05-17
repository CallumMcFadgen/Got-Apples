import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import { HomeCarousel} from './../../components/carousels/home_carousel';


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
          <Link to="/"><div className="current_nav_button_style">HOME</div></Link>
          <Link to="about"><div className="nav_button_style">ABOUT</div></Link>
          <Link to="growers"><div className="nav_button_style">GROWERS</div></Link>
          <Link to="auctions"><div className="nav_button_style">AUCTIONS</div></Link>
          <Link to="varieties"><div className="nav_button_style">VARIETIES</div></Link>
          <Link to="news"><div className="nav_button_style">NEWS</div></Link>
          <Link to="contact"><div className="nav_button_style">CONTACT</div></Link>
          <Link to="login"><div className="nav_button_style">LOGIN</div></Link>
        </div>

        {/* NAVIGATION BREADCRUMBS */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <div className="bread_crumbs_style">
              <Link to="/"><span>Home</span></Link>
            </div>
          </Col>
          <span className="crumb_padding"></span>
        </Row>

        {/* PAGE HEADING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <img className="heading_img_style" src="./images/heading_backgrounds/home.png" alt="Green apples" />
            <h1 className="page_heading_txt">Welcome to Got Apples!</h1>
          </Col>
        </Row>

        {/* SPACING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            &nbsp;
          </Col>
        </Row>




        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </Col>
        </Row>




        {/* SPACING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            &nbsp;
          </Col>
        </Row>

        {/* FOOTER */}
        <Row className="page_footer_style">
          <Col className="affiliate_link_style" xs="4" sm="4" md="4" lg="4" xl="4">
            <div>
              Links
            <br />
            Here
          </div>
          </Col>
          <Col className="footer_logo_style" xs="4" sm="4" md="4" lg="4" xl="4">
            <div>
              Logo
            <br />
            Here
          </div>
          </Col>
          <Col className="social_media_link_style" xs="4" sm="4" md="4" lg="4" xl="4">
            <div>
              Social Media
          <br />
          Here
          </div>
          </Col>
        </Row>

        <div className="sub_footer_style"></div>
      </React.Fragment>
    );
  };
};

export default HomePage;
