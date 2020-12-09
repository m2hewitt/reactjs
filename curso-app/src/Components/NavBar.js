import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


/*
function NavBarfc() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Tienda React</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <NavDropdown title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Cate 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cate 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cate 3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Cate 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                <Button variant="primary"><Nav.Link href="#deets">Mi Carrito</Nav.Link></Button>{' '}
                    <Nav.Link href="#deets">Perfil</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}
*/

function NavBarfc() {
    return (
        <Navbar className="navbar-background-color" expand="lg">
            <Navbar.Brand className="navbar-color-text" href="#home"><img src="/logo_tienda.png" className="d-inline-block logo-nav" width="102" height="43" alt="Tienda React Logo"></img>Tienda React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home" className="navbar-color-text d-inline-block" >Inicio</Nav.Link>
                    <NavDropdown className="navbar-color-text d-inline-block" title="Categorias" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.2">Cate 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Cate 2</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Cate 3</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Cate 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline className="ml-auto">
                    <FormControl type="text" size="lg" placeholder="..." className="mr-sm-2" />
                    <Button variant="primary">Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBarfc;