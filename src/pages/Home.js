import React, { useEffect, useState } from 'react'
import HomeTopSection from '../components/section/HomeTopSection'
import TrendingSection from '../components/section/TrendingSection'
import NewsList from '../components/section/NewsList'
import axios from 'axios'
import { AllArticalsNews, TopHeadlines, TredingApi } from '../constants'


const Home = () => {

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


            <NewsList news={News} />
        </>
    )
}

export default Home