import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logoImage from '../app/Assets/Imges/logo.svg'
import Image from 'next/image'
import '../pages/dashboard.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const dashboard = () => {
  return (
    <>
     <Box>
       <Container maxWidth='xl'>
          <Box sx={{height:"100px",width:"100%",border:"1px solid red"}}>
            <Grid container>
              <Grid xs={6} sm={2.5}>
                 <Image src={logoImage} alt='logo image'/>
              </Grid>
              <Grid xs={6} sm={9.5} sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                <Box sx={{display:"flex"}} >
                  <Typography sx={{fontSize:"30px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"42px",color:"#151D48",paddingRight:"120px"}}>
                    Dashboard
                  </Typography>
                  <Box>
                  <input type="text" style={{padding:"10px 30px",borderRadius:"16px",backgroundColor:"#F9FAFB",border:"none",outline:"none",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400",lineHeight:"27px"}} placeholder='What do you want to write?...'  />
                  </Box>
                  <Box sx={{paddingLeft:"40px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Typography sx={{paddingLeft:"40px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
                      Mode <KeyboardArrowDownIcon/>
                    </Typography>
                    <Typography sx={{paddingLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
                      Chat
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
       </Container>
     </Box>
    </>
  )
}

export default dashboard
