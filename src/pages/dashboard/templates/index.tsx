"use Client"
import { Box, Button, Container, Drawer, Grid, IconButton, Typography, Menu, MenuItem, Divider } from '@mui/material'
import React, { useState } from 'react'
import logoImage from '../../../app/Assets/Imges/logo.svg'
import Image from 'next/image'
import Hero from '../../../pages/dashboard.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dashboardman from '../../../app/Assets/Imges/dasboardman.png'
import { Menu as MenuIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/router'
import image16 from '../../../app/Assets/Imges/Group 16.png'
import image17 from '../../../app/Assets/Imges/Group 17.png'
import CommitIcon from '@mui/icons-material/Commit';
import worlmapImage from '../../../app/Assets/Imges/world 1.png'
import chartBar from '../../../app/Assets/Imges/bar.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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

const Templates = () => {
  const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };


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
      const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    
      const handleClick = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
      const [anchorEll, setAnchorEll] = useState<HTMLElement | null>(null);
    
      const handleClickk = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEll(event.currentTarget);
      };
    
      const handleClosee = () => {
        setAnchorEll(null);
      };
   
  return (
    <>
     <Box>
       <Container maxWidth='xl' sx={{paddingLeft:"0px",paddingRight:"0px"}}>
          <Box sx={{height:"70px",width:"100%"}}>
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
          <Box sx={{display:"flex",justifyContent:"flex-start",marginRight:{md:"50px",xs:"0px"}}}>
                 <Image src={logoImage} alt='logo image' className={Hero.LogoImage}/>
                 </Box>
              </Grid>
              <Grid xs={0} sm={9.5} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", alignItems: "center" }}>
                <Box sx={{ display: "flex",justifyContent:"flex-end" }} >
                  {/* <Typography sx={{ fontSize: "30px", fontFamily: "Poppins", fontWeight: "600", lineHeight: "42px", color: "#151D48", paddingRight: "60px" }}>
                    Dashboard
                  </Typography> */}
                  {/* <Box>
                    <input type="text" style={{ padding: "10px 0px", borderRadius: "16px", backgroundColor: "#F9FAFB", border: "none", outline: "none", fontFamily: "Poppins", fontSize: "14px", fontWeight: "400", lineHeight: "27px", paddingLeft: "30px" }} placeholder='What do you want to write?...' />
                  </Box> */}
                  <Box sx={{ paddingLeft: "15px", paddingTop: "10px" }}>
                    <Typography sx={{ paddingLeft: "20px", display: "flex", justifyContent: "center", alignItems: "center", color: "#374557", fontSize: "18px", fontWeight: "600", lineHeight: "27px", fontFamily: "Poppins", cursor: "pointer" }}
                      onClick={handleClick}
                    >
                      Mode <KeyboardArrowDownIcon />
                    </Typography>
                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          padding: "10px 10px",// You can adjust this width
                          fontFamily: "Poppins",
                          border: "1px solid #0000002B"
                        },
                      }}
                    >
                      <MenuItem onClick={handleClose} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px" }} ><WbSunnyIcon sx={{ marginRight: "10px" }} />Light</MenuItem>
                      <MenuItem onClick={handleClose} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px" }} ><DarkModeIcon sx={{ marginRight: "10px" }} />Dark</MenuItem>
                      <MenuItem onClick={handleClose} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px" }} ><MotionPhotosAutoIcon sx={{ marginRight: "10px" }} />Auto</MenuItem>
                    </Menu>

                  </Box>
                  <Box sx={{ paddingLeft: "15px", paddingTop: "10px" }}>

                    <Typography sx={{ paddingLeft: "10px", display: "flex", justifyContent: "center", alignItems: "center", color: "#374557", fontSize: "18px", fontWeight: "600", lineHeight: "27px", fontFamily: "Poppins", cursor: "pointer" }}>
                      Chat
                    </Typography>
                  </Box>
                  <Box sx={{ padding: "0px 25px", width: "150px" }}>
                    <Button variant='contained' sx={{ width: "100%", fontSize: "14px", fontWeight: "600", fontFamily: "Poppins", textTransform: "capitalize", padding: "12px", boxShadow: "none", backgroundColor: "#D7F200", color: "#000000", borderRadius: "12px" }}>
                      create content
                    </Button>
                  </Box>
                  <Box sx={{ height: "48px", width: "48px", backgroundColor: "#FFFAF1", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", color: "#FFA412", cursor: "pointer", marginLeft: "5px" }}>
                    <NotificationsIcon />
                  </Box>
                  <Box sx={{ paddingLeft: "20px", display: "flex", cursor: "pointer" }}>
                    <Image src={dashboardman} alt='dashboardman' style={{ width: "60px", height: "60px" }} />
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "space-between", flexDirection: "column", height: "60px" }}>
                      <Typography sx={{ paddingLeft: "12px", fontSize: "18px", fontFamily: "Poppins", color: "#374557", lineHeight: "24px", fontWeight: "600" }}>
                        surya

                      </Typography>
                      <Typography sx={{ paddingLeft: "12px", fontSize: "16px", color: "#374557", lineHeight: "20px", fontWeight: "600", fontFamily: "Poppins", paddingTop: "10px", display: "flex", alignItems: "center" }} onClick={handleClickk}>
                        Admin  <KeyboardArrowDownIcon sx={{ color: "#151D48" }} />
                      </Typography>
                      <Menu
                        anchorEl={anchorEll}
                        open={Boolean(anchorEll)}
                        onClose={handleClosee}
                        PaperProps={{
                          style: {
                            width:"220px",// You can adjust this width
                            fontFamily: "Poppins",
                            border: "1px solid #0000002B",
                            padding:"10px"
                          },
                        }}
                      >
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px",display:"flex",alignItems:"flex-start" }} ><AccountBoxIcon sx={{ marginRight: "10px",fontSize:"40px" }} /> User1 <br />
                        faizan@gmail
                        </MenuItem>
                        <Divider sx={{ my: 1, borderColor: '#e0e0e0', borderWidth: '1px' }} />
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px",display:"flex",alignItems:"flex-start",paddingLeft:"15px" }} ><DarkModeIcon sx={{ marginRight: "25px",paddingLeft:"15px" }} />Dark
                        </MenuItem>
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px",display:"flex",alignItems:"flex-start",paddingLeft:"15px" }} ><MotionPhotosAutoIcon sx={{ marginRight: "25px",paddingLeft:"15px" }} />Auto
                        </MenuItem>
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px",display:"flex",alignItems:"flex-start",paddingLeft:"15px" }} ><DarkModeIcon sx={{ marginRight: "25px",paddingLeft:"15px" }} />Dark
                        </MenuItem>
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px",display:"flex",alignItems:"flex-start",paddingLeft:"15px" }} ><MotionPhotosAutoIcon sx={{ marginRight: "25px",paddingLeft:"15px" }} />Auto
                        </MenuItem>
                        <Divider sx={{ my: 1, borderColor: '#e0e0e0', borderWidth: '1px' }} />
                        <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "10px",display:"flex",alignItems:"flex-start" }} ><LogoutIcon sx={{ marginRight: "25px",paddingLeft:"15px" }} />Log Out
                        </MenuItem>
                      </Menu>
                    </Box>

                  </Box>
                </Box>
              </Grid>
             </Grid>
          </Box>
          {/* top header completed */}
          {/* body part started */}
          <Box sx={{paddingTop:"15px"}}>
            <Grid container sx={{paddingLeft:"0px",paddingRight:"0px"}}>
            <Grid xs={12} md={2.5} sx={{padding:"20px",display:{xs:"none",md:"block",sm:"none"}}}>
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
                         <DashboardIcon sx={{marginRight:"20px"}}/>Dashoard

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
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Assistant
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
                      <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   Data Analyst
                    </Typography>
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
               
               <Grid container xs={12} sm={12} md={9.5} sx={{backgroundColor:"#F8F9FA",padding:{xs:"20px",sm:"20px 15px 20px 20px"}}}>
               <Grid xs={12} md={8} sx={{backgroundColor:"#fff",borderRadius:"20px" }}>
              <Box sx={{ width: '100%',backgroundColor:"#fff",paddingLeft:"2px",paddingTop:"10px" ,borderRadius:"20px" }}>
      <Box sx={{ borderBottom: 0, borderColor: 'none'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}} />
          <Tab label="Blog" {...a11yProps(1)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}}  />
          <Tab label=" Email" {...a11yProps(2)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}}  />
          <Tab label="Marketing" {...a11yProps(3)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}}  />
          <Tab label="Social Media" {...a11yProps(4)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}} />
          <Tab label="Videos" {...a11yProps(4)} sx={{fontSize:"14px",fontFamily:"Inter",fontWeight:"500",color:"#05004E"}} />
          
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Grid container spacing={1} >
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Article Generator
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#789FFE",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                    AI-powered tool that creates high-quality articles based on user specifications and keywords.
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Blog Conclusion
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#95CF29",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  This AI-powered tool can generate compelling and relevant conclusions for your blog posts.
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Blog Idea & Outline
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#D59AED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Blog Intros
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#FE9C78",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Blog Section
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#61DFED",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Blog Title

                   </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#DFB915",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Content Generator

                   </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#FE78D6",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Content Rewriter

                   </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#95CF29",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Copy Ad Variants

                   </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#DFB915",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Email and Message

                   </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#95CF29",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                  Generates captivating and engaging blog introductions to hook readers and drive traffic
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    FAQ Generator
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#789FFE",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                    AI-powered tool that creates high-quality articles based on user specifications and keywords.
                    </Typography>
               </Box>
           </Grid>
           <Grid xs={12} sm={6} item>
               <Box sx={{border:"1px solid #E4E4E4",padding:"20px",borderRadius:"16px"}}>
                  <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Typography sx={{fontSize:{xs:"20px",md:"24px"},lineHeight:{xs:"28px",md:"32px"},fontFamily:"Poppins",fontWeight:"600",color:"#151D48"}}>
                    Meta Title
                    </Typography>
                    <Box sx={{width:"40px",height:"40px",backgroundColor:"#789FFE",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <FormatListBulletedIcon sx={{color:"#fff"}}/>
                    </Box>
                   
                  </Box>
                  <Typography sx={{fontSize:"14px",color:"#000",lineHeight:"24px",fontFamily:"Poppins",fontWeight:"400",paddingTop:"25px"}}>
                    AI-powered tool that creates high-quality articles based on user specifications and keywords.
                    </Typography>
               </Box>
           </Grid>
        </Grid>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}

              <Grid xs={12} md={4} sx={{padding:{md:"0px 20px",xs:"0px"},backgroundColor:""}}>
                
                <Grid container sx={{display:"flex",justifyContent:{xs:"center",md:"flex-start"},}}>
                  <Grid xs={12} md={12} sx={{display:"flex",justifyContent:"center",position:"relative"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"20px",xs:"15px"},width:{xs:"100%",sm:"100%"},borderRadius:"20px 20px 20px 20px",border:"1px solid #F8F9FA",boxShadow:"0px 4px 20px #EEEEEE80"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:{xs:"12px",sm:"20px"}}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E"}}>
                         Customer Satisfaction
                         </Typography>
                         </Box>
                        <Box sx={{overflow:"hidden",borderBottom:"1px solid #EDF2F6",paddingBottom:{}}}>
                          <Box sx={{position:"",top:"10px",left:"0px"}}>
                            <Image src={image17} alt='image17' style={{width:"100%"}}/>
                          </Box>
                          <Box sx={{position:"absolute",top:{xs:"43%",sm:"48%",md:"43%"},left:{xs:"0px",sm:"20px"}}}>
                           <Image src={image16} alt='image16' style={{width:"95%"}}/>
                           </Box>
                        </Box>
                        <Box sx={{display:"flex",justifyContent:"center"}}> 
                          <Typography sx={{fontSize:"16px",fontFamily:"Poppins",color:"#96A5B8",lineHeight:"25px",display:"flex",justifyContent:"center",alignItems:"flex-start",width:"150px",borderRight:"1px solid #BDC9D3",margin:"10px 0px"}}>
                               <CommitIcon sx={{color:"#0080DA",marginRight:"10px"}}/> Last Month <br /> 
                              
                               $3,004
                               
                          </Typography>
                          <Typography sx={{fontSize:"16px",fontFamily:"Poppins",color:"#96A5B8",lineHeight:"25px",display:"flex",justifyContent:"center",alignItems:"flex-start",width:"150px",margin:"10px 0px"}}>
                               <CommitIcon sx={{color:"#05C283",marginRight:"10px"}}/>  This Month <br /> 
                               $4,504
                               
                          </Typography>
                        </Box>
                     </Box>
                  </Grid>
                  <Grid xs={12} md={11} sx={{marginTop:"10px",display:"flex",justifyContent:"flex-start"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"20px 18px",xs:"15px"},width:{xs:"95%",sm:"100%"},borderRadius:"20px",border:"1px solid #F8F9FA",boxShadow:"0px 4px 20px #EEEEEE80"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:{xs:"12px",sm:"20px"}}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E",paddingBottom:"30px"}}>
                         Sales Mapping by Country
                         </Typography>
                         
                        </Box>
                       <Box sx={{width:"90%",}}>
                        <Image src={worlmapImage} alt='worldimage' style={{width:"310px",height:"230px"}} className={Hero.worldmapImage}/>
                       </Box>
                     </Box>
                  </Grid>
                  <Grid xs={12} md={11} sx={{marginTop:"10px",display:"flex",justifyContent:"flex-start"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"25px",xs:"15px"},width:{xs:"95%",sm:"100%"},borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E"}}>
                         Target vs Reality
                         </Typography>
                        
                        </Box>
                        <Box sx={{width:"90%",}}>
                        <Image src={chartBar} alt='worldimage' style={{width:"290px",height:"157px"}} className={Hero.barchart}/>
                       </Box>
                       <Box sx={{paddingTop:"20px",display:"flex",justifyContent:"space-around",alignItems:"flex-start"}}>
                        <Typography sx={{display:"flex",alignItems:"flex-start",fontSize:"12px",color:"#151D48",lineHeight:"16px",fontWeight:"600",fontFamily:"Poppins"}} component='div'>
                          <Box sx={{width:"36px",height:"36px",backgroundColor:"#4AB58E",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",marginRight:"15px"}}>
                            < LocalMallIcon sx={{color:"#fff",}}/> 
                          </Box>
                          Reality Sales
                        </Typography>
                        <Typography sx={{fontSize:"14px",lineHeight:"20px",fontFamily:"Poppins",color:"#27AE60",fontWeight:"500"}}>
                        8.823
                        </Typography>
                       </Box>
                     </Box>
                  </Grid>
                 
                </Grid>
              </Grid>
               </Grid>
             
              
            </Grid>
          </Box>
         
       </Container>
       </Box>
    </>
  )
}

export default Templates
