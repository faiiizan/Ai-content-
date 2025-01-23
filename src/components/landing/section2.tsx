import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import plogo from '../../app/Assets/Imges/polgo.svg'
import ballistic from '../../app/Assets/Imges/ballastic.svg'
import amara from '../../app/Assets/Imges/amara.svg'
import logo from '../../app/Assets/Imges/loogo.svg'
import circle from '../../app/Assets/Imges/circle.svg'
import Image from 'next/image'

const section2 = () => {
  


  return (
    <>
     <Box sx={{padding:{sm:"40px 0px",xs:"20px 0px"}}}>
        <Container maxWidth='lg'>
        <Typography sx={{fontSize:{sm:"18px",xs:"16px"},fontFamily:"Montserrat",fontWeight:"400",lineHeight:"30px",textAlign:"center",margin:"auto",color:"##000000",paddingBottom:"30px"}}>
                Thousands of teams already add more focus to their work with verbilab
                </Typography>
              <Grid container >
               
               <Grid xs={6} md={2.5} sm={4}>
                   <Box sx={{paddingLeft:{sm:"0px",xs:"0px",paddingBottom:"25px"}}}>
                    <Image src={plogo} alt='plogo'/>
                   </Box>
                </Grid>
                <Grid xs={6} md={2.5} sm={4}>
                   <Box sx={{paddingLeft:"0px",paddingBottom:"25px",margin:"auto"}}>
                    <Image src={ballistic} alt='plogo'/>
                   </Box>
                </Grid><Grid xs={6} md={2.5} sm={4}>
                   <Box sx={{paddingLeft:"0px",paddingBottom:"25px"}}>
                    <Image src={amara} alt='plogo'/>
                   </Box>
                </Grid><Grid xs={6} md={2.5} sm={4}>
                   <Box sx={{paddingLeft:"0px",paddingBottom:"25px"}}>
                    <Image src={logo} alt='plogo'/>
                   </Box>
                </Grid><Grid xs={6} md={2} sm={4}>
                   <Box sx={{paddingLeft:"0px",paddingBottom:"25px"}}>
                    <Image src={circle} alt='plogo'/>
                   </Box>
                </Grid>
             
              </Grid>
        </Container>
     </Box>
    </>
  )
}

export default section2
