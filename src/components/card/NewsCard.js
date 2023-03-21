import React from 'react'
import ImageComponent from './../image'

const NewsCard = () => {
    return (
        <div className="item px-2" key={i}>
            <div className="fh5co_hover_news_img">
                <div className="fh5co_news_img">
                    <ImageComponent image={item.image} />
                </div>
                <div>
                    <a href="single.html" className="d-block fh5co_small_post_heading"><span className="">{item.text}</span></a>
                    <div className="c_g">{item.date}</div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard