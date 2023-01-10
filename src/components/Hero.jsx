import { Box, Button, styled, Typography } from "@mui/material";

import { Link } from "react-scroll";
import reactImg from "../media/florida-gators-logo-png-transparent.png";


import React from "react";
import { borderRadius } from "@mui/system";

const Hero = () => {
const CustomButton = styled(Button)(({theme}) => ({
  border: "3px solid transparent",
  backgroundColor: "#00C7FF",
  color: "white",
  width: "20%",
  borderRadius: "25px",
  "&:hover":{
    border: "3px solid white",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("md")]:{
    width: "35%",
  },
  [theme.breakpoints.down("sm")]:{
    width: "50%",
  },

}));

const CustomTitle = styled(Typography)(({theme}) => ({
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("md")]:{
    fontSize: "3.5rem",
  },
  [theme.breakpoints.down("sm")]:{
    fontSize: "2.5rem",
  },
}));
  return(
  <Box 
    sx={{mt: 8, mb: 12, p:2, maxWidth: "1200px", mx: "auto"}}
    id="home"
    >
      <CustomTitle sx={{color: "white", textAlign: "Center", mb:2 }} variant="h4">
        I'm Darion Thompson
      </CustomTitle>
      <Typography sx={{color: "white", textAlign: "Center", mb:2 }} variant="h6">
        <span style={{color: "yellow"}}>Biology</span> and <span style={{color: "yellow"}}>Computer Science</span> student
      </Typography>
    <Box
     sx={{
      display:"flex",
      flexDirection: "column",
      alignItems:"center",
      justifyContent: "center",
      gap: "1rem",
     }}
     >
      <Box
      component="img"
      sx={{height:150, width:200, mt:4, mb:4}}
      src={reactImg}
      />
      <CustomButton>Contact Me</CustomButton>
    </Box>
  </Box>
  );
};

export default Hero;
