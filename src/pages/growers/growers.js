import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import './../../App.css';
import './../../pages/growers/growers.css';

class GrowersPage extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:3333/get_users")
      .then(response => response.json())
      .then(response => {
        this.setState({ users: response })
        console.log(response);
      })
  }

  render() {
    return (
      <React.Fragment>

        {/* LOGO/TITLE */}
        <header className="header_style">
          <h1 className="header_logo_style">Got Apples!</h1>
        </header>

        {/* NAVIGATION BAR */}
        <div className="nav_style">
          <Link to="/"><div className="nav_button_style">HOME</div></Link>
          <Link to="about"><div className="nav_button_style">ABOUT</div></Link>
          <Link to="growers"><div className="current_nav_button_style">GROWERS</div></Link>
          <Link to="auctions"><div className="nav_button_style">AUCTIONS</div></Link>
          <Link to="varieties"><div className="nav_button_style">VARIETIES</div></Link>
          <Link to="news"><div className="nav_button_style">NEWS</div></Link>
          <Link to="contact"><div className="nav_button_style">CONTACT</div></Link>
          <Link to="login"><div className="nav_button_style">LOGIN</div></Link>
        </div>

        {/* USING API */}
        <div>
          <h1>Grower information from API GET request</h1>
          <br />
          {this.state.users.map(user => {
            if (user.got_apples_member === 1) {
              return (
                <div key={user.id}>
                  <h2>User : {user.user_name}</h2>
                  <p><b>First name</b></p>
                  <p>{user.first_name}</p>
                  <p><b>Last name</b></p>
                  <p>{user.last_name}</p>
                  <p><b>Phone number</b></p>
                  <p>{user.phone_number}</p>
                  <p><b>Email address</b></p>
                  <p>{user.email_address}</p>
                  <br />
                </div>
              )
            }
          })}
        </div>

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

export default GrowersPage;
