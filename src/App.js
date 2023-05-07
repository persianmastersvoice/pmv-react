import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'

import Footer from './components/Footer'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop'
import ArtListPage from './pages/ArtListPage';
import LoginPage from './pages/LogInPage';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { HashRouter, Route, Link } from "react-router-dom";
import  { UserProvider }  from './components/DeviceContext'


var artMedium = "coffee";

class App extends React.Component {

  render() {

    return (
      <UserProvider value ={(([
        'iPad Simulator',
        'iPhone Simulator',
        'iPod Simulator',
        'iPad',
        'iPhone',
        'iPod'
      ].includes(navigator.platform)|| (navigator.userAgent.includes("Mac") && "ontouchend" in document))|| /^((?!chrome|android).)*safari/i.test(navigator.userAgent))? ".jpg" :".webp" } >
      <div>
        <HashRouter>
          <div>
            <Navbar collapseOnSelect fixed="top" expand="lg" >
              <Navbar.Brand href="/">  <img
                  src="/logo.png" alt="Logo" style={{ height: 'auto', width: '90%', maxWidth: '250px', padding: '20px' }} 
              /></Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <NavDropdown title="PERSIAN MUSIC" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/arts/coffee" href="/arts/coffee">  Dastgah  </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/arts/colorPencils" href="/arts/colorPencils">Avaz</NavDropdown.Item>
                    {/* <NavDropdown.Item as={Link} to="/arts/charcoal" href="/arts/charcoal"> Charcoal </NavDropdown.Item> */}
                  </NavDropdown>
                  <Nav.Link as={Link} to="/about" href="/about">  ABOUT </Nav.Link>
                  <Nav.Link as={Link} to="/about" href="/about">  CONTACT </Nav.Link>

                  <Nav.Link as={Link} to="/about" href="/about">  SEARCH </Nav.Link>
                  <Nav.Link as={Link} to="/login" href="/login">LOG IN</Nav.Link>
                  <Nav.Link target="_blank" href="https://www.etsy.com/ca/listing/1183576567/custom-handmade-portraitscustom-colour?click_key=4dbbcdf2c0b267bc2a7b74b022cbfbad97ae802b%3A1183576567&click_sum=f5b03bfc&ref=shop_home_active_1">  Order on Etsy </Nav.Link>
              
                </Nav>
              </Navbar.Collapse>
            </Navbar>

          </div>
          <Container fluid={true} className="p-0">
            <div className="main-content-container">

              <ScrollToTop />
              <Route path="/" exact render={() => <HomePage />} />
              <Route path="/about" exact render={() => <AboutPage />} />
              <Route path="/contact" exact render={() => <ContactPage />} />
              <Route path="/arts/coffee" exact render={() => <ArtListPage medium='coffee' />} />
              <Route path="/arts/colorPencils" exact render={() => <ArtListPage medium='colorPencils' />} />
              <Route path="/arts/charcoal" exact render={() => <ArtListPage medium='charcoal' />} />
              <Route path="/login" exact render={() => <LoginPage />} />



            </div>
          </Container>
        </HashRouter>

        <Footer />
        
      </div>
      </UserProvider>
    );
  };

}

export default App;
