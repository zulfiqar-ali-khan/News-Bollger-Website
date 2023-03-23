import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SliderComponent from '../slider'

const TrendingSection = ({ title, news }) => {

    return (
        <Row>
            <Col md={10} className="mx-auto">
                <div className="trendingNews">
                    <h2>{title}</h2>
                    <SliderComponent data={news} />
                </div>
            </Col>
        </Row>
    )
}

export default TrendingSection