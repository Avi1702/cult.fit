import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Slider from "react-slick";
import { Box } from "@mui/material";
<<<<<<< HEAD
<<<<<<< HEAD



=======
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        display: "block",
        position: "absolute",
        right: "100px",
        top: "40px",
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon
        sx={{ position: "absolute", right: "50px", fontSize: "100px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
>>>>>>> 9f2b111 (.)
=======



>>>>>>> 3cf5de9 (.)

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
<<<<<<< HEAD
<<<<<<< HEAD
 
  
=======
  //   nextArrow: <SampleNextArrow />,
  //       prevArrow: <SamplePrevArrow />,
  appendDots: (dots) => (
    <div
      style={{
        width: "100%",
        textAlign: "left",
        backgroundColor: "#ffffff",
        padding: "2px",
      }}
    >
      <ul style={{ marginTop: "0px" }}> {dots} </ul>
    </div>
  ),
>>>>>>> 9f2b111 (.)
=======
 
  
>>>>>>> 3cf5de9 (.)
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
