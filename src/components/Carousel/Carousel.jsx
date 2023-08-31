import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import './Carousel.css';
import Slider from "react-slick";

const SimpleSlider = ({ children }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    initialSlide: 1,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    customPaging: i => (
      <div className="dots"></div>
    ),
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      }
    ]
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {children}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
