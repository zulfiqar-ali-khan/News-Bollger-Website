import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { MainImage, SideImage } from '../../constants'
import ImageConponent from '../image'
const DetailTopSection = () => {
    return (
        <Row className="single">
            <Col>
                <div id="fh5co-title-box" data-stellar-background-ratio="0.5" style={{ backgroundImage: `url(${MainImage})`, backgroundPosition: "center", }} >
                    <div class="overlay"></div>
                    <div class="page-title">
                        <ImageConponent image={SideImage} />
                        <span>January 1, 2018</span>
                        <h2>How to write interesting articles</h2>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default DetailTopSection