import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from './../image'
import { SideImage } from '../../constants'

const NewsListCard = () => {
    return (
        <Row className=" pb-4">
            <Col md={5} >
                <div className="fh5co_hover_news_img">
                    <div className="fh5co_news_img">
                        <ImageComponent image={SideImage} />
                    </div>
                </div>
            </Col>
            <Col md={7} className="animate-box">
                <a href="single.html" className="fh5co_magna py-2"> Magna aliqua ut enim ad minim veniam quis
                    nostrud quis xercitation ullamco. </a> <a href="single.html" className="fh5co_mini_time py-3"> Thomson Smith -
                        April 18,2016 </a>
                <div className="fh5co_consectetur"> Amet consectetur adipisicing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </div>
            </Col>
        </Row>
    )
}

export default NewsListCard