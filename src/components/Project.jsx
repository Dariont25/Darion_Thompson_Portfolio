import { Description, Title } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";
import React from "react";


const Project = ({title,description,tags,img,source}) => {
  return <Card sx={{maxWidth: 375, margin:"1rem"}}>
    <CardActionArea>
      <CardMedia component="img" image ={img}/>

      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea> 

    <CardActions sx={{display: "flex", flexDirection: "column"}}>
      <Box sx={{width: "100%", display:"flex", justifyContent:"space-around", mx:"auto", mb: 3}}>
        
        <Button href={source} size="small" style={{backgroundColor:"rgba(0,199,255,255"}} variant="contained">
          GitHub
        </Button>
        
      </Box>
      <Box sx={{width:"100%", display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"1rem", mb:2}}>
        {
          tags.map((tag)=>(
            <Chip label={tag} key ={tag} variant="outlined"/>
          ))
        }

      </Box>
    </CardActions>
  </Card>
    
  
};

export default Project;
