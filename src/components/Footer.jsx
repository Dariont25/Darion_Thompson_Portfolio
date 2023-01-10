import { Box, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-scroll";



const Footer = () => {
  return( 
  <div style ={{}}>
  <Box 
    sx={{
       
      borderTop: "1px solid #7B89A8",   
      justifyContent: "space-around",
      display:"flex",
      
      
      
      
    }}>
    <Box sx ={{width:"100px",flexDirection:"column", display:"flex"}}>
      <Typography 
      variant = "body1" 
      sx={{color: "#7B89A8", fontWeight: "bold", mb: 2, }}
      >
        PAGES
      </Typography>
      <Link to = "home" 
      className="link" 
      smooth 
      style ={{color: "white", margin: "0.5rem 0", cursor: "pointer" }}
      >
        Home
      </Link>

      <Link to = "experience" 
      className="link" 
      smooth 
      style ={{color: "white", margin: "0.5rem 0", cursor: "pointer" }}
      >
        Projects
      </Link>

      <Link to = "about" 
      className="link" 
      smooth 
      style ={{color: "white", margin: "0.5rem 0", cursor: "pointer" }}
      >
        About
      </Link>

    </Box>
    <Box sx ={{flexDirection:"column"}}>
      <Typography variant ="body1"
      sx = {{color: "#7B89A8", fontWeight: "bold", mb:2}}
      >
        SOCIAL
      </Typography>
      <Box sx ={{display :"flex", alignItems: "center", cursor:"pointer"}}>
      <a href="https://github.com/Dariont25"><GitHubIcon sx={{mr:2, color: "white"}}/></a>
        <Typography variant="body2" sx={{color: "white", my:1}}>
          GitHub
        </Typography>
      </Box>

      <Box sx ={{display :"flex", alignItems: "center", cursor:"pointer"}}>
        <a href ="https://www.linkedin.com/in/darion-thompson25/"><LinkedInIcon sx={{mr:2, color: "white"}}/></a>
        <Typography variant="body2" sx={{color: "white", my:1}}>
          LinkedIn
        </Typography>
      </Box>

      <Box sx ={{display :"flex", alignItems: "center", cursor:"pointer"}}>
        <EmailIcon sx={{mr:2, color: "white"}}/>
        <Typography variant="body2" sx={{color: "white", my:1}}>
          Contact Me
        </Typography>
      </Box>

    </Box>
  </Box>
  </div>
  );
};

export default Footer;
