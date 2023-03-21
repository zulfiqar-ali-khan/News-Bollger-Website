import React from 'react'
import { Navbar, Nav, Image, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LOGO } from '../constants'
const Header = () => {
    return (
        <Row className=' blurbgwhite navbarheader'>
            <Col md={10} className="mx-auto">
                <Navbar collapseOnSelect expand="lg" className='p-0'>
                    <Navbar.Brand href="#home">
                        <Image src={LOGO} alt="logo" width="160" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/home" className='nav-link'>BBC News</Link>
                            <Link to="/home" className='nav-link'>New York Times</Link>
                            <Link to="/home" className='nav-link'>NewsCred</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header