import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Error from "../pages/Error";

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">mdsakir.com</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route index path={'/'} element={<Home/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'contact'} element={<Contact/>}/>
                    <Route path={'*'} element={<Error/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Navigation;