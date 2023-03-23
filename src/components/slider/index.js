import moment from 'moment';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import ImageComponent from './../image'

const SliderComponent = ({ data = [], show = 4 }) => {
    const history = useNavigate();
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: show,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((item, i) => {
                if (show === 3) {
                    return (
                        <div className="item px-2" key={i}>
                            <div className="fh5co_hover_news_img">
                                <div className="fh5co_news_img">
                                    <ImageComponent image={item?.urlToImage} />
                                </div>
                                <div>
                                    <a onClick={() => history('/detail', { state: { article: item } })} className="d-block fh5co_small_post_heading"><span className="">{item?.title}</span></a>
                                    <div className="c_g"> {moment(item?.publishedAt).format("MMM Do YY")}</div>
                                </div>
                            </div>
                        </div>
                    )

                } else {
                    return (
                        <div className="item px-2" key={i}>
                            <div className="fh5co_latest_trading_img_position_relative">
                                <div className="fh5co_latest_trading_img">
                                    <ImageComponent image={item?.urlToImage} />
                                </div>
                                <div className="fh5co_latest_trading_img_position_absolute"></div>
                                <div className="fh5co_latest_trading_img_position_absolute_1">
                                    <a onClick={() => history('/detail', { state: { article: item } })} className="text-white"> {item?.title} </a>
                                    <div className="fh5co_latest_trading_date_and_name_color"> {item?.author} - {moment(item?.publishedAt).format("MMM Do YY")}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </Slider>
    )
}

export default SliderComponent