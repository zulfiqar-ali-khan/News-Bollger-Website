import React from 'react'
import { Row, Col } from 'react-bootstrap'
import SliderComponent from '../slider'
import { SideImage } from '../../constants'
import TrendingCard from '../card/TrendingCard'

const TrendingSection = ({ title }) => {
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
        {
            date: "Dec 31,2017",
            text: "After all is said and done, more is said than done",
            image: SideImage
        },

    ];


    return (
        <Row>
            <Col md={10} className="mx-auto">
                <div className="trendingNews">
                    <h2>{title}</h2>
                    <SliderComponent data={data} />
                </div>
            </Col>
        </Row>
    )
}

export default TrendingSection