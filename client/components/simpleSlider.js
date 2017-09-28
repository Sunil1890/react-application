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
      <div className="slider_margin">
      <Slider {...settings}>
        <div><img src='https://static.pexels.com/photos/248797/pexels-photo-248797.jpeg' /></div>
        <div><img src="https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg" /></div>
      </Slider>
      </div>
    );
  }
}
export default SimpleSlider;