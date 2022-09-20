import { Box, Link, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer = () => {
  return (
    <Box variant="div" sx={{ display: "flex", padding: "100px 80px", justifyContent:"space-between",alignItems:"center" }}>
      <Box sx={{width:"400px"}}>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
          alt="cult logo"
          style={{width:"150px"}}
        />
        <br />
        <Typography variant="p" component="p"  sx={{color:"#bfbfbf",marginTop:'10px', letterSpacing:"1.3px",lineHeight:"25px"}}>
          At cult.fit, we make group workouts fun, daily food healthy & tasty,
          mental fitness easy with yoga & meditation, Medical & lifestyle care
          hassle-free.#BeBetterEveryDay
        </Typography>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column", width:"170px", color:"rgb(169,169,169)", gap:"40px" }}>
        <Link href="https://business.cult.fit/" sx={{color:"rgb(169,169,169)"}} underline="none">cult.fit for business</Link>
        <Link href="https://business.cult.fit/franchise/cult" sx={{color:"rgb(169,169,169)"}} underline="none">
          cult.fit franchise
        </Link>
        <Link href="https://business.cult.fit/franchise/cult" sx={{color:"rgb(169,169,169)"}} underline="none">
          corporate partnerships
        </Link>
        <Link href="https://business.cult.fit/franchise/cult-pass" sx={{color:"rgb(169,169,169)"}} underline="none">
          cult pass network
        </Link>
        <Link href="https://static.cult.fit/tnc_business.html" sx={{color:"rgb(169,169,169)"}} underline="none">
          t&c for business
        </Link>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column", width:"75px",gap:"50px"  }}>
        <Link href="https://partner.cult.fit/" sx={{color:"rgb(169,169,169)"}} underline="none">partner.fit</Link>
        <Link href="https://blog.cult.fit/" sx={{color:"rgb(169,169,169)"}} underline="none">blogs</Link>
        <Link href="https://www.cult.fit/security" sx={{color:"rgb(169,169,169)"}} underline="none">security</Link>
        <Link href="https://www.cult.fit/careers" sx={{color:"rgb(169,169,169)"}} underline="none">careers</Link>
      </Box>
      <Box sx={{display:"flex", flexDirection:"column",width:"140px",gap:"50px"  }}>
        <Link href="https://www.cult.fit/contactUs" sx={{color:"rgb(169,169,169)"}} underline="none">contact us</Link>
        <Link href="https://static.cult.fit/privacy_cult.html" sx={{color:"rgb(169,169,169)"}} underline="none">
          privacy policy
        </Link>
        <Link href="https://blog.cult.fit/fitness-assessment/bmi-calculator" sx={{color:"rgb(169,169,169)"}} underline="none">
          cult bmi calculator
        </Link>
        <Link href="https://static.cult.fit/terms_cult.html" sx={{color:"rgb(169,169,169)"}} underline="none">
          terms & conditions
        </Link>
      </Box>
      <Box variant="div" sx={{textAlign:"right"}}>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/app-store-dark-card-2.png"
          alt="app store"
          style={{width:"200px", cursor: "pointer"}}
        /><br/>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_178,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/download-app/play-store-dark-card-2.png"
          alt="google play"
          style={{width:"200px", marginTop:"30px", cursor: "pointer"}}
        />
        <Box variant="div" sx={{ display: "flex", gap: "15px", marginTop:"40px" }}>
          <YouTubeIcon
            sx={{
              backgroundColor: "rgb(117,117,117)",
              borderRadius: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
          />
          <FacebookIcon
            sx={{
              backgroundColor: "rgb(117,117,117)",
              borderRadius: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
          />
          <TwitterIcon
            sx={{
              backgroundColor: "rgb(117,117,117)",
              borderRadius: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
          />
          <InstagramIcon
            sx={{
              backgroundColor: "rgb(117,117,117)",
              borderRadius: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
          />
          <LinkedInIcon
            sx={{
              backgroundColor: "rgb(117,117,117)",
              borderRadius: "30px",
              padding: "5px",
              cursor: "pointer"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};