import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NewsListCard from '../card/NewsListCard'
import Popular from '../mostpopular'

const NewsList = ({ news, most = [] }) => {
    const history = useNavigate();
    return (
        <Row>
            <Col md={10} className="mx-auto">
                <div className="trendingNews">
                    <Row>
                        <Col md={8}>
                            <h2>News</h2>
                            {news?.map((article, i) => {
                                if (i <= 8) {
                                    return <NewsListCard article={article} key={i} />
                                }
                            }
                            )}
                        </Col>

                        <Col md={3}>
                            <h2>Most Popular</h2>
                            {most.map((article, i) => {
                                if (i <= 8) {
                                    return <Popular key={i} article={article} />
                                }
                            })}
                        </Col>
                    </Row>

                    <Row className="animate-box">
                        <Col className="text-center pb-4 pt-4">
                            <a onClick={() => history('/newscred')} className="btn_mange_pagging">View More ... </a>
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>
    )
}

export default NewsList