"use Client"
import { Box, Button, Container, Drawer, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import logoImage from '../../../app/Assets/Imges/logo.svg'
import Image from 'next/image'
import Hero from '../../../pages/dashboard.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dashboardman from '../../../app/Assets/Imges/dasboardman.png'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CollectionsIcon from '@mui/icons-material/Collections';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import ListIcon from '@mui/icons-material/List';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import UpdateIcon from '@mui/icons-material/Update';
import { Menu as MenuIcon, Dashboard as DashboardIcon } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/router'
import image16 from '../../../app/Assets/Imges/Group 16.png'
import image17 from '../../../app/Assets/Imges/Group 17.png'
import CommitIcon from '@mui/icons-material/Commit';
import worlmapImage from '../../../app/Assets/Imges/world 1.png'
import chartBar from '../../../app/Assets/Imges/bar.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';

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
    <Box sx={{ width: 250, padding: "60px 10px" }}>
      {/* Credits Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: "4px solid #4AB58E", borderRadius: "2px", marginBottom: "40px" }}>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>Credits</Typography>
        <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>5000 words left</Typography>
      </Box>

      {/* Dashboard Section */}
      
      <Box sx={{ height: "100px", width: "100%", border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: "0px 0px 30px 10px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative",borderBottom:{xs:"1px solid #0000001A"} }}>
        <ul style={{padding:"0px",margin:"0px"}}>
       
        <li style={{textDecoration:"none",listStyle:"none"}}> <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"18px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight: "400", color: "#737791" }}>  
           <DashboardIcon sx={{ marginRight: "20px" }} /> Dashboard</Typography> 
           </li> 
        
       <li style={{textDecoration:"none",listStyle:"none"}}>
        <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize:  {xs:"16px",sm:"18px"}, lineHeight:{xs:"20px",sm:"27px"}, fontWeight: "400", color: "#737791", paddingTop: "20px" }}>
          <DashboardIcon sx={{ marginRight: "20px" }} /> Templates
        </Typography>
        </li> 
        <li style={{textDecoration:"none",listStyle:"none"}}>
        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: {xs:"16px",sm:"18px"}, lineHeight: {xs:"20px",sm:"27px"}, fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Assistant
        </Typography>
        </li>
       
        </ul>
      </Box>

      {/* Workflows Section */}
      <Box sx={{ minHeight: "100px", width: "100%", border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: {sm:"30px",xs:"none"}, padding: "0px 0px 30px 10px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px",borderBottom:{xs:"1px solid #0000001A"} }}>
        <ul style={{padding:"0px",margin:"0px"}}>
      <Typography  sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791"}}>
      <DashboardIcon sx={{ marginRight: "20px" }} />  Workflows
      </Typography>
        <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px" }}>
          <DashboardIcon sx={{ marginRight: "20px" }} /> Data Analyst
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Article Generator
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Content Rewriter
        </Typography>
        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Documents
        </Typography>
        </ul>
      
         
        
      </Box>

      {/* Account Section */}
      <Box sx={{ minHeight: "100px", width: "100%", border: {xs:"none",sm:'1px solid #0000001A'}, borderRadius: "30px", padding: "0px 0px 10px 10px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px" }}>
        <ul style={{padding:"0px",margin:"0px"}}>
         <li style={{listStyle:"none"}}> <Typography  sx={{  display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791" }}>
          <DashboardIcon sx={{ marginRight: "20px" }} /> Account
         </Typography> </li>
        
        <li  style={{listStyle:"none"}} >
          <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px" }}>
          <DashboardIcon sx={{ marginRight: "20px" }} /> My History
        </Typography>
        </li>
        <li style={{listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Usage History
        </Typography>
        </li>
        <li style={{listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
        </Typography>
        </li>
        <li style={{listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Plans and Billing
        </Typography>
        </li>
        <li style={{listStyle:"none"}}>
          <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
          <DashboardIcon sx={{ paddingRight: "20px" }} /> Profile Details
        </Typography>
        </li>
        </ul>
        
      </Box>
    </Box>
  );
   
  return (
    <>
     <Box>
       <Container maxWidth='xl'>
          <Box sx={{height:"100px",width:"100%"}}>
            <Grid container>
               
              <Grid xs={12} sm={2.2} sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                {/* hambburger part start */}
                <Box>
            <Grid container>
                
                <Grid item xs={12} sm={0} sx={{ display: { xs: 'block', sm: 'none' } }}>
                <IconButton onClick={() => toggleDrawer()}>
                  <MenuIcon sx={{ color: '#737791', fontSize: '30px' }} />
                </IconButton>
              </Grid>
            </Grid>
            <Drawer
            anchor="left"
            open={open}
            onClose={() => toggleDrawer()}
          >
            {menuItems} {/* Drawer content */}
          </Drawer>
          </Box>
          {/* hamburger part end */}
                    <Box sx={{display:"flex",justifyContent:"flex-start",marginRight:{md:"50px",xs:"0px"}}}>
                 <Image src={logoImage} alt='logo image' className={Hero.LogoImage}/>
                 </Box>
              </Grid>
              <Grid xs={0} sm={9.8} sx={{display:{xs:"none",sm:"flex"},justifyContent:"flex-start",alignItems:"center"}}>
                <Box sx={{display:"flex"}} >
                  <Typography sx={{fontSize:"30px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"42px",color:"#151D48",paddingRight:"60px"}}>
                    Dashboard
                  </Typography>
                  <Box>
                  <input type="text" style={{padding:"10px 0px",borderRadius:"16px",backgroundColor:"#F9FAFB",border:"none",outline:"none",fontFamily:"Poppins",fontSize:"14px",fontWeight:"400",lineHeight:"27px",paddingLeft:"25px"}} placeholder='What do you want to write?...'  />
                  </Box>
                  <Box sx={{paddingLeft:"15px",paddingTop:"10px"}}>
                    <Typography sx={{paddingLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
                      Mode <KeyboardArrowDownIcon/>
                    </Typography>
                    
                  </Box>
                  <Box sx={{paddingLeft:"5px",paddingTop:"10px"}}>
                   
                    <Typography sx={{paddingLeft:"10px",display:"flex",justifyContent:"center",alignItems:"center",color:"#374557",fontSize:"18px",fontWeight:"600",lineHeight:"27px",fontFamily:"Poppins",cursor:"pointer"}}>
                      Chat
                    </Typography>
                  </Box>
                  <Box sx={{padding:"0px 20px"}}>
                    <Button sx={{backgroundColor:'#D7F200',fontSize:"15px",fontFamily:"Poppins",textTransform:"capitalize",lineHeight:"27px",fontWeight:"600",borderRadius:"12px",padding:"11px 15px",color:"#000"}}>
                    Create Content
                    </Button>
                  </Box>
                  <Box sx={{height:"48px",width:"48px",backgroundColor:"#FFFAF1",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"8px",color:"#FFA412",cursor:"pointer"}}>
                    <NotificationsIcon/>
                  </Box>
                  <Box sx={{paddingLeft:"20px",display:"flex"}}>
                    <Image src={dashboardman} alt='dashboardman' style={{width:"60px",height:"60px"}}/>
                    <Box sx={{display:"flex",justifyContent:"flex-start",alignItems:"space-between",flexDirection:"column",height:"60px"}}>
                    <Typography sx={{paddingLeft:"12px",fontSize:"16px",fontFamily:"Poppins",color:"#151D48",lineHeight:"24px",fontWeight:"500"}}>
                      surya 
                       
                    </Typography>
                    <Typography sx={{paddingLeft:"12px",fontSize:"14px",color:"#737791",lineHeight:"20px",fontWeight:"400",fontFamily:"Poppins",paddingTop:"10px",display:"flex",alignItems:"center"}}>
                    Admin  <KeyboardArrowDownIcon sx={{color:"#151D48"}}/>
                    </Typography>
                    </Box>
                   
                  </Box>
                </Box>
              </Grid>
             </Grid>
          </Box>
          {/* top header completed */}
          {/* body part started */}
          <Box sx={{paddingTop:"15px"}}>
            <Grid container>
              <Grid xs={12} md={2.5} sx={{padding:"20px",display:{xs:"none",sm:"block"}}}>
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
                        <Link href='/dashboard' style={{textDecoration:"none"}} passHref> <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",...getLinkStyle('/dashboard')}}>
                         <DashboardIcon sx={{marginRight:"20px"}}/>Dashoard

                        </Typography>
                        </Link>
                        </li>
                    
                    <li style={{listStyle:"none"}}>
                    <Link href='/dashboard/templates' style={{textDecoration:"none"}} passHref> <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",...getLinkStyle('/dashboard/templates')}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   Templates
                    </Typography></Link> 
                    </li>
                     <li style={{listStyle:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Assistant
                    </Typography>
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
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Article Generator
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Image Generator
                    </Typography>
                    </li>
                     <li style={{listStyle:"none"}}> 
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Content Rewriter
                    </Typography> 
                    </li>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Documents
                    </Typography>
                    </ul>
                    <Box sx={{position:"absolute",top:"-16px",left:"35px",}}>
                         <Typography  sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Workflows</Typography>
                    </Box>
                </Box>
                {/* end wokflows */}
                {/* start account parts */}
                <Box sx={{minHeight:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"40px"}}>
                  <ul style={{margin:"0px",padding:"0px"}}>
                    <li style={{listStyle:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   My History
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Usage History
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Image Generator
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Plans and Billing
                    </Typography>
                    </li>
                    <li style={{listStyle:"none"}}>
                      <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"20px"}}/>   Profile Details
                    </Typography>
                    </li>
                    </ul>
                    <Box sx={{position:"absolute",top:"-16px",left:"40px",}}>
                         <Typography  sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Accounts</Typography>
                    </Box>
                </Box>
              </Grid>
              
             
              <Grid xs={12} md={6} sx={{backgroundColor:"#fff",padding:{xs:"20px",sm:"20px"}}}>
                <Box sx={{backgroundColor:"#fff",padding:"20px",borderRadius:"20px"}}>
                <Typography sx={{fontFamily:"Poppins",fontSize:"32px",color:"#05004E",lineHeight:"32px",fontWeight:"500",paddingBottom:"35px"}}>
                Hello, Surya
                </Typography>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{padding:{xs:"12px 20px",sm:"20px"},backgroundColor:"#FFE2E5",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#FA5A7D",borderRadius:"50%",color:"#fff",marginBottom:{xs:"10px",sm:"20px"}}}>
                         <TextSnippetIcon/>
                       </Box>
                       <Typography sx={{fontSize:{sm:"22px",xs:"16px"},color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:{xs:"22px",sm:"32px"},paddingBottom:{xs:"4px",sm:"8px"}}}>
                       0 Words
                       </Typography>
                       <Typography sx={{fontSize:{sm:"20px",xs:"16px"},color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:{xs:"4px",sm:"8px"}}}>
                       Words Generated
                       </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{padding:{xs:"12px 20px",sm:"20px"},backgroundColor:"#FFF4DE",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#FF947A",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <CollectionsIcon/>
                       </Box>
                       <Typography sx={{fontSize:{sm:"22px",xs:"16px"},color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},paddingBottom:{xs:"4px",sm:"8px"}}}>
                       0 Image
                       </Typography>
                       <Typography sx={{fontSize:{xs:"16px",sm:"20px"},color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:{xs:"4px",sm:"8px"}}}>
                       Images Generated
                       </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{padding:{sm:"20px",xs:"12px 20px"},backgroundColor:"#DCFCE7",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#3CD856",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <JoinLeftIcon/>
                       </Box>
                       <Typography sx={{fontSize:{xs:"16px",sm:"22px"},color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},paddingBottom:{xs:"4px",sm:"8px"}}}>
                       5 Words
                       </Typography>
                       <Typography sx={{fontSize:{sm:"20px",xs:"16px"},color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:{xs:"4px",sm:"8px"}}}>
                       Credits <br className={Hero.break} /> Left
                       </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{padding:{xs:"12px 20px",sm:"20px"},backgroundColor:"#F3E8FF",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#BF83FF",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <UpdateIcon/>
                       </Box>
                       <Typography sx={{fontSize:{xs:"16px",sm:"22px"},color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:{xs:"22px",sm:"32px"},paddingBottom:{xs:"4px",sm:"8px"}}}>
                       0 Hours
                       </Typography>
                       <Typography sx={{fontSize:{xs:"16px",sm:"20px"},color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:{xs:"4px",sm:"8px"}}}>
                       Time 
                       <br className={Hero.break} /> Saved
                       </Typography>
                    </Box>
                  </Grid>
                  
                </Grid>
                </Box>
                {/* end of surya part  */}

                <Box sx={{padding:{sm:"20px 25px",xs:"20px 25px"},display:"flex",justifyContent:"space-between"}}>
                  <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"20px",sm:"32px"},fontWeight:"500",lineHeight:"32px",color:"#05004E"}}>
                     For you
                  </Typography>
                 <Box>
                 <Button variant='contained' sx={{backgroundColor:"#D7F200",borderRadius:"8px",color:"#000",boxShadow:"none",fontSize:{xs:"12px",sm:"14px"},fontFamily:"Poppins",textTransform:"capitalize",border:"1px solid #C3D3E2"}}>
                 All Tools 
                    </Button>
                 </Box>
                </Box>
                {/* end for you part  */}
                <Box sx={{backgroundColor:"#fff",padding:"20px 20px",borderRadius:"20px"}}>
                   <Grid container spacing={1}>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:{sm:"25px",xs:"12px 20px"},borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#789FFE",borderRadius:"50%",color:"#fff",marginBottom:{sm:"20px",xs:"10px"}}}>
                         <ListIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{sm:"24px",xs:"18px"},color:"#151D48",lineHeight:{xs:"22px",sm:"32px"},fontWeight:"600"}}>
                       Home Work
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"14px",sm:"16px"},color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:{xs:"10px",sm:"15px"}}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:{sm:"25px",xs:"12px 20px"},borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#DDA840",borderRadius:"50%",color:"#fff",marginBottom:{sm:"20px",xs:"10px"}}}>
                         <SpaceDashboardIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"16px",sm:"24px"},color:"#151D48",lineHeight:"32px",fontWeight:"600"}}>
                       Headline Generator
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"14px",sm:"16px"},color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:{xs:"8px",sm:"15px"}}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                   </Grid>
                </Box>
                {/* start proposal part */}
                <Box sx={{backgroundColor:"#fff",padding:"20px 20px",borderRadius:"20px",marginTop:"20px"}}>
                   <Grid container spacing={1}>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:{xs:"12px 20px",sm:"25px"},borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#41D7A5",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <SignalCellularAltIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"16px",sm:"24px"},color:"#151D48",lineHeight:{xs:"22px",sm:"32px"},fontWeight:"600"}}>
                       Upwork Proposal
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"14px",sm:"16px"},color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:{xs:"8px",sm:"15px"}}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:"25px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#9B69FF",borderRadius:"50%",color:"#fff",marginBottom:{xs:"10px",sm:"20px"}}}>
                         <ListIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"16px",sm:"24px"},color:"#151D48",lineHeight:{xs:"22px",sm:"32px"},fontWeight:"600"}}>
                       Summarize Text

                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:{xs:"14px",sm:"16px"},color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:{xs:"10px",sm:"15px"}}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                   </Grid>
                </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}

              <Grid xs={12} md={3.5} sx={{padding:"25px 0px",backgroundColor:"#fff"}}>
                
                <Grid container sx={{display:"flex",justifyContent:"flex-start"}}>
                  <Grid xs={10} sm={12} sx={{display:"flex",justifyContent:"center",position:"relative"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"20px",xs:"15px"},width:{xs:"100%",sm:"100%"},borderRadius:"20px",border:"1px solid #F8F9FA",boxShadow:"0px 4px 20px #EEEEEE80"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:{xs:"12px",sm:"20px"}}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E"}}>
                         Customer Satisfaction
                         </Typography>
                         </Box>
                        <Box sx={{overflow:"hidden",borderBottom:"1px solid #EDF2F6",paddingBottom:"0px"}}>
                          <Box sx={{position:"",top:"10px",left:"0px"}}>
                            <Image src={image17} alt='image17' style={{width:"100%"}}/>
                          </Box>
                          <Box sx={{position:"absolute",top:"43%",left:"20px"}}>
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
                  <Grid xs={10} sm={11} sx={{marginTop:"10px",display:"flex",justifyContent:"flex-start"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"20px 18px",xs:"15px"},width:{xs:"95%",sm:"100%"},borderRadius:"20px",border:"1px solid #F8F9FA",boxShadow:"0px 4px 20px #EEEEEE80"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:{xs:"12px",sm:"20px"}}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E",paddingBottom:"30px"}}>
                         Sales Mapping by Country
                         </Typography>
                         
                        </Box>
                       <Box sx={{width:"90%",}}>
                        <Image src={worlmapImage} alt='worldimage' style={{width:"380px",height:"230px"}}/>
                       </Box>
                     </Box>
                  </Grid>
                  <Grid xs={10} sm={12} sx={{marginTop:"10px",display:"flex",justifyContent:"flex-start"}}>
                     <Box sx={{backgroundColor:"#fff",padding:{sm:"25px",xs:"15px"},width:{xs:"95%",sm:"100%"},borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:{xs:"16px",sm:"20px"},fontFamily:"Poppins",fontWeight:"600",lineHeight:{sm:"32px",xs:"22px"},color:"#05004E"}}>
                         Target vs Reality
                         </Typography>
                        
                        </Box>
                        <Box sx={{width:"90%",}}>
                        <Image src={chartBar} alt='worldimage' style={{width:"334px",height:"157px"}}/>
                       </Box>
                       <Box sx={{paddingTop:"20px",display:"flex",justifyContent:"space-around",alignItems:"flex-start"}}>
                        <Typography sx={{display:"flex",alignItems:"flex-start",fontSize:"12px",color:"#151D48",lineHeight:"16px",fontWeight:"600",fontFamily:"Poppins"}}>
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
          </Box>
         
       </Container>
       </Box>
    </>
  )
}

export default Templates
