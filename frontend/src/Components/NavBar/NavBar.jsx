import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar () {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  function cerrarSesion () {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Futraining</Navbar.Brand>
    <Navbar.Toggle aria-controls="Futrainning" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>

      {(!token)
        ? (<><Form className="d-flex">
      <Link to="/login">
      <Button variant="outline-success">Login</Button>
      </Link>
    </Form></>)
        : (<>
        <Button variant="outline-success" onClick={() => cerrarSesion()}>Cerrar sesión</Button>
      </>)
    }
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar
