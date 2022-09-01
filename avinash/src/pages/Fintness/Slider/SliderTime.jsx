import React from "react";
import Slider from "react-slick";

export default function SliderTime() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="silder_div">
        <h1>EXTRA 3 MONTH EXTENSION </h1>
        <h4>on cultpass PRO</h4>
      </div>

      <div>
        <h1>EXTRA 3 MONTH EXTENSION </h1>
        <h4>on cultpass PRO</h4>
      </div>

      <div>
        <h1>EXTRA 3 MONTH EXTENSION </h1>
        <h4>on cultpass PRO</h4>
      </div>

       
    </Slider>
  );
}