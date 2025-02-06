import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import keywordgen from '../../app/Assets/Imges/copy.svg'
import seo from '../../app/Assets/Imges/seo.svg'
import blog from '../../app/Assets/Imges/blog.svg'
import sociallink from '../../app/Assets/Imges/social.svg'
import dataanylist from '../../app/Assets/Imges/data-analyst.svg'
import presentation from '../../app/Assets/Imges/presentation.svg'
import Image from 'next/image'

const Section4 = () => {
  return (
    <>
      <Box sx={{ padding: { sm: '40px 0', xs: '20px 0' } }}  id='section4'>
        <Container maxWidth="lg">
          <Box sx={{ paddingBottom: '60px' }}>
            <Typography
              sx={{
                fontSize: { sm: '50px', xs: '25px' },
                lineHeight: '60px',
                fontWeight: '400',
                fontFamily: 'Montserrat',
                textAlign: 'center',
                color: '#000',
              }}
            >
              Use <span style={{ fontWeight: '700' }}>Cases</span>
            </Typography>
            <Typography
              sx={{
                paddingTop: '10px',
                textAlign: 'center',
                fontFamily: 'Montserrat',
                fontSize: { sm: '16px', xs: '14px' },
                lineHeight: { sm: '30px', xs: '20px' },
              }}
            >
              Our templates are designed to help you quickly and easily create high-quality content.
            </Typography>
          </Box>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#EBFFF9',
                  }}
                >
                  <Image src={keywordgen} alt="keywordgen" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    Keyword Generator
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    Utilizes natural language processing to generate engaging and relevant blog titles.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#F4E9FF',
                    borderRadius: '13px',
                  }}
                >
                  <Image src={seo} alt="seo" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    SEO Optimizer
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    Writes effective cover letters by analyzing job descriptions, personalizing content, and providing feedback for enhancement.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#CEFFCB',
                    borderRadius: '13px',
                  }}
                >
                  <Image src={blog} alt="blog" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    Blog
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    Generates descriptive text for videos, enhancing accessibility and improving searchability.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#E7F0FF',
                    borderRadius: '13px',
                  }}
                >
                  <Image src={sociallink} alt="sociallink" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    Instagram/Facebook
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    AI-powered tool that creates high-quality articles based on user specifications and keywords.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#FFF0D4',
                    borderRadius: '13px',
                  }}
                >
                  <Image src={dataanylist} alt="dataanylist" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    Data Analyst
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    Analyzes and profiles social media bios to provide insights on personality, interests, and behaviors.
                  </Typography>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  boxShadow: 'none',
                  background: 'transparent',
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                }}
              >
                <Box
                  sx={{
                    padding: '10px',
                    width: '66px',
                    height: '66px',
                    backgroundColor: '#EEFF8D',
                    borderRadius: '13px',
                  }}
                >
                  <Image src={presentation} alt="presentation" />
                </Box>
                <Box sx={{ paddingLeft: '25px' }}>
                  <Typography
                    sx={{
                      fontSize: '21px',
                      fontWeight: '700',
                      fontFamily: 'Montserrat',
                      lineHeight: '30px',
                      color: '#000',
                      paddingBottom: '20px',
                    }}
                  >
                    Presentation
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '300px',
                      fontSize: '16px',
                      fontWeight: '400',
                      fontFamily: 'Montserrat',
                      color: '#212529',
                      lineHeight: '30px',
                    }}
                  >
                    An AI-powered tool that generates new variants of existing products, designs, or content.
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Section4;
