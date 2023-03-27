import React, { useEffect, useState } from 'react'
import HomeTopSection from '../components/section/HomeTopSection'
import TrendingSection from '../components/section/TrendingSection'
import axios from 'axios'
import { AllArticalsNews, TopHeadlines, TredingApi } from '../constants'
import { Col, Row } from 'react-bootstrap'
import NewsListCard from '../components/card/NewsListCard'
import Popular from '../components/mostpopular'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const history = useNavigate();
    const [TopHeadline, setTopHeadline] = useState([]);
    const [News, setNews] = useState([]);
    const [Treding, setTrending] = useState([]);


    useEffect(() => {
        getTopHeadline();
        getNews();
        getTrendingNews();
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

    // Get TopHeadlines 
    const getTopHeadline = async () => {
        try {
            const { data } = await axios.get(TopHeadlines);
            if (data && data?.status == "ok") {
                setTopHeadline(data?.articles);
            }
        } catch (error) {
            console.log(error);

        }
    }

    // Get All Trending News
    const getTrendingNews = async () => {
        try {
            const { data } = await axios.get(TredingApi);
            if (data && data?.status == "ok") {
                setTrending(data?.articles);
            }
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <>
            <HomeTopSection TopHeadline={TopHeadline} />

            <TrendingSection title="Trending" items={4} news={Treding} />

            <TrendingSection title="News" items={3} news={News} />




            <Row>
                <Col md={10} className="mx-auto">
                    <div className="trendingNews">
                        <Row>
                            <Col md={8}>
                                <h2>News</h2>
                                {News?.map((article, i) => {
                                    if (i <= 8) {
                                        return <NewsListCard article={article} key={i} />
                                    }
                                }
                                )}
                            </Col>

                            <Col md={3}>
                                <h2>Most Popular</h2>
                                {TopHeadline.map((article, i) => {
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



        </>
    )
}

export default Home