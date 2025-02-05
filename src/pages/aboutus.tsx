import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import '../pages/aboutus.module.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
const aboutus = () => {
  return (
    <>
    <Header/>
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
                      About  <span style={{ fontWeight: '600', backgroundImage: 'linear-gradient(to right, #603BFC , #FF6835 )',
                WebkitBackgroundClip: 'text',
                color: 'transparent', }}>Us</span>
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    AI Writing Tool is a website that provides users with a powerful and efficient tool for automatically creating unique content. The tool is powered by advanced AI technology that can quickly and accurately generate high-quality written content. With AI Writing Tool, users can quickly create content for a variety of purposes, including blog posts, website content, white papers, and more.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    We are excited to introduce our new AI Writing Tool website. Our AI Writing Tool is a powerful and effective way to create unique content for your website. Our AI Writing Tool utilizes advanced AI technology to generate high quality content that is perfect for your needs..
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    Our AI Writing Tool is an easy-to-use platform that allows you to create original content in minutes. Our AI Writing Tool provides you with unlimited access to a variety of different topics and writing styles. With the click of a button, you can create engaging, informative content for your website.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                    Additionally, our AI Writing Tool has a built-in editor that allows you to customize the content to your individual needs. Our AI Writing Tool is a powerful tool that allows you to create unique content quickly and easily.
                    </Typography>
                    <Typography sx={{paddingLeft:{sm:"50px!important",xs:"none"},fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",lineHeight:"24px",paddingBottom:"30px",fontWeight:"400" }}>
                     
                    If you are looking for an effective way to create high-quality content for your website, then our AI Writing Tool is the perfect solution. We look forward to working with you to provide you with the best AI Writing Tool available.
                    </Typography>

        </Container>
      </Box>
      <Footer/>
    </>
  )
}

export default aboutus


