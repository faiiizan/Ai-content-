import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import keywordgen from  '../../app/Assets/Imges/copy.svg'
import seoopt from '../../app/Assets/Imges/seo.svg'
import blog from '../../app/Assets/Imges/blog.svg'
import social from '../../app/Assets/Imges/social.svg'
import dataanylist from '../../app/Assets/Imges/data-analyst.svg'
import presentation from '../../app/Assets/Imges/presentation.svg'
import Automation from '../../app/Assets/Imges/automation.svg'
import Image from 'next/image'
const Section7 = () => {
  
  return (
   <>
   
   <Box sx={{padding:{sm:"40px 0px",xs:"20px 0px 0px 0px"}}}>
        <Container maxWidth='lg'>
        <Typography sx={{textAlign:"center",fontSize:{md:"50px",sm:"40px",xs:"22px"},fontWeight:"400",fontStyle:"Montserrat",lineHeight:{sm:"60px",xs:"35px"},color:"#000000",paddingBottom:"40px"}}>
        Join the <span style={{fontWeight:"700"}}>Creating Content</span>  and <br /> Elevate Your <span style={{fontWeight:"700"}}>Work</span>
        </Typography>
        <Grid container sx={{display:"flex",justifyContent:{sm:"flex-start",xs:"center"},alignItems:"center"}}>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={keywordgen} alt='keywordgen'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center"}}>
              Keywords <br /> Generator
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={seoopt} alt='keywordgen'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center"}}>
              SEO <br />  Optimizer 
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={blog} alt='blog'/>
              </Card>
              <Typography sx={{paddingBottom:"25px",textAlign:"center",paddingTop:"10px"}}>
              Blog
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={social} alt='social'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center"}}>
              Instagram/ <br />Facebook
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={dataanylist} alt='dataanylist'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center"}}>
              Data <br /> Analyst
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={presentation} alt='presentation'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center",paddingBottom:"25px"}}>
              Presentations
              </Typography>
            </Box>
          </Grid>
          <Grid xs={6} sm={4} md={1.6}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",paddingBottom:"20px"}}>
              <Card sx={{padding:"10px",maxWidth:"80px",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"400",lineHeight:"30px",color:"#000"}}>
                <Image src={Automation} alt='keywordgen'/>
              </Card>
              <Typography sx={{paddingTop:"10px",textAlign:"center",paddingBottom:"25px"}}>
              Automations
              </Typography>
            </Box>
          </Grid>
        </Grid>
        </Container>

      </Box>
   </>
  )
}

export default Section7
