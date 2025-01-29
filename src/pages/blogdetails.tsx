import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import '../pages/aboutus.module.css'
const Blogdetails = () => {
  return (
    <>
      <Box sx={{ paddingBottom: {sm:'70px',xs:"25px"},}}>
        <Container maxWidth='lg'>
          <Typography sx={{textAlign:"center",paddingTop:{sm:"30px",xs:"0px"},fontFamily:"Poppins",fontWeight:"400"}}>
          Jul 03, 2024
          </Typography>
             <Typography
                      sx={{
                        fontSize: { sm: '50px', xs: '30px' },
                        lineHeight: '60px',
                        fontWeight: '600',
                        fontFamily: 'Montserrat',
                        textAlign: 'center',
                        color: '#000',
                        paddingBottom: {sm:'80px',xs:"25px"} ,
                        paddingLeft:{xs:"0px",sm:"0px"},
                        paddingTop:{sm:"20px",xs:"0px"}
                      }}
                    >
                     OpenAI acquires <span style={{ fontWeight: '600', backgroundImage: 'linear-gradient(to right, #603BFC , #FF6835 )',
                WebkitBackgroundClip: 'text',
                color: 'transparent', }}> Rockset</span>
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"700" }}>
                    Enhancing our retrieval infrastructure to make AI more helpful
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    AI has the opportunity to transform how people and organizations leverage their own data. That’s why we’ve acquired Rockset, a leading real-time analytics database that provides world-class data indexing and querying capabilities.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    Rockset enables users, developers, and enterprises to better leverage their own data and access real-time information as they use AI products and build more intelligent applications. 
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    We will integrate Rockset’s technology to power our retrieval infrastructure across products, and members of Rockset’s world-class team will join OpenAI.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    “Rockset’s infrastructure empowers companies to transform their data into actionable intelligence. We’re excited to bring these benefits to our customers by integrating Rockset’s foundation into OpenAI products,” said Brad Lightcap, OpenAI COO.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                     
                    “We’re excited to be joining OpenAI to empower users, enterprises and developers to fully leverage their data by bringing powerful retrieval to AI,” said Venkat Venkataramani, CEO of Rockset.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                     
                    Stay tuned for more updates as we get to work integrating Rockset’s capabilities.
                     </Typography>

        </Container>
      </Box>
    </>
  )
}

export default Blogdetails


