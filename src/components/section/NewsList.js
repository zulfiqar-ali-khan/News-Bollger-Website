import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsListCard from '../card/NewsListCard'
import Pagenation from '../Pagination'
import Tags from '../tag'

const NewsList = ({ news }) => {
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
                            <h2>Tags</h2>
                            <Tags />
                        </Col>
                    </Row>

                    <Row className="animate-box">
                        <Col className="text-center pb-4 pt-4">
                            <a href="#" className="btn_mange_pagging">View More ... </a>
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>
    )
}

export default NewsList