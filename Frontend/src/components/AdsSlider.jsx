import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Slider from "react-slick";
import { Box } from "@mui/material";




const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
 
  
};

export const AdsSlider = () => {
  return (
    <Box variant="div" sx={{marginBottom:"30px"}}>
      <Slider {...settings}>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/74942fb3-e9c8-4df5-a21d-7eab65f036d5.png"
          alt="ads"
        />
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/ff9627a7-a921-4005-8021-f725a73eaeae.png"
          alt="ads"
        />
      </Slider>
    </Box>
  );
};
