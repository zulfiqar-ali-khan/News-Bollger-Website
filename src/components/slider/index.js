import React from 'react'
import Slider from 'react-slick';
import ImageComponent from './../image'

const SliderComponent = ({ data = [], show = 4 }) => {
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
                                    <ImageComponent image={item.image} />
                                </div>
                                <div>
                                    <a href="single.html" className="d-block fh5co_small_post_heading"><span className="">{item.text}</span></a>
                                    <div className="c_g">{item.date}</div>
                                </div>
                            </div>
                        </div>
                    )

                } else {
                    return (
                        <div className="item px-2" key={i}>
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
            })}
        </Slider>
    )
}

export default SliderComponent