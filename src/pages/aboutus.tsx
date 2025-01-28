import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const aboutus = () => {
  return (
    <>
      <Box sx={{ paddingBottom: {sm:'120px',xs:"25px"} }}>
        <Container maxWidth='lg'>
           <Typography
                      sx={{
                        fontSize: { sm: '50px', xs: '25px' },
                        lineHeight: '60px',
                        fontWeight: '400',
                        fontFamily: 'Montserrat',
                        textAlign: 'center',
                        color: '#000',
                        paddingBottom: {sm:'120px',xs:"25px"} ,
                        paddingLeft:{xs:"35px",sm:"0px"}
                      }}
                    >
                      About  <span style={{ fontWeight: '700' }}>Us</span>
                    </Typography>
                    <Typography>
                    AI Writing Tool is a website that provides users with a powerful and efficient tool for automatically creating unique content. The tool is powered by advanced AI technology that can quickly and accurately generate high-quality written content. With AI Writing Tool, users can quickly create content for a variety of purposes, including blog posts, website content, white papers, and more.
                    </Typography>
        </Container>
      </Box>
    </>
  )
}

export default aboutus


