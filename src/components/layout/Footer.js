import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <div className=" fh5co_footer_right_reserved p-3">
            <Container>
                <Row>
                    <Col md={6} className="py-4 Reserved"> © Copyright 2018, All rights reserved. Design by <a href="https://freehtml5.co" title="Free HTML5 Bootstrap templates">FreeHTML5.co</a>. </Col>
                    <Col className="spdp_right py-4">
                        <Link to="/" className="footer_last_part_menu">Home</Link>
                        <Link to="/" className="footer_last_part_menu">About</Link>
                        <Link to="/" className="footer_last_part_menu">Contact</Link>
                        <Link to="/" className="footer_last_part_menu">Latest News</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer