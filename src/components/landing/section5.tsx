"use client"
import { Box, Button, Container, Grid, Tab, Tabs, Typography } from '@mui/material'
import React  from 'react'
import bgImage from '../../app/Assets/Imges/16359108_v904-nunny-026 1.png'
import Hero from '../landing/section5.module.css'
import DoneIcon from '@mui/icons-material/Done';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Section5 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box 
        sx={{
          padding: { sm: '50px 0', xs: '20px 0' },
          backgroundImage: `url(${bgImage})`,  // Set background image
          backgroundSize: 'cover',             // Make the image cover the whole box
          backgroundPosition: 'center',        // Center the background image
          backgroundRepeat: 'no-repeat',       // Prevent the image from repeating
                            
        }}
        className ={Hero.ParentDiv}
      >
        <Box className = {Hero.background}>

        </Box>
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
            Our  <span style={{ fontWeight: '700' }}>Pricing</span>
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
           Our plans are simple and clear, they are based on the total credits used in each month.
          </Typography>
        </Box>

        <Container>
           <Grid container>
           <Box sx={{ width: '100%' }}>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{paddingBottom:"50px"}}>
          <Tab label="Monthly" {...a11yProps(0)} sx={{fontFamily:"Montserrat",fontWeight:"600",fontSize:{sm:"16px",xs:"14px"},lineHeight:"19.5px",color:"#000",letterSpacing:"8%"}} />
          <Tab label="Yearly" {...a11yProps(1)} sx={{fontFamily:"Montserrat",fontWeight:"600",fontSize:{sm:"16px",xs:"14px"},lineHeight:"19.5px",color:"#000",letterSpacing:"8%"}} />
          <Tab label="Prepaid" {...a11yProps(2)} sx={{fontFamily:"Montserrat",fontWeight:"600",fontSize:{sm:"16px",xs:"14px"},lineHeight:"19.5px",color:"#000",letterSpacing:"8%"}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={1} sx={{display:"flex",justifyContent:"space-between"}} >
          <Grid xs={12} sm={3} item sx={{marginBottom:"10px"}} >
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Basic
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $15<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 200K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 10 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Premium Templates</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px",border:"1px solid #3C31744D",position:"relative"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Standard
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $23<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 50 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>

              <Box sx={{position:"absolute",top:"-15px",left:"18%",letterSpacing:"10%",lineHeight:"19.6px"}}>
                <Button variant='contained' sx={{backgroundColor:"#F7D700",borderRadius:"5px",color:"#000",fontFamily:"Inter",padding:"6px 22px",boxShadow:"none",fontSize:"16px",fontWeight:"600"}}>
                Most Popular
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Grid container spacing={1} sx={{display:"flex",justifyContent:"space-between"}} >
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}} >
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Basic
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $15<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 200K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 10 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Premium Templates</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px",border:"1px solid #3C31744D",position:"relative"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Standard
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $23<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 50 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>

              <Box sx={{position:"absolute",top:"-15px",left:"18%",letterSpacing:"10%",lineHeight:"19.6px"}}>
                <Button variant='contained' sx={{backgroundColor:"#F7D700",borderRadius:"5px",color:"#000",fontFamily:"Inter",padding:"6px 22px",boxShadow:"none",fontSize:"16px",fontWeight:"600"}}>
                Most Popular
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Grid container spacing={1} sx={{display:"flex",justifyContent:"space-between"}} >
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}} >
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Basic
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $15<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 200K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 10 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Premium Templates</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px",border:"1px solid #3C31744D",position:"relative"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
            Standard
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $23<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 50 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>

              <Box sx={{position:"absolute",top:"-15px",left:"18%",letterSpacing:"10%",lineHeight:"19.6px"}}>
                <Button variant='contained' sx={{backgroundColor:"#F7D700",borderRadius:"5px",color:"#000",fontFamily:"Inter",padding:"6px 22px",boxShadow:"none",fontSize:"16px",fontWeight:"600"}}>
                Most Popular
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} sm={3} item  sx={{marginBottom:"10px"}}>
            <Box sx={{padding:"20px 20px",backgroundColor:"#FFFFFF",borderRadius:"16px"}}>
            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1,fontFamily:"Montserrat",fontSize:"18px",color:"#212529",lineHeight:"50px",fontWeight:"600"}}>
                Free
              </Typography>
              <Typography sx={{fontSize:"40px",fontFamily:"Montserrat",fontWeight:"700"}}>
              $0<span style={{fontSize:"16px",color:"#00000099",opacity:"60%",fontWeight:"400"}}>/Month</span>
              </Typography>
              <Box sx={{padding:"20px 0px"}}>
                <Button variant='contained' fullWidth sx={{backgroundColor:"#0CC0DF",boxShadow:"none",borderRadius:"130px",color:"#fff",fontFamily:"Montserrat",fontSize:"16px",fontWeight:"600",lineHeight:"19.5px",letterSpacing:"8%",padding:"10px 20px"}}>
                Subscribe
                </Button>
              </Box>

              <ul style={{padding:"0px",margin:"0px",paddingTop:"15px"}}>
                <li style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}> <DoneIcon sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 5K Words Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 4 Images Generate</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> 70+ Templates Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Assistant Access</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Article Generator</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/> Content Rewriter</li>
                <li  style={{fontFamily:"Montserrat",fontWeight:"500",fontSize:"16px",lineHeight:"19.5px",color:"#000000",paddingBottom:"15px"}}><DoneIcon  sx={{marginRight:"12px",fontSize:"25px",color:"#65C95E"}}/>Smart Editor</li>
              </ul>
            </Box>
          </Grid>
        </Grid>
      </CustomTabPanel>
    </Box>
           </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Section5;
