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
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
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