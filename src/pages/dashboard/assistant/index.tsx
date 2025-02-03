"use Client"
import { Box, Button, Container, Drawer, Grid, IconButton, Typography, Menu, MenuItem, Divider, Breadcrumbs, Link as MUILink, TextField, } from '@mui/material'
import React, { useState } from 'react'
import logoImage from '../../../app/Assets/Imges/logo.svg'
import Image from 'next/image'
import Hero from '../../../pages/dashboard.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import dashboardman from '../../../app/Assets/Imges/dasboardman.png'
import { Menu as MenuIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/router'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FeedIcon from '@mui/icons-material/Feed';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import image1 from '../../../app/Assets/Imges/Ellipse 1.png'
import image2 from '../../../app/Assets/Imges/Ellipse 1 (1).png'
import image3 from '../../../app/Assets/Imges/Ellipse 1 (2).png'
import image4 from '../../../app/Assets/Imges/Ellipse 1 (3).png'
import image5 from '../../../app/Assets/Imges/Ellipse 1 (4).png'
import image6 from '../../../app/Assets/Imges/Ellipse 1 (5).png'
import image8 from '../../../app/Assets/Imges/Ellipse 1 (7).png'
import image9 from '../../../app/Assets/Imges/Ellipse 1 (8).png'
import image10  from '../../../app/Assets/Imges/Ellipse 1 (9).png'
import image11 from '../../../app/Assets/Imges/Ellipse 1 (10).png'
import image12 from '../../../app/Assets/Imges/Ellipse 1 (11).png'
import image13 from '../../../app/Assets/Imges/Ellipse 1 (12).png'
import { FaPaperclip } from 'react-icons/fa';
import { SiGoogleassistant } from "react-icons/si";
import { PiChartPieSliceFill } from "react-icons/pi";






const Templates = () => {
  

  const [open, setOpen] = useState(false); // State to control drawer visibility

  // Function to toggle the drawer open/close
  const toggleDrawer = () => {
    
    setOpen(prevState => !prevState);
  };
  
  const router = useRouter();

  const getLinkStyle = (path:string) => {
    return router.pathname === path
      ? { color:"red"} // active style
      : {};
  };

  const menuItems = (
      <Box sx={{ width: {xs:250,sm:"500px"}, padding: {xs:"60px 10px",sm:"60px 30px"} }}>
        {/* Credits Section */}
        <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: {xs:"4px solid #4AB58E",sm:"8px solid #4AB58E"}, borderRadius: {xs:"2px",sm:"4px"}, marginBottom: "40px" }}>
          <Typography sx={{ fontFamily: "Poppins", fontSize: {xs:"15px",sm:"18px"}, lineHeight: "22.5px", fontWeight: {xs:"400",sm:"700"}}}>Credits</Typography>
          <Typography sx={{ fontFamily: "Poppins", fontSize: {xs:"15px",sm:"18px"}, lineHeight: "22.5px", fontWeight: {xs:"400",sm:"700"}}}>5000 words left</Typography>
        </Box>
  
        {/* Dashboard Section */}
        
        <Box sx={{ height: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative",borderBottom:{xs:"1px solid #0000001A"} }}>
          <ul style={{padding:"0px",margin:"0px"}}>
         
          <li style={{textDecoration:"none",listStyle:"none"}}> <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"22px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight:{xs: "400",sm:"700"}, color: "#737791" }}>  
             <DashboardIcon sx={{ marginRight: "20px" }} /> Dashboard</Typography> 
             </li> 
          
         <li style={{textDecoration:"none",listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"22px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight: {xs: "400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
            <DashboardIcon sx={{ marginRight: "20px" }} /> Templates
          </Typography>
          </li> 
          <li style={{textDecoration:"none",listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: {xs:"20px",sm:"27px"}, fontWeight:{xs: "400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Assistant
          </Typography>
          </li>
         
          </ul>
        </Box>
  
        {/* Workflows Section */}
        <Box sx={{ minHeight: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px",borderBottom:{xs:"1px solid #0000001A"} }}>
          <ul style={{padding:"0px",margin:"0px"}}>
        <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791"}}>
        <DashboardIcon sx={{ marginRight: "20px" }} />  Workflows
        </Typography>
          <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
            <DashboardIcon sx={{ marginRight: "20px" }} /> Data Analyst
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize:{xs:"16px",sm:"22px"} , lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Article Generator
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Content Rewriter
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Documents
          </Typography>
          </ul>
        
           
          
        </Box>
  
        {/* Account Section */}
        <Box sx={{ minHeight: "100px", width: {xs:"100%",sm:"90%"}, border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: "30px", padding: {xs:"0px 0px 30px 10px",sm:"30px 0px 50px 30px"}, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px" }}>
          <ul style={{padding:"0px",margin:"0px"}}>
           <li style={{listStyle:"none"}}> <Typography  sx={{  display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791" }}>
            <DashboardIcon sx={{ marginRight: "20px" }} /> Account
           </Typography> </li>
          
          <li  style={{listStyle:"none"}} >
            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px" }}>
            <DashboardIcon sx={{ marginRight: "20px" }} /> My History
          </Typography>
          </li>
          <li style={{listStyle:"none"}}>
            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Usage History
          </Typography>
          </li>
          <li style={{listStyle:"none"}}>
            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize:{xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:  {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
          </Typography>
          </li>
          <li style={{listStyle:"none"}}>
            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight: {xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Plans and Billing
          </Typography>
          </li>
          <li style={{listStyle:"none"}}>
            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"18px",sm:"22px"}, lineHeight: "27px", fontWeight:{xs:"400",sm:"700"}, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
            <DashboardIcon sx={{ paddingRight: "20px" }} /> Profile Details
          </Typography>
          </li>
          </ul>
          
        </Box>
      </Box>
    );
      
      const [anchorEll, setAnchorEll] = useState<HTMLElement | null>(null);
    
      const handleClickk = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEll(event.currentTarget);
      };
    
      const handleClosee = () => {
        setAnchorEll(null);
      };

      const card = [
        {img:image1,title:"Kierra Curtis"},
        {img:image2,title:"Ashlynn Rhiel Madsen"},
        {img:image3,title:"Terry Septimus"},
        {img:image4,title:"Advertiser"},
        {img:image5,title:"Advertiser"},
        {img:image6,title:"Advertiser"},
        {img:image8,title:"Advertiser"},
        {img:image9,title:"Advertiser"},
        {img:image10,title:"Advertiser"},
        {img:image11,title:"Advertiser"},
        {img:image12,title:"Advertiser"},
        {img:image2,title:"Advertiser"},
        {img:image3,title:"Advertiser"},
        {img:image4,title:"Advertiser"},
        {img:image5,title:"Advertiser"},
      

        
      ]
   
  return (
    <>
     <Box>
       <Container maxWidth='xl' sx={{paddingLeft:"0px",paddingRight:"0px"}}>
          <Box sx={{height:"65px",width:"100%"}}>
            <Grid container sx={{paddingLeft:"0px",paddingRight:"0px"}}>
               
              <Grid xs={12} sm={2.5} sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {/* hambburger part start */}
                <Box>
            <Grid container>
                
                <Grid item xs={12} sm={12} md={0} sx={{ display: { xs: 'block', md: 'none',sm:"block" } }}>
                <IconButton onClick={() => toggleDrawer()}>
                  <MenuIcon sx={{ color: '#737791', fontSize: '30px' }} />
                </IconButton>
              </Grid>
            </Grid>
            <Drawer
            anchor="left"
            open={open}
            onClose={() => toggleDrawer()}
            sx={{
              '& .MuiDrawer-paper': {
                width: open ? {xs:"280px",sm:'580px'} : '240px', // Customize the width based on the open state
                transition: 'width 0.3s', // Smooth transition when resizing
              },
            }}
          >
            {menuItems} {/* Drawer content */}
          </Drawer>
          </Box>
          {/* hamburger part end */}
          <Box sx={{display:"flex",justifyContent:"flex-start",marginRight:{md:"70px",xs:"0px"}}}>
                 <Image src={logoImage} alt='logo image' className={Hero.LogoImage}/>
                 </Box>
              </Grid>
              <Grid xs={0} sm={9.5} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", alignItems: "center" }}>

                                <Box sx={{ display: "flex", justifyContent: "flex-end" }} >


                                    <Box sx={{ padding: "0px 45px", width: "150px" }}>
                                        <Button variant='contained' sx={{ width: "100%", fontSize: "14px", fontWeight: "600", fontFamily: "Poppins", textTransform: "capitalize", padding: "15px 10px", boxShadow: "none", backgroundColor: "#D7F200", color: "#000000", borderRadius: "12px" }}>
                                            create content
                                        </Button>
                                    </Box>
                                    <Box sx={{ height: "48px", width: "48px", backgroundColor: "#FFFAF1", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", color: "#FFA412", cursor: "pointer", marginLeft: "5px", }}>
                                        <ChatIcon sx={{ color: "#000" }} />
                                    </Box>
                                    <Box sx={{ paddingLeft: "45px", display: "flex", cursor: "pointer",justifyContent:"center" }}>
                                        <Image src={dashboardman} alt='dashboardman' style={{ width: "60px", height: "60px" }} />
                                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "space-between", flexDirection: "column", height: "60px",paddingLeft:"20px" }}>
                                            <Typography sx={{ paddingLeft: "12px", fontSize: "18px", fontFamily: "Poppins", color: "#374557", lineHeight: "24px", fontWeight: "600" }}>
                                                surya

                                            </Typography>
                                            <Typography sx={{ paddingLeft: "12px", fontSize: "16px", color: "#737791", lineHeight: "20px", fontWeight: "400", fontFamily: "Poppins", paddingTop: "10px", display: "flex", alignItems: "flex-start" }} >
                                                Admin  
                                            </Typography>
                                           
                                            <Menu
                                                anchorEl={anchorEll}
                                                open={Boolean(anchorEll)}
                                                onClose={handleClosee}
                                                PaperProps={{
                                                    style: {
                                                        width: "220px",// You can adjust this width
                                                        fontFamily: "Poppins",
                                                        border: "1px solid #0000002B",
                                                        padding: "10px"
                                                    },
                                                }}
                                            >
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", display: "flex", alignItems: "flex-start" }} ><AccountBoxIcon sx={{ marginRight: "10px", fontSize: "40px" }} /> User1 <br />
                                                    faizan@gmail
                                                </MenuItem>
                                                <Divider sx={{ my: 1, borderColor: '#e0e0e0', borderWidth: '1px' }} />
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><DarkModeIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Dark
                                                </MenuItem>
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><MotionPhotosAutoIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Auto
                                                </MenuItem>
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><DarkModeIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Dark
                                                </MenuItem>
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><MotionPhotosAutoIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Auto
                                                </MenuItem>
                                                <Divider sx={{ my: 1, borderColor: '#e0e0e0', borderWidth: '1px' }} />
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px", display: "flex", alignItems: "flex-start" }} ><LogoutIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Log Out
                                                </MenuItem>
                                            </Menu>
                                            
                                        </Box>
                                        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",paddingLeft:"15px"}} onClick={handleClickk}>
                                                <KeyboardArrowDownIcon/>
                                            </Box>

                                    </Box>
                                </Box>
                            </Grid>
              
             </Grid>
          </Box>
          </Container>
          {/* top header completed */}
          {/* body part started */}
          <Box sx={{paddingTop:"15px"}}>
            <Grid container sx={{paddingLeft:"0px",paddingRight:"0px"}}>
            <Grid xs={12} md={2.3} sx={{padding:"20px",display:{xs:"none",md:"block",sm:"none"}}}>
                <Box sx={{display:{sm:"flex"},justifyContent:"space-between",borderBottom:"4px solid #4AB58E",borderRadius:"2px",marginBottom:"40px"}}>
                  <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
                  Credits
                  </Typography>
                  <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
                  5000 words left
                  </Typography>
                </Box>
                {/* start dashboard part */}
                <Box sx={{height:"100px",width:"90%",border:'1px solid #0000001A',borderRadius:"30px",padding:"25px 0px 40px 20px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",position:"relative"}}>
                    <ul style={{margin:"0px",padding:"0px"}}>
                      <li style={{listStyle:"none"}}>
                        <Link href='/dashboard' passHref style={{textDecoration:"none"}}>
                         <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",...getLinkStyle('/dashboard')}}>
                         <PiChartPieSliceFill style={{marginRight:"20px"}}/>Dashoard

                        </Typography>
                        </Link>
                        </li>
                    
                    <li style={{listStyle:"none"}}>
                    <Link href='/dashboard/templates' style={{textDecoration:"none"}}> <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px"}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   Templates
                    </Typography></Link> 
                    </li>
                     <li style={{listStyle:"none"}}>
                      <Link href='/dashboard/assistant' style={{textDecoration:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <SiGoogleassistant style={{paddingRight:"20px"}}/>   Assistant
                    </Typography>
                    </Link>
                    </li>
                    </ul>
                </Box>
                {/* end dashboard part */}
                {/* start workflows */}
                <Box sx={{minHeight:"100px",width:"90%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 20px",display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",position:"relative",marginTop:"40px"}}>
                  <ul style={{margin:"0px",padding:"0px"}}>
                    
                    <li style={{listStyle:"none"}}>
                      <Link href='/dashboard/analyst' style={{textDecoration:"none"}} passHref>
                      <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   Data Analyst
                    </Typography>
                    </Link>
                    </li>
                   <li style={{listStyle:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <FeedIcon sx={{paddingRight:"20px"}}/>   Article Generator
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <InsertPhotoIcon sx={{paddingRight:"20px"}}/>   Image Generator
                    </Typography>
                    </li>
                     <li style={{listStyle:"none"}}> 
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <ContentCopyIcon sx={{paddingRight:"20px"}}/>   Content Rewriter
                    </Typography> 
                    </li>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DocumentScannerIcon sx={{paddingRight:"20px"}}/>   Documents
                    </Typography>
                    </ul>
                    <Box sx={{position:"absolute",top:"-20px",left:"55px",}}>
                         <Typography  sx={{background:"#fff",borderRadius:"16px",color:"#403F3F",padding:"8px 25px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Workflows</Typography>
                    </Box>
                </Box>
                {/* end wokflows */}
                {/* start account parts */}
                <Box sx={{minHeight:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"40px"}}>
                  <ul style={{margin:"0px",padding:"0px"}}>
                    <li style={{listStyle:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <HistoryIcon sx={{marginRight:"20px"}}/>   My History
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Usage History
                    </Typography>
                    </li>
                   
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <ReceiptIcon sx={{paddingRight:"20px"}}/>   Plans and Billing
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       < PersonIcon sx={{paddingRight:"20px"}}/>   Profile Details
                    </Typography>
                    </li>
                    </ul>
                    <Box sx={{position:"absolute",top:"-20px",left:"60px",}}>
                         <Typography  sx={{background:"#fff",borderRadius:"16px",color:"#403F3F",padding:"8px 25px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Accounts

                         </Typography>
                    </Box>
                </Box>
              </Grid>
                 
               <Grid container xs={12} sm={12} md={9.7} sx={{backgroundColor:"#F8F9FA",padding:{xs:"10px",sm:"5px 25px 20px 25px"},display:"flex",flexDirection:"column"}}>
               <Box  sx={{padding:"10px 10px",paddingBottom:"15px"}}>
                    <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                      <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' },fontFamily:"Poppins",fontWeight:"500",fontSize:"16px",lineHeight:"32px" }} color="inherit" href="/">
                        Home
                      </MUILink>
                     
                      <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' },fontFamily:"Poppins",fontWeight:"500",fontSize:"16px",lineHeight:"32px" }} color="inherit" href="/dashboard/assistant">
                        Assistant
                      </MUILink>
                     
                    </Breadcrumbs>

                  </Box>
                  
                  <Box sx={{background:"#fff",padding:"20px",position:"relative"}}>
                      <Typography sx={{fontSize:"45px",fontFamily:"Quicksand",lineHeight:"56px",textAlign:"center",fontWeight:"600",color:"#000"}}>
                      How can I help you today?
                      </Typography>
                      <Typography  sx={{fontSize:"20px",fontFamily:"Quicksand",lineHeight:"25px",textAlign:"center",fontWeight:"400",color:"#515151",paddingTop:"10px"}}>
                      Please select an assistant or enter your message in the input box below.
                      </Typography>
                      <Grid container sx={{paddingTop:{xs:"20px",md:"50px"}}} spacing={1}>
                          {
                            card.map((item)=>{
                              return(
                                 <>
                                  <Grid xs={12} sm={4} md={2.4} item>
                              <Box sx={{border:"1px solid #E9E9E9",padding:"10px",borderRadius:"19px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                                 <Image src={item.img} alt='image'/>
                                 <Typography sx={{fontFamily:"Quicksand",paddingTop:"8px",fontWeight:"600",fontSize:"16px",lineHeight:"25px",color:"#000000"}}>
                                   {item.title}
                                 </Typography>
                              </Box>
                            </Grid>
                                </>
                              )
                            })
                           
                  
                          }
                      </Grid>
                      <Box sx={{position:"sticky",bottom:"0px",left:"0px",padding:"20px 0px 30px",backgroundColor:"#fff"}}>
                         <input type="text" style={{padding:"20px 70px",width:"88%",borderRadius:"125px",border:"1px solid #00000033",outline:"none",fontFamily:"Quicksand",fontSize:"20px",fontWeight:"600",lineHeight:"25px",color:"#515151"}} placeholder='write message here' className={Hero.Input} />
                         <FaPaperclip 
        style={{
          position: 'absolute', 
          left: '40px', // Icon position
          top: '46%', 
          transform: 'translateY(-50%)', 
          fontSize: '20px', 
          color: '#515151', 
        }} 
        className={Hero.clipIcon}
      />
                      </Box>
                  </Box>
              {/* enn main part */}
              {/* start popular part  */}

              
               </Grid>
             
              
            </Grid>
          </Box>
         
       
       </Box>
    </>
  )
}

export default Templates
