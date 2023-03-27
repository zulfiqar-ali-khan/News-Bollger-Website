import moment from 'moment'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ImageComponent from './../image'
import { useNavigate } from 'react-router-dom'

const Popular = ({ article }) => {

    const history = useNavigate();

    return (
        <>
            <Row className="pb-3" >
                <Col md={4} sm={4}>
                    <div className="imgDiv">
                        <ImageComponent image={article?.urlToImage} />
                    </div>
                </Col>
                <Col md={8} sm={8} className="paddding">
                    <div className="most_fh5co_treding_font" onClick={() => history('/detail', { state: { article } })}>{article?.title?.slice(0, 25)}</div>
                    <div className="most_fh5co_treding_font_123">{moment(article?.publishedAt).format("MMM Do YY")}</div>
                </Col>
            </Row>
        </>
    )
}

export default Popular