import moment from 'moment'
import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ImageConponent from '../image'


const HomeTopSection = ({ TopHeadline }) => {
    const history = useNavigate();
    return (
        <Row>
            <Col md={6}>
                <div className="fh5co_suceefh5co_height" >

                    <ImageConponent image={TopHeadline[0]?.urlToImage} />
                    <div className="fh5co_suceefh5co_height_position_absolute"></div>
                    <div className="fh5co_suceefh5co_height_position_absolute_font">
                        <Link className="color_fff">
                            {moment(TopHeadline[0]?.publishedAt).format("MMM Do YY")}
                        </Link>
                        <div className="" onClick={() => history('/detail', { state: { article: TopHeadline[0] } })}>{TopHeadline[0]?.title}</div>
                    </div>
                </div>
            </Col>
            <Col md={6} className="p-0">
                <Row>
                    {TopHeadline?.map((item, i) => {
                        if (item?.urlToImage != null && i <= 4 && i != 0) {
                            return <Col md={6} className="p-0">
                                <div className="fh5co_suceefh5co_height_2" >
                                    <ImageConponent image={item?.urlToImage} />
                                    <div className="fh5co_suceefh5co_height_position_absolute"></div>
                                    <div className="fh5co_suceefh5co_height_position_absolute_font_2">
                                        <a className="color_fff" onClick={() => history('/detail', { state: { article: TopHeadline[0] } })}>
                                            {moment(item?.publishedAt).format("MMM Do YY")}
                                        </a>
                                        <div onClick={() => history('/detail', { state: { article: TopHeadline[0] } })}>{item?.title}</div>
                                    </div>
                                </div>
                            </Col>
                        }
                    })}
                </Row>
            </Col>
        </Row>
    )
}

export default HomeTopSection