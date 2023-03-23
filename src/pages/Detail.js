import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import DetailTopSection from '../components/section/DetailTopSection'
import Tags from '../components/tag'

const Detail = () => {
    const location = useLocation();
    const { state: { article } } = location
    return (
        <>
            <DetailTopSection artical={article} />

            <Row>
                <Col md={10} className="mx-auto">
                    <Row>
                        <Col md={8} className="py-5 px-4">

                            <h3>
                                {article?.title}
                            </h3>
                            <p>
                                {article?.content}
                            </p>
                            <p>
                                {article?.description}
                            </p>


                        </Col>
                        <Col md={3} className="py-5 px-4">
                            <h2 className="tags">Tags</h2>
                            <Tags />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Detail