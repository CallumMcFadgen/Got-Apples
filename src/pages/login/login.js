import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './../../App.css';
import './../../pages/login/login.css';


class LoginPage extends Component {
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
          <Link to="growers"><div className="nav_button_style">GROWERS</div></Link>
          <Link to="auctions"><div className="nav_button_style">AUCTIONS</div></Link>
          <Link to="varieties"><div className="nav_button_style">VARIETIES</div></Link>
          <Link to="news"><div className="nav_button_style">NEWS</div></Link>
          <Link to="contact"><div className="nav_button_style">CONTACT</div></Link>
          <Link to="login"><div className="current_nav_button_style">LOGIN</div></Link>
        </div>

        {/* NAVIGATION BREADCRUMBS */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <div className="bread_crumbs_style">
              <Link to="/"><span>Home</span></Link>
              &nbsp;
              <span>></span>
              &nbsp;
              <Link to="login"><span>Login</span></Link>
            </div>
          </Col>
          <span className="crumb_padding"></span>
        </Row>

        {/* PAGE HEADING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <img className="heading_img_style" src="./images/heading_backgrounds/home.png" alt="Green apples" />
            <h1 className="page_heading_txt">Login</h1>
          </Col>
        </Row>

        {/* SPACING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            &nbsp;
          </Col>
        </Row>

        {/* LOGIN FORM  "needs lots work lol"*/}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "6", offset: "3" }} xl={{ size: "6", offset: "3" }}>
            <Form className="login_form_style" name="login-form" onSubmit={this.handleSubmit}>
              <br />
              <h2>Enter user login</h2>
              <br />
              <FormGroup>
                {/* <Label>Email</Label> */}
                <Input
                  className="login_input_style"
                  type="input"
                  name="username"
                  id="username"
                  placeholder="Username"
                  // value={this.state.email} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                {/* <Label>Password</Label> */}
                <Input
                  className="login_input_style"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <br />
              <div>
              <Link to="dashboard"><Button>LOGIN</Button>{' '}</Link>
              </div>
              <br />
            </Form>
          </Col>
        </Row>

        {/* SPACING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            &nbsp;
          </Col>
        </Row>

        {/* REGISTER TILE */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "6", offset: "3" }} xl={{ size: "6", offset: "3" }}>
            <div className="login_form_style">
              <br />
              <h2>Not a member?</h2>
              <br />
              <p>Ko te moemoea a Maui kia haere ngatahi ai ratou ko ona tuakana ki te hii ika. I te hokinga mai o ona tuakana ki tatahi, ka kii atu a Maui, “ka taea e au te haramai i to koutou na taha ki te hii ika?” Engari, ko te whakautu o ona tuakana ki a ia ano</p>
              <br />
              <div className="contact-submit-button">
              <Link to="register"><Button >REGISTER</Button>{' '}</Link>
              </div>
              <br />
            </div>
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

export default LoginPage;
