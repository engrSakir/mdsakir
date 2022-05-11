import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";

class Navigation extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <Routes>
                    <Route index path={'/'} component={<Home/>}/>
                    <Route index path={'about'} component={<About/>}/>
                    <Route index path={'contact'} component={<Contact/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Navigation;