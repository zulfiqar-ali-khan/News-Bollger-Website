import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from './../image'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'



const NewsListCard = ({ article }) => {
    const history = useNavigate();

    return (
        <Row className=" pb-4">
            <Col md={5} >
                <div className="fh5co_hover_news_img">
                    <div className="fh5co_news_img">
                        <ImageComponent image={article?.urlToImage} />
                    </div>
                </div>
            </Col>
            <Col md={7} className="animate-box">
                <a onClick={() => history('/detail', { state: { article } })} className="fh5co_magna py-2">{article?.title}</a> <a className="fh5co_mini_time py-3"> {article?.author} -
                    {moment(article?.publishedAt).format("MMM Do YY")} </a>
                <div className="fh5co_consectetur">
                    {article?.content}
                </div>
            </Col>
        </Row>
    )
}

export default NewsListCard