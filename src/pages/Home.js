import React from 'react'
import HomeTopSection from '../components/section/HomeTopSection'
import TrendingSection from '../components/section/TrendingSection'
import NewsList from '../components/section/NewsList'
const Home = () => {
    return (
        <>
            <HomeTopSection />

            <TrendingSection title="Trending" items={4} />

            <TrendingSection title="News" items={3} />


            <NewsList />
        </>
    )
}

export default Home