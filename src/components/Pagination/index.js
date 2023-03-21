import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Pagenation = () => {
    return (
        <Row className="animate-box">
            <Col className="text-center pb-4 pt-4">
                <a href="#" className="btn_mange_pagging"><i className="fa fa-long-arrow-left"></i>&nbsp;&nbsp; Previous</a>
                <a href="#" className="btn_pagging">1</a>
                <a href="#" className="btn_pagging">2</a>
                <a href="#" className="btn_pagging">3</a>
                <a href="#" className="btn_pagging">...</a>
                <a href="#" className="btn_mange_pagging">Next <i className="fa fa-long-arrow-right"></i>&nbsp;&nbsp; </a>
            </Col>
        </Row>
    )
}

export default Pagenation