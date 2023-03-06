import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import './Carousel.css';
import Slider from "react-slick";


export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        customPaging: i => (
          <div className="dots"></div>
        )
      };
      return (
        <div className="carousel">
          <Slider {...settings}>
           {this.props.children}
          </Slider>
        </div>
      );
    }
  }