import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { MainImage, SideImage } from '../../constants'
import ImageConponent from '../image'


const HomeTopSection = () => {
    const data = [
        {
            date: "Dec 31,2017",
            text: "After all is said and done, more is said than done",
            image: SideImage
        },
        {
            date: "Dec 31,2017",
            text: "After all is said and done, more is said than done",
            image: SideImage
        },
        {
            date: "Dec 31,2017",
            text: "After all is said and done, more is said than done",
            image: SideImage
        },
        {
            date: "Dec 31,2017",
            text: "After all is said and done, more is said than done",
            image: SideImage
        },

    ]
    return (
        <Row>
            <Col md={6}>
                <div className="fh5co_suceefh5co_height" >

                    <ImageConponent image={MainImage} />
                    <div className="fh5co_suceefh5co_height_position_absolute"></div>
                    <div className="fh5co_suceefh5co_height_position_absolute_font">
                        <Link className="color_fff">
                            Dec 31,2017
                        </Link>
                        <div className=""><a href="single.html" className="fh5co_good_font"> After all is said and done, more is said than done </a></div>
                    </div>
                </div>
            </Col>
            <Col md={6} className="p-0">
                <Row>
                    {data.map((item, i) => (
                        <Col md={6} className="p-0">
                            <div className="fh5co_suceefh5co_height_2" >
                                <ImageConponent image={SideImage} />
                                <div className="fh5co_suceefh5co_height_position_absolute"></div>
                                <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                                    <Link className="color_fff">
                                        Dec 31,2017
                                    </Link>
                                    <div className=""><a href="single.html" className="fh5co_good_font_2"> After all is said and done, more is said than done </a></div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}

export default HomeTopSection