import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar () {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <div className="container">
    //     <Link className="navbar-brand" id='home' to="/home">
    //       {/* <img src={logo} className="nav-logo" alt="" /> */}
    //     </Link>
    //     <button className="navbar-toggler" type="button"
    //       data-bs-toggle="collapse" data-bs-target="#navbarNav"
    //       aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     </div>
    //   </div>
    // </nav>
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Link to="/home">
    <Navbar.Brand href="#">Futraining</Navbar.Brand>
    </Link>
    <Link to="/createGame">
    <Navbar.Brand href="#">Create Game</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="Futrainning" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        {/* <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link> */}
      </Nav>
      <Form className="d-flex">
        <Link to="/login">
        <Button variant="outline-success">Login</Button>
        </Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
