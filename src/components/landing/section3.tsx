import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CardMedia from '@mui/material/CardMedia';
import leftsidegirl from '../../app/Assets/Imges/use-case.svg'
import righsidegirl from '../../app/Assets/Imges/input-context.svg'
import rightsideboy from '../../app/Assets/Imges/generate-result.svg'
import Image from 'next/image';
import '../landing/section3.module.css'

const section3 = () => {
  return (
   <>
   <Box sx={{padding:{sm:"40px 0px",xs:"20px 0px"}}}>
    <Container maxWidth='lg'>
      <Box sx={{paddingBottom:"10px"}}>
    <Typography sx={{fontSize:{sm:"50px",xs:"25px"},lineHeight:"60px",fontWeight:"400",fontFamily:"Montserrat",textAlign:"center",color:"#000"}}>
    How It <span style={{fontWeight:"700"}}> Works?</span>
    </Typography>
    <Typography sx={{paddingTop:"10px",textAlign:"center",fontFamily:"Montserrat",fontSize:{sm:"16px",xs:"14px"},lineHeight:{sm:"30px",xs:"20px"}}}>
    Use these step to generate high-quality content.
    </Typography>
    </Box>
    <Grid container>
        <Grid xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 315,boxShadow:"none",background:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
        <Box sx={{paddingBottom:"0px"}}>
         <Image src={leftsidegirl} alt='leftside'/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <Box sx={{width:"44px",height:"44px",borderRadius:"50%",backgroundColor:"#D7F200",color:"#000",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Inter",fontWeight:"600",fontSize:"16px",lineHeight:"30px"}}>
           01
           </Box>
           <Typography sx={{paddingTop:"15px",fontSize:"21px",fontFamily:"Montserrat",fontWeight:"700",lineHeight:"20px",color:"#000"}}>
           Select use-case
           </Typography>
           <Typography sx={{paddingTop:"15px",textAlign:"center",maxWidth:"270px",fontFamily:"Montserrat",fontSize:"16px",lineHeight:"30px",color:"#000",fontWeight:"400"}}>
           Our content creation template library offers a variety of use case for all your needs.
           </Typography>
        </Box>
      </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 315,boxShadow:"none",background:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
        <Box sx={{paddingBottom:"0px",display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Image src={leftsidegirl} alt='righsidegirl'/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <Box sx={{width:"44px",height:"44px",borderRadius:"50%",backgroundColor:"#D7F200",color:"#000",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Inter",fontWeight:"600",fontSize:"16px",lineHeight:"30px"}}>
           02
           </Box>
           <Typography sx={{paddingTop:"15px",fontSize:"21px",fontFamily:"Montserrat",fontWeight:"700",lineHeight:"20px",color:"#000"}}>
           Input some context
           </Typography>
           <Typography sx={{paddingTop:"15px",textAlign:"center",maxWidth:"270px",fontFamily:"Montserrat",fontSize:"16px",lineHeight:"30px",color:"#000",fontWeight:"400"}}>
           Guidance to the AI by inputting relevant information to generate text based on the given context.
           </Typography>
        </Box>
      </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: 315,boxShadow:"none",background:"transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" }}>
        <Box sx={{paddingBottom:"10px"}}>
         <Image src={rightsideboy} alt='rightsideboy'/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
           <Box sx={{width:"44px",height:"44px",borderRadius:"50%",backgroundColor:"#D7F200",color:"#000",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"Inter",fontWeight:"600",fontSize:"16px",lineHeight:"30px"}}>
           03
           </Box>
           <Typography sx={{paddingTop:"15px",fontSize:"21px",fontFamily:"Montserrat",fontWeight:"700",lineHeight:"20px",color:"#000"}}>
           Generate results
           </Typography>
           <Typography sx={{paddingTop:"15px",textAlign:"center",maxWidth:"300px",fontFamily:"Montserrat",fontSize:"16px",lineHeight:"30px",color:"#000",fontWeight:"400"}}>
           Get plagiarism-free high-quality content that tailored to your needs and can be used on any platform
           </Typography>
        </Box>
      </Card>
        </Grid>
    </Grid>
     
    </Container>
    </Box>
   </>
  )
}

export default section3
