import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AllArticalsNews } from '../constants'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import NewsListCard from '../components/card/NewsListCard'
import Tags from '../components/tag'
import NotFound from '../components/notfound'


const Newscred = () => {
    const history = useNavigate();
    const [News, setNews] = useState([]);
    const [type, setType] = useState('');
    const [load, setLoad] = useState(true);

    useEffect(() => {
        getNews();
    }, [])


    // Get All News
    const getNews = async () => {
        setLoad(true)
        try {
            const { data } = await axios.get(AllArticalsNews);
            if (data && data?.status == "ok") {
                setLoad(false)
                setNews(data?.articles);
            }
        } catch (error) {
            setLoad(false)
            console.log(error);

        }
    }

    const getNewsView = () => {
        return News?.map((article, i) => {
            if (i <= 8) {
                return <NewsListCard article={article} key={i} />
            }
        })
    }


    useEffect(() => {
        categoryNews();
        getNewsView()
    }, [type])


    const categoryNews = async () => {
        setLoad(true)
        try {
            const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${type}&apiKey=09a0293457854ce589a76327d56b3ea2`);
            if (data && data?.status == "ok") {
                setLoad(false)
                setNews(data?.articles);
            }
        } catch (error) {
            setLoad(false)
            console.log(error);

        }
    }



    return (
        <>
            <Row>
                <Col md={10} className="mx-auto">
                    <div className="trendingNews">
                        <Row>
                            <Col md={8}>
                                <h2>News</h2>
                                {load ? <Spinner animation="border" /> : getNewsView()}
                                {News?.length === 0 && !load ? <NotFound /> : ''}
                            </Col>

                            <Col md={3}>
                                <h2>Tags</h2>
                                <Tags setType={setType} />
                            </Col>
                        </Row>
                        {/* {News?.length > 0 &&
                            <Row className="animate-box">
                                <Col className="text-center pb-4 pt-4">
                                    <a onClick={() => history('/newscred')} className="btn_mange_pagging">View More ... </a>
                                </Col>
                            </Row>
                        } */}


                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Newscred