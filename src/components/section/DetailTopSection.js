import moment from 'moment'
import React from 'react'
import { Col, Row } from 'react-bootstrap'


const DetailTopSection = ({ artical }) => {
    console.log(artical)
    return (
        <Row className="single">
            <Col>
                <div id="fh5co-title-box" style={{ backgroundImage: `url(${artical?.urlToImage})`, backgroundPosition: "center", }}>
                    <div className="overlay"></div>
                    <div className="page-title">
                        <span>{moment(artical?.publishedAt).format("MMM Do YY")}</span>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default DetailTopSection