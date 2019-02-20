import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const navbar = (props) => (
    <Navbar className="mNavbar" fixed="top" collapseOnSelect expand="sm" variant="dark">
        <Navbar.Brand>ProPer Nutrition</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link href='#' as='div'>
                <Nav className="mr-auto">
                    <NavLink to='/start' className="nav-link" onClick={() => props.updatePath('/start')} isActive={() => props.currentPath === '/start' ? true : false} >Acasa</NavLink>
                    <NavLink to='/about' className="nav-link" onClick={() => props.updatePath('/about')} isActive={() => props.currentPath === '/about' ? true : false}>Viziune</NavLink>
                </Nav>
                <Nav>
                    <NavLink to='/contact' className="nav-link" onClick={() => props.updatePath('/contact')} isActive={() => props.currentPath === '/contact' ? true : false}>Contact</NavLink>
                </Nav>
            </Nav.Link>
        </Navbar.Collapse>
    </Navbar>
);

export default navbar;