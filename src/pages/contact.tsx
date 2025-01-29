import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import '../pages/aboutus.module.css'
const aboutus = () => {
  return (
    <>
      <Box sx={{ paddingBottom: {sm:'70px',xs:"25px"},}}>
        <Container maxWidth='lg'>
             <Typography
                      sx={{
                        fontSize: { sm: '50px', xs: '30px' },
                        lineHeight: '60px',
                        fontWeight: '600',
                        fontFamily: 'Montserrat',
                        textAlign: 'center',
                        color: '#000',
                        paddingBottom: {sm:'120px',xs:"25px"} ,
                        paddingLeft:{xs:"0px",sm:"0px"},
                        paddingTop:{sm:"60px",xs:"0px"}
                      }}
                    >
                      Contact  
                      <span style={{ fontWeight: '600', backgroundImage: 'linear-gradient(to right, #603BFC , #FF6835 )',
                WebkitBackgroundClip: 'text',
                color: 'transparent', }}> Us</span>
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    <span style={{marginBottom:"15px!important",fontSize:"22px",fontWeight:"600"}}> Helpline</span> <br />
                    <span style={{paddingTop:"10px"}}> Our helpline is open on all days from 10:00 AM to 6:00 PM.</span>
                    
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    <span style={{marginBottom:"15px!important",fontSize:"22px",fontWeight:"600"}}> Call us: 01234 556789</span> <br />
                    <span style={{paddingTop:"10px"}}> Mail us: support@example.com</span>
                    
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    <span style={{marginBottom:"15px!important",fontSize:"22px",fontWeight:"600"}}> Contact us please</span> <br />
                    <span style={{paddingTop:"10px"}}> If you did not find the answer to your question or problem, please get in touch with us via email and we will respond to your message as soon as possible.</span>
                    
                    </Typography>
                    
        </Container>
      </Box>
    </>
  )
}

export default aboutus


