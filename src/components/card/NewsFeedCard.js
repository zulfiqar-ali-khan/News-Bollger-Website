import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from './../image'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'



const NewsFeedCard = ({ article }) => {
    const history = useNavigate();

    return (
        <Row className=" pb-4">
            <Col md={12}>
                <a className="fh5co_mini_time"> {article?.author} -{moment(article?.publishedAt).format("MMM Do YY")}</a>
                <ImageComponent image={article?.urlToImage} className="img-fluid" />
            </Col>
            <Col md={12} className="animate-box">

                <a onClick={() => history('/detail', { state: { article } })} className="fh5co_magna">{article?.title}</a>
                <div className="fh5co_consectetur">
                    {article?.content}
                </div>
            </Col>
        </Row>
    )
}

export default NewsFeedCard