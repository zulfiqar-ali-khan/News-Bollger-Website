import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsListCard from '../card/NewsListCard'
import Pagenation from '../Pagination'
import Tags from '../tag'

const NewsList = () => {
    return (
        <Row>
            <Col md={10} className="mx-auto">
                <div className="trendingNews">
                    <Row>
                        <Col md={8}>
                            <h2>News</h2>
                            <NewsListCard />
                            <NewsListCard />

                            <NewsListCard />

                            <NewsListCard />
                        </Col>

                        <Col md={3}>
                            <h2>Tags</h2>
                            <Tags />
                        </Col>
                    </Row>

                    <Pagenation />

                </div>
            </Col>
        </Row>
    )
}

export default NewsList