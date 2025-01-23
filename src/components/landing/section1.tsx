import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import stars from '../../app/Assets/Imges/star.svg'
import Image from 'next/image'
import laptop from '../../app/Assets/Imges/image.svg'
import Section1css from "../landing/section1.module.css"

const section1 = () => {
  return (
    <>
    <Box sx={{paddingTop:{md:"60px",sm:"30px"}}}>
        <Container maxWidth='lg'>
          <Grid container sx={{display:"flex",justifyContent:{sm:"center",md:"none"},alignItems:{sm:"row-reverse",md:"none"},}}>
            <Grid xs={12} sm={12} md={6} sx={{ paddingLeft:{sm:"45px"},paddingBottom:{xs:"20px"}}}>
                  <Box>
                     <Typography sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",fontFamily:"Montserrat",fontSize:{sm:"18px",xs:"12px"},fontWeight:{sm:"700",xs:"600"},lineHeight:"30px",color:"#168194",backgroundColor:"#0CC0DF33",maxWidth:{sm:"448px",xs:"400px"},padding:{sm:"3px 10px 3px 14px",xs:"3px 0px 3px 14px"},borderRadius:"90px"}} className={Section1css.stars}>
                        <Image src={stars} alt="shining-stars" style={{display:"inline-block",paddingRight:"8px",width:"32px",height:"32px"}} className={Section1css.starsBackground} />
                        Create quality content in under a minute
                     </Typography>
                     <Typography sx={{fontSize:{sm:"50px",xs:"24px"},fontFamily:"Montserrat",paddingTop:{sm:"20px",xs:"15px"},fontWeight:"400",lineHeight:{sm:"60px",xs:"35px"}}}>
                     Verbilab Generates <span style={{fontWeight:"700",color:"#000000"}}>Compelling Human</span> 
                     </Typography>
                     <Typography
                   sx={{
                    paddingTop:{sm:"20px",xs:"15px"},
    fontWeight: "700",
    fontSize: {sm:"44px",xs:"24px"},
    fontFamily: "Montserrat",
    backgroundImage: "linear-gradient(to right, #F58244, #C75B85,#3C3174,#5CF1D0)", // Gradient applied
    WebkitBackgroundClip: "text", // Clip the background to the text
    color: "transparent", // Set text color to transparent to show gradient
  }}       
>
  Content Writing
                    </Typography>
                    <Typography sx={{paddingTop:{sm:"20px",xs:"15px"},fontSize:{sm:"18px",xs:"16px"},fontWeight:"400",fontFamily:"Montserrat",lineHeight:"30px",color:"#000"}}>
                    Verbilab is here to help you create high-quality <br className={Section1css.break} /> content in just a few seconds.
                    </Typography>
                      
                      <Box sx={{paddingTop:"20px"}}>

                    <Button variant='contained' sx={{fontSize:{sm:"16px",xs:"14px"},fontWeight:"600",lineHeight:"19.5px",color:"#000",backgroundColor:"#D7F200",padding:"10px 28px",boxShadow:"none",borderRadius:"100px",fontFamily:"Montserrat"}} >
                    Get Started
                    </Button>
                      </Box>


                  </Box>
            </Grid>
            <Grid xs={12} sm={12} md={6}>
              <Box sx={{width:{sm:"650px",xs:"360px"},height:{sm:"450px",xs:"250px"},display:{xs:"flex",sm:"block"},visibility:{xs:"block"},alignItems:"flex-start",paddingTop:{xs:"50px",sm:"0px"},overflow:"hidden"}}>
                <Image src={laptop} alt='laptop picture' style={{}} className={Section1css.laptopImage}/>
              </Box>
            </Grid>
            </Grid> 
        </Container>
    </Box>
    </>
  )
}

export default section1
