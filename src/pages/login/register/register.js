import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import './../../../App.css';
import './../../../pages/login/register/register.css';


class RegisterPage extends Component {
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
          <Link to="login"><div className="nav_button_style">LOGIN</div></Link>
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
              &nbsp;
              <span>></span>
              &nbsp;
              <Link to="register"><span>Register</span></Link>
            </div>
          </Col>
          <span className="crumb_padding"></span>
        </Row>

        {/* PAGE HEADING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            <img className="heading_img_style" src="./images/heading_backgrounds/home.png" alt="Green apples" />
            <h1 className="page_heading_txt">Register</h1>
          </Col>
        </Row>

        {/* SPACING */}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "10", offset: "1" }} xl={{ size: "10", offset: "1" }}>
            &nbsp;
          </Col>
        </Row>

        {/* REGISTER FORM  "needs lots work lol"*/}
        <Row>
          <Col xs="12" sm="12" md="12" lg={{ size: "6", offset: "3" }} xl={{ size: "6", offset: "3" }}>
            <Form className="register_form_style" name="login-form" onSubmit={this.handleSubmit}>
              <br />
              <h2>Create your account</h2>
              <br />
              <FormGroup>
                {/* <Label></Label> */}
                <Input
                  className="register_input_style"
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First name"
                  // value={this.state.email} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                {/* <Label>Password</Label> */}
                <Input
                  className="register_input_style"
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last name"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  placeholder="Phone number"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="address_line_1"
                  id="address_line_1"
                  placeholder="Address line 1"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="address_line_2"
                  id="address_line_2"
                  placeholder="Address line 2"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="region"
                  id="region"
                  placeholder="Region"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="city"
                  id="ciy"
                  placeholder="City"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <Input
                  className="register_input_style"
                  type="text"
                  name="zip_code"
                  id="zip_code"
                  placeholder="Zip Code"
                  // value={this.state.password} 
                  // onChange={this.handleChange} 
                  // required 
                  innerRef={(input) => { }} />
              </FormGroup>
              <FormGroup>
                <label>
                  <Input 
                  className=""
                  type="checkbox" 
                  innerRef={(input) => { this.menu_item_function = input }} />{' '}
                  Request membership privilages
                  </label>
              </FormGroup>
              <br />
              <div>
                <Link to="dashboard"><Button>REGISTER</Button>{' '}</Link>
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

export default RegisterPage;
