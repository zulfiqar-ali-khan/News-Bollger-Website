import React from 'react'
import { Navbar, Nav, Image, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { LOGO } from '../../constants'

const Header = () => {
    const auth = localStorage.getItem('user');
    const history = useNavigate();
    const handleLogout = () => {
        localStorage.clear();
        history('/');
    }
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
                            <Link to="/home" className='nav-link'>Home</Link>
                            <Link to="/newscred" className='nav-link'>NewsCred</Link>
                            {auth ? <>
                                <Link to="/newsfeed" className='nav-link'>News Feed</Link>
                                <button className='nav-link' onClick={handleLogout}>Logout</button>
                            </> : <Link to="/" className='nav-link'>Login</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Col>
        </Row>
    )
}

export default Header