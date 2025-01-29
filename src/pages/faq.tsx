import { Accordion, AccordionDetails, AccordionSummary, Box,  Container, Grid, Typography } from '@mui/material'
import React from 'react'

import '../pages/faq.module.css'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const section6 = () => {
  return (
    <div id='section6'>
     <Box sx={{ padding: { sm: '50px 0', xs: '20px 0 50px 0px' } }}>
       <Container maxWidth='lg'>
          <Typography sx={{textAlign:"center",fontFamily:"Montserrat",fontSize:"60px",fontWeight:"700",lineHeight:"55px",paddingBottom:{xs:"50px",sm:"70px"},backgroundImage: 'linear-gradient(to right, #603BFC  , #FF6835  )',
                WebkitBackgroundClip: 'text',
                color: 'transparent',}}>
           FAQ
          </Typography>
          
          <Grid container>
           
           <Grid md={12}>
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
