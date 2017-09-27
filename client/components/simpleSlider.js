import React, { Component } from "react"
import Slider from "react-slick"

class SimpleSlider extends Component {
  render () {
    let settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <Slider {...settings}>
        <div><img src='http://placekitten.com/g/400/200' /></div>
        <div><h3>2</h3></div>
      </Slider>
    );
  }
}
export default SimpleSlider;