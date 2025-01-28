import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import google from '../../app/Assets/Imges/image 41.png'
import yandex from '../../app/Assets/Imges/image 43.png'
import first_plce from '../../app/Assets/Imges/image_45-removebg-preview (2) 1.png'
import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import '../landing/section6.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const section6 = () => {
  return (
    <div id='section6'>
     <Box sx={{ padding: { sm: '50px 0', xs: '20px 0 50px 0px' } }}>
       <Container maxWidth='lg'>
          <Typography sx={{textAlign:"center",fontFamily:"Montserrat",fontSize:"20px",fontWeight:"700",color:"#000000",lineHeight:"30px",paddingBottom:"30px"}}>
          The top rated All-In-One optimization tool
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingBottom:"50px"}}>
            <Grid container sx={{display:"flex",justifyContent:"center"}}>
            <Grid xs={12} sm={1.8} sx={{padding:"0px 0px"}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <Image src={google} alt='google' style={{width:"75px",height:"25px"}}/>
              <Box sx={{paddingTop:"5px"}}>
                <StarIcon sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
              </Box>
              <Typography sx={{fontSize:"10px",fontWeight:"400",lineHeight:"30px",paddingTop:"5px",fontFamily:"Roboto"}}>
              4.3 (6 M+)
              </Typography>
            </Box>
            </Grid>
            <Grid xs={12} sm={1.8}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
                <Image src={first_plce} alt='first_plce' style={{width:"94px",height:"85px"}}/>
            </Box>
            </Grid>
            <Grid xs={12} sm={1.8} sx={{padding:"0px 0px"}}>
            <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
              <Image src={yandex} alt='yandex' style={{width:"75px",height:"25px"}}/>
              <Box sx={{paddingTop:"5px"}}>
                <StarIcon sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
                <StarIcon  sx={{color:"#FFD700"}}/>
              </Box>
              <Typography sx={{fontSize:"10px",fontWeight:"400",lineHeight:"30px",paddingTop:"5px",fontFamily:"Roboto"}}>
              4.8 (8 M+)
              </Typography>
            </Box>
            </Grid>
            </Grid>
          </Box>
          <Grid container>
           <Grid md={5} sx={{paddingBottom:{xs:"30px"}}}>
            <Typography sx={{fontSize:{sm:"60px",xs:"25px"},fontWeight:"400",fontFamily:"Montserrat",lineHeight:{sm:"70px",xs:"30px",textAlign:{xs:"center",sm:"none"}}}}>
            Frequently Asked <span style={{fontWeight:"700",color:"#212529"}}>Questions</span> 
            </Typography>
            <Box sx={{paddingTop:{sm:"30px",xs:"15px"}}}>
                <Button variant='contained' sx={{backgroundColor:"#D7F200",borderRadius:"70px",color:"#000",boxShadow:"none",fontSize:{sm:"16px",xs:"14px"},fontWeight:"600",fontFamily:"Montserrat",lineHeight:"19.5px",padding:{sm:"15px 35px",xs:"10px 25px"}}}>
                View ALL
                </Button>
            </Box>
           </Grid>
           <Grid md={7}>
           <div>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" sx={{fontFamily:"Montserrat",lineHeight:{xs:"25px",sm:"0px"},fontSize:{xs:"16px",sm:"21px"},color:"#000000"}}>Can I change my subscription plan later?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion  defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" sx={{fontFamily:"Montserrat",lineHeight:{sm:"0px",xs:"25px"},fontSize:{xs:"16px",sm:"21px"},color:"#3C3174"}}>Can I cancel my subscription anytime?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        Yes, our subscription pricing plans allow you to cancel your subscription at any time without any penalty.
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"  sx={{fontFamily:"Montserrat",lineHeight:{xs:"25px",sm:"0px"},fontSize:{xs:"16px",sm:"21px"},color:"#000000"}} >What happens if I miss a payment?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion  >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span"  sx={{fontFamily:"Montserrat",lineHeight:{xs:"25px",sm:"0px"},fontSize:{xs:"16px",sm:"21px"},color:"#000000"}}>Is there any hidden fees with subscription plans?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
           </Grid>
          </Grid>
       </Container>
     </Box>
    </div>
  )
}

export default section6
