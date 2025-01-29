import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logoImage from '../app/Assets/Imges/logo.svg'
import Image from 'next/image'
import '../pages/dashboard.module.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import dashboardman from '../app/Assets/Imges/dasboardman.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CollectionsIcon from '@mui/icons-material/Collections';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import ListIcon from '@mui/icons-material/List';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FileCopyIcon from '@mui/icons-material/FileCopy';
const dashboard = () => {
  return (
    <>
     <Box>
       <Container maxWidth='xl'>
          <Box sx={{height:"100px",width:"100%"}}>
            <Grid container>
              <Grid xs={6} sm={2.2}>
                 <Image src={logoImage} alt='logo image'/>
              </Grid>
              <Grid xs={6} sm={9.8} sx={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
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
              <Grid xs={12} md={2.5} sx={{padding:"20px"}}>
                <Box sx={{display:"flex",justifyContent:"space-between",borderBottom:"4px solid #4AB58E",borderRadius:"2px",marginBottom:"40px"}}>
                  <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
                  Credits
                  </Typography>
                  <Typography sx={{fontFamily:"Poppins",fontSize:"15px",lineHeight:"22.5px",fontWeight:"400"}}>
                  5000 words left
                  </Typography>
                </Box>
                {/* start dashboard part */}
                <Box sx={{height:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"40px 0px 10px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative"}}>
                    <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"20px"}}/>   Templates
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"32px"}}/>   Assistant
                    </Typography>
                    <Box sx={{position:"absolute",top:"-16px",left:"40px",}}>
                         <Button variant='contained' sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Dashoard</Button>
                    </Box>
                </Box>
                {/* end dashboard part */}
                {/* start workflows */}
                <Box sx={{minHeight:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"40px"}}>
                    <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"56px"}}/>   Data Analyst
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"22px"}}/>   Article Generator
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"22px"}}/>   Image Generator
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"30px"}}/>   Content Rewriter
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"72px"}}/>   Documents
                    </Typography>
                    <Box sx={{position:"absolute",top:"-16px",left:"40px",}}>
                         <Button variant='contained' sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Workflows</Button>
                    </Box>
                </Box>
                {/* end wokflows */}
                {/* start account parts */}
                <Box sx={{minHeight:"100px",width:"100%",border:'1px solid #0000001A',borderRadius:"30px",padding:"50px 0px 20px 0px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",marginTop:"40px"}}>
                    <Typography sx={{display:"flex",alignItems:"center",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791"}}>
                       <DashboardIcon sx={{marginRight:"56px"}}/>   My History
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"22px"}}/>   Usage History
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"22px"}}/>   Image Generator
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"30px"}}/>   Plans and Billing
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"flex-start",fontFamily:"Poppins",fontSize:"18px",lineHeight:"27px",fontWeight:"400",color:"#737791",paddingTop:"20px",textAlign:"left",}}>
                       <DashboardIcon sx={{paddingRight:"72px"}}/>   Profile Details
                    </Typography>
                    <Box sx={{position:"absolute",top:"-16px",left:"40px",}}>
                         <Button variant='contained' sx={{background:"#D7F200",borderRadius:"16px",color:"#000",padding:"8px 35px",boxShadow:"none",textTransform:"capitalize",fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Workflows</Button>
                    </Box>
                </Box>
              </Grid>
              {/* end hamburger part  */}
              <Grid xs={12} md={6} sx={{backgroundColor:"#F8F9FA",padding:"20px"}}>
                <Box sx={{backgroundColor:"#fff",padding:"20px",borderRadius:"20px"}}>
                <Typography sx={{fontFamily:"Poppins",fontSize:"32px",color:"#05004E",lineHeight:"32px",fontWeight:"500",paddingBottom:"35px"}}>
                Hello, Surya
                </Typography>
                <Grid container spacing={4}>
                  <Grid xs={12} sm={4} item>
                    <Box sx={{padding:"20px",backgroundColor:"#FFE2E5",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#FA5A7D",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <TextSnippetIcon/>
                       </Box>
                       <Typography sx={{fontSize:"22px",color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",paddingBottom:"8px"}}>
                       0 Words
                       </Typography>
                       <Typography sx={{fontSize:"20px",color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:"8px"}}>
                       Words Generated
                       </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box sx={{padding:"20px",backgroundColor:"#FFF4DE",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#FF947A",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <CollectionsIcon/>
                       </Box>
                       <Typography sx={{fontSize:"22px",color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",paddingBottom:"8px"}}>
                       0 Images
                       </Typography>
                       <Typography sx={{fontSize:"20px",color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:"8px"}}>
                       Images Generated
                       </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <Box sx={{padding:"20px",backgroundColor:"#DCFCE7",borderRadius:"16px"}}>
                       <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#3CD856",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <JoinLeftIcon/>
                       </Box>
                       <Typography sx={{fontSize:"22px",color:"#151D48",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",paddingBottom:"8px"}}>
                       5 Words
                       </Typography>
                       <Typography sx={{fontSize:"20px",color:"#425166",fontFamily:"Poppins",fontWeight:"500",lineHeight:"24px",paddingBottom:"8px"}}>
                       Credits <br /> Left
                       </Typography>
                    </Box>
                  </Grid>
                  
                </Grid>
                </Box>
                {/* end of surya part  */}

                <Box sx={{padding:"20px 25px",display:"flex",justifyContent:"space-between"}}>
                  <Typography sx={{fontFamily:"Poppins",fontSize:"32px",fontWeight:"500",lineHeight:"32px",color:"#05004E"}}>
                     For you
                  </Typography>
                 <Box>
                 <Button variant='contained' sx={{backgroundColor:"#D7F200",borderRadius:"8px",color:"#000",boxShadow:"none",fontSize:"14px",fontFamily:"Poppins",textTransform:"capitalize",border:"1px solid #C3D3E2"}}>
                 All Tools 
                    </Button>
                 </Box>
                </Box>
                {/* end for you part  */}
                <Box sx={{backgroundColor:"#fff",padding:"20px 20px",borderRadius:"20px"}}>
                   <Grid container spacing={1}>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:"25px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#789FFE",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <ListIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"24px",color:"#151D48",lineHeight:"32px",fontWeight:"600"}}>
                       Home Work
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"16px",color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:"15px"}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:"25px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#DDA840",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <SpaceDashboardIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"24px",color:"#151D48",lineHeight:"32px",fontWeight:"600"}}>
                       Headline Generator
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"16px",color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:"15px"}}>
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
                        <Box sx={{backgroundColor:"#F6F6F6",padding:"25px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#41D7A5",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <SignalCellularAltIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"24px",color:"#151D48",lineHeight:"32px",fontWeight:"600"}}>
                       Upwork Proposal
                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"16px",color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:"15px"}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                     <Grid xs={12} md={6} item>
                        <Box sx={{backgroundColor:"#F6F6F6",padding:"25px",borderRadius:"16px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                        <Box sx={{height:"40px",width:"40px",display:'flex',justifyContent:"center",alignItems:"center",backgroundColor:"#9B69FF",borderRadius:"50%",color:"#fff",marginBottom:"20px"}}>
                         <ListIcon/>
                       </Box>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"24px",color:"#151D48",lineHeight:"32px",fontWeight:"600"}}>
                       Summarize Text

                       </Typography>
                       <Typography sx={{fontFamily:"Poppins",fontSize:"16px",color:"#151D48",lineHeight:"24px",fontWeight:"400",textAlign:"center",paddingTop:"15px"}}>
                       Assists with homework writing by providing suggestions for grammar, style, and content improvements.
                       </Typography>
                        </Box>
                     </Grid>
                   </Grid>
                </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}
              <Grid xs={12} md={3.5} sx={{padding:"25px 0px",backgroundColor:"#F8F9FA"}}>
                <Typography sx={{fontSize:"32px",fontFamily:"Poppins",color:"#05004E",lineHeight:"32px",fontWeight:"500",paddingBottom:"20px"}}>
                Most Popular
                </Typography>
                <Grid container>
                  <Grid xs={12} sm={10}>
                     <Box sx={{backgroundColor:"#fff",padding:"20px",width:"100%",borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #D4E1E9",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",color:"#05004E"}}>
                         Question Generator
                         </Typography>
                         <Box sx={{height:"29px",width:"29px",borderRadius:"8px",border:"2px solid #1C274C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <QuestionMarkIcon/>
                         </Box>
                        </Box>
                        <Typography sx={{padding:"20px 12px 0px 12px",fontSize:"16px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"23px",color:"#444444"}}>
                        AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document.
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid xs={12} sm={10} sx={{marginTop:"10px"}}>
                     <Box sx={{backgroundColor:"#fff",padding:"20px",width:"100%",borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #D4E1E9",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",color:"#05004E"}}>
                         Keyword Generator
                         </Typography>
                         <Box sx={{height:"29px",width:"29px",borderRadius:"8px",border:"2px solid #1C274C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <ListIcon/>
                         </Box>
                        </Box>
                        <Typography sx={{padding:"20px 12px 0px 12px",fontSize:"16px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"23px",color:"#444444"}}>
                        AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document.
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid xs={12} sm={10} sx={{marginTop:"10px"}}>
                     <Box sx={{backgroundColor:"#fff",padding:"20px",width:"100%",borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #D4E1E9",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",color:"#05004E"}}>
                         Upwork Profile Descript
                         </Typography>
                         <Box sx={{height:"29px",width:"29px",borderRadius:"8px",border:"2px solid #1C274C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <PermIdentityIcon/>
                         </Box>
                        </Box>
                        <Typography sx={{padding:"20px 12px 0px 12px",fontSize:"16px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"23px",color:"#444444"}}>
                        AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document.
                        </Typography>
                     </Box>
                  </Grid>
                  <Grid xs={12} sm={10} sx={{marginTop:"10px"}}>
                     <Box sx={{backgroundColor:"#fff",padding:"20px",width:"100%",borderRadius:"20px",border:"1px solid #F8F9FA"}}>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #D4E1E9",paddingBottom:"20px"}}>
                         <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600",lineHeight:"32px",color:"#05004E"}}>
                         Plagiarism Checker
                         </Typography>
                         <Box sx={{height:"29px",width:"29px",borderRadius:"8px",border:"2px solid #1C274C",display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <FileCopyIcon/>
                         </Box>
                        </Box>
                        <Typography sx={{padding:"20px 12px 0px 12px",fontSize:"16px",fontFamily:"Poppins",fontWeight:"400",lineHeight:"23px",color:"#444444"}}>
                        AI-powered tool that uses natural language processing algorithms to generate high-quality questions for any given topic or document.
                        </Typography>
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

export default dashboard
