import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import logo from './assets/logo.png'

function Header() {
  let navigate = useNavigate()
  return (
    <>
        {/* <nav className="navbar">
        <div className="left">
                <div className="logo-name">
                  <img src="src\pages\assets\logo.png" alt="" />
                </div>
          </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
            <div className="dropdown">
              <a className="nav-link">About</a>
                    <div className="dropdown-content">
                        <a href="#">About Us</a>
                        <a href="#">Why Augusta ??</a>
                    </div>
        </div>

        </li>
        <li className="nav-item">
        <div className="dropdown">
              <a className="nav-link">Courses</a>
                    <div className="dropdown-content">
                        <a href="#">Course Link 1</a>
                        <a href="#">Course Link 2</a>
                        <a href="#">Course Link 3</a>
                    </div>
        </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#signup">
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#signup">
           Contact Us
          </a>
        </li>
      </ul>
    </nav>
      <hr /> */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><h3 style={{marginLeft:'.6rem'}}>Augusta Avitaion</h3></Navbar.Brand>
        <Navbar.Brand href="#home">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            <NavDropdown title="About Us" id="navbarScrollingDropdown" >
              <NavDropdown.Item as={Link} to="/aboutus">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/whyaugusta">
                Why Augusta ??
              </NavDropdown.Item>
             
            </NavDropdown>
            <NavDropdown title="Courses" id="navbarScrollingDropdown">
              <NavDropdown.Item as = {Link} to="/airportmanagement">Airport Management</NavDropdown.Item>

              <NavDropdown.Item as = {Link} to="/groundstaff">
                Ground Staffing Training
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Ticketing
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action4">
                Airline Security Service
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Customer Service
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Interview Skills 
              </NavDropdown.Item>

              <NavDropdown.Item href="#action4">
                Personality Development
              </NavDropdown.Item>          
            
            </NavDropdown>
           
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contactForm">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header