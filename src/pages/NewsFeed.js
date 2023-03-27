import React, { useState, useEffect } from 'react'
import { Col, Row, Form } from 'react-bootstrap'
import Tags from '../components/tag'
import { AllArticalsNews } from '../constants'
import axios from 'axios'
import NewsFeedCard from '../components/card/NewsFeedCard'

const NewsFeed = () => {

    const [News, setNews] = useState([]);

    useEffect(() => {
        getNews();
    }, [])

    // Get All News
    const getNews = async () => {

        try {
            const { data } = await axios.get(AllArticalsNews);
            if (data && data?.status == "ok") {
                setNews(data?.articles);
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Row>
            <Col md={10} className="mx-auto p-5">
                <Row>
                    <Col md={3}>
                        <Form.Label>Filter By Date</Form.Label>
                        <Form.Control type="date" placeholder="" />
                    </Col>
                    <Col md={6}>

                        <h4>News</h4>
                        <div className='newsfeed'>
                            {News?.map((article, i) => {
                                if (i <= 8) {
                                    return <NewsFeedCard article={article} key={i} />
                                }
                            }
                            )}
                        </div>
                    </Col>
                    <Col md={3}>
                        <h4>FIlter By Tags</h4>
                        <Tags />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default NewsFeed