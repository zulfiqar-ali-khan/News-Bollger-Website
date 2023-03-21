import React from 'react'
import ImageComponent from './../image'

const TrendingCard = ({ item }) => {
    return (
        <div className="item px-2">
            <div className="fh5co_latest_trading_img_position_relative">
                <div className="fh5co_latest_trading_img">
                    <ImageComponent image={item.image} />
                </div>
                <div className="fh5co_latest_trading_img_position_absolute"></div>
                <div className="fh5co_latest_trading_img_position_absolute_1">
                    <a href="single.html" className="text-white"> {item.text} </a>
                    <div className="fh5co_latest_trading_date_and_name_color"> Walter Johson - {item.date}</div>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard