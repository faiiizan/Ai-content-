"use Client"
import { Box, Button, Container, Drawer, Grid, IconButton, Typography, Menu, MenuItem, Divider, Breadcrumbs, Link as MUILink, } from '@mui/material'
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
import { SiGoogleassistant } from "react-icons/si";
import { PiChartPieSliceFill } from "react-icons/pi";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PaidIcon from '@mui/icons-material/Paid';
import PortraitIcon from '@mui/icons-material/Portrait';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import RestoreIcon from '@mui/icons-material/Restore';




const History = () => {



    const [open, setOpen] = useState(false); // State to control drawer visibility

    // Function to toggle the drawer open/close
    const toggleDrawer = () => {

        setOpen(prevState => !prevState);
    };

    const router = useRouter();

    const getLinkStyle = (path: string) => {
        return router.pathname === path
          ? { backgroundColor: "#D7F200",padding:"10px 15px",color:"#000",borderRadius:"16px",marginTop:"20px",marginLeft:"0px" } // active style
          : {};
      };

    const menuItems = (
        <Box sx={{ width: { xs: 250, sm: "500px" }, padding: { xs: "15px 10px", sm: "20px 30px" } }}>
            {/* Credits Section */}
            <Box>
                <Image src={logoImage} alt='logo' style={{ margin: "auto", width: "180px", paddingLeft: "30px" }} className={Hero.navLogo} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", borderBottom: { xs: "4px solid #4AB58E", sm: "8px solid #4AB58E" }, borderRadius: { xs: "2px", sm: "4px" }, marginBottom: "40px", marginTop: "20px" }}>
                <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: "15px", sm: "18px" }, lineHeight: "22.5px", fontWeight: { xs: "400", sm: "700" } }}>Credits</Typography>
                <Typography sx={{ fontFamily: "Poppins", fontSize: { xs: "15px", sm: "18px" }, lineHeight: "22.5px", fontWeight: { xs: "400", sm: "700" } }}>5000 words left</Typography>
            </Box>

            {/* Dashboard Section */}

            <Box sx={{ height: "100px", width: { xs: "100%", sm: "90%" }, border: { xs: "none", sm: 'none' }, borderRadius: { sm: "none", xs: "none" }, padding: { xs: "0px 0px 60px 10px", sm: "30px 0px 60px 30px" }, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", borderBottom: { xs: "1px solid #0000001A", sm: "1px solid #0000001A" } }}>
                <ul style={{ padding: "0px", margin: "0px" }}>

                    <li style={{ textDecoration: "none", listStyle: "none" }}>
                        <Link passHref href='/dashboard' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: { xs: "20px", sm: "27px" }, fontWeight: { xs: "400", sm: "700" }, color: "#737791" }}>
                                <DashboardIcon sx={{ marginRight: "20px" }} /> Dashboard
                            </Typography>
                        </Link>
                    </li>

                    <li style={{ textDecoration: "none", listStyle: "none" }}>
                        <Link passHref href='/dashboard/templates' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: { xs: "20px", sm: "27px" }, fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px" }}>
                                <DashboardIcon sx={{ marginRight: "20px" }} /> Templates
                            </Typography>
                        </Link>
                    </li>
                    <li style={{ textDecoration: "none", listStyle: "none" }}>
                        <Link passHref href='/dashboard/assistant' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: { xs: "20px", sm: "27px" }, fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                                <DashboardIcon sx={{ paddingRight: "20px" }} /> Assistant
                            </Typography>
                        </Link>
                    </li>

                </ul>
            </Box>

            {/* Workflows Section */}
            <Box sx={{ minHeight: "100px", width: { xs: "100%", sm: "90%" }, border: { xs: "none", sm: "none" }, borderRadius: { sm: "none", xs: "none" }, padding: { xs: "0px 0px 30px 10px", sm: "30px 0px 50px 30px" }, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "10px", borderBottom: { sm: "1px solid #0000001A" }, }}>
                <ul style={{ padding: "0px", margin: "0px" }}>

                    <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", position: "absolute", top: "-30px", left: { sm: "16px", xs: "0px" }, padding: "5px 15px 5px 10px", backgroundColor: "#fff", }}>
                        Workflows
                    </Typography>
                    <li style={{ listStyle: "none" }}>
                        <Link passHref href='/dashboard/analyst' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px" }}>
                                <DashboardIcon sx={{ marginRight: "20px" }} /> Data Analyst
                            </Typography>
                        </Link>
                    </li>
                    <Link passHref href='/dashboard/article' style={{ textDecoration: "none" }}>
                        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                            <DashboardIcon sx={{ paddingRight: "20px" }} /> Article Generator
                        </Typography>
                    </Link>
                    <Link passHref href='/dashboard/image' style={{ textDecoration: "none" }}>
                        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                            <DashboardIcon sx={{ paddingRight: "20px" }} /> Image Generator
                        </Typography>
                    </Link>
                    <Link passHref href='/dashboard/contentwriter' style={{ textDecoration: "none" }}>
                        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                            <DashboardIcon sx={{ paddingRight: "20px" }} /> Content Rewriter
                        </Typography>
                    </Link>
                    <Link passHref href='/dashboard/document' style={{ textDecoration: "none" }}>
                        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                            <DashboardIcon sx={{ paddingRight: "20px" }} /> Documents
                        </Typography>
                    </Link>
                </ul>



            </Box>

            {/* Account Section */}
            <Box sx={{ minHeight: "100px", width: { xs: "100%", sm: "90%" }, border: { xs: "none", sm: 'none' }, borderRadius: "30px", padding: { xs: "0px 0px 30px 10px", sm: "30px 0px 50px 30px" }, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "20px" }}>
                <ul style={{ padding: "0px", margin: "0px" }}>
                    <li style={{ listStyle: "none" }}>

                        <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "16px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", position: "absolute", top: "-40px", left: { sm: "16px", xs: "0px" }, padding: "5px 15px 5px 10px", backgroundColor: "#fff", }}>
                            Accounts
                        </Typography>
                    </li>

                    <li style={{ listStyle: "none" }} >
                        <Link passHref href='/dashboard/history' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: { xs: "18px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px" }}>
                                <DashboardIcon sx={{ marginRight: "20px" }} /> My History
                            </Typography>
                        </Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <Link passHref href='/dashboard/usage' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "18px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                                <DashboardIcon sx={{ paddingRight: "20px" }} /> Usage History
                            </Typography>
                        </Link>
                    </li>

                    <li style={{ listStyle: "none" }}>
                        <Link passHref href='/dashboard/plans' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "18px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                                <DashboardIcon sx={{ paddingRight: "20px" }} /> Plans and Billing
                            </Typography>
                        </Link>
                    </li>
                    <li style={{ listStyle: "none" }}>
                        <Link passHref href='/dashboard/profile' style={{ textDecoration: "none" }}>
                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: { xs: "18px", sm: "22px" }, lineHeight: "27px", fontWeight: { xs: "400", sm: "700" }, color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                                <DashboardIcon sx={{ paddingRight: "20px" }} /> Profile Details
                            </Typography>
                        </Link>
                    </li>
                </ul>

            </Box>
        </Box>
    );



    const [anchorEll, setAnchorEll] = useState<HTMLElement | null>(null);

    const handleClickk = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEll(event.currentTarget);
    };

    const handleClosee = () => {
        setAnchorEll(null);
    };




    return (
        <>
            <Box>
                <Container maxWidth='xl' sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                    <Box sx={{ height: "65px", width: "100%" }}>
                        <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>

                            <Grid xs={12} sm={2.5} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                {/* hambburger part start */}
                                <Box>
                                    <Grid container>

                                        <Grid item xs={12} sm={12} md={0} sx={{ display: { xs: 'block', md: 'none', sm: "block" } }}>
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
                                                width: open ? { xs: "280px", sm: '580px' } : '240px', // Customize the width based on the open state
                                                transition: 'width 0.3s', // Smooth transition when resizing
                                            },
                                        }}
                                    >
                                        {menuItems} {/* Drawer content */}
                                    </Drawer>
                                </Box>
                                {/* hamburger part end */}
                                <Box sx={{ display: "flex", justifyContent: "flex-start", marginRight: { md: "70px", xs: "0px" } }}>
                                    <Image src={logoImage} alt='logo image' className={Hero.LogoImage} />
                                </Box>
                            </Grid>
                            <Grid xs={0} sm={9.5} sx={{ display: { xs: "none", md: "flex" }, justifyContent: "flex-end", alignItems: "center" }}>

                                <Box sx={{ display: "flex", justifyContent: "flex-end" }} >


                                    <Box sx={{ padding: "0px 45px", width: "150px" }}>
                                        <Link href='/dashboard/templates'>
                                        <Button variant='contained' sx={{ width: "100%", fontSize: "14px", fontWeight: "600", fontFamily: "Poppins", textTransform: "capitalize", padding: "15px 10px", boxShadow: "none", backgroundColor: "#D7F200", color: "#000000", borderRadius: "12px" }}>
                                            create content
                                        </Button>
                                        </Link>
                                    </Box>
                                    <Link href='/dashboard/assitant'>
                                    <Box sx={{ height: "48px", width: "48px", backgroundColor: "#FFFAF1", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", color: "#FFA412", cursor: "pointer", marginLeft: "5px", }}>
                                        <ChatIcon sx={{ color: "#000" }} />
                                    </Box>
                                    </Link>
                                    <Box sx={{ paddingLeft: "45px", display: "flex", cursor: "pointer", justifyContent: "center" }}>
                                        <Image src={dashboardman} alt='dashboardman' style={{ width: "60px", height: "60px" }} />
                                        <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "space-between", flexDirection: "column", height: "60px", paddingLeft: "20px" }}>
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
                                                        width: "240px",// You can adjust this width
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
                                                <Link href='/section5' style={{ textDecoration: "none", color: "#000" }}>
                                                    <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} >
                                                        <ShowChartIcon sx={{ marginRight: "15px", paddingLeft: "5px" }} />Upgarde Plan
                                                    </MenuItem>
                                                </Link>
                                                <Link href='dashboard/history' style={{ textDecoration: "none", color: "#000" }}>
                                                    <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><RestoreIcon sx={{ marginRight: "15px", paddingLeft: "5px" }} />My History
                                                    </MenuItem>
                                                </Link>
                                                <Link href='dashboard/usage' style={{ textDecoration: "none", color: "#000" }}>
                                                    <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><AutoGraphIcon sx={{ marginRight: "15px", paddingLeft: "5px" }} />Usage History
                                                    </MenuItem>
                                                </Link>
                                                <Link href='dashboard/plans' style={{ textDecoration: "none", color: "#000" }}>
                                                    <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><PaidIcon sx={{ marginRight: "15px", paddingLeft: "5px" }} />Plans and Billings
                                                    </MenuItem>
                                                </Link>
                                                <Link href='dashboard/profile' style={{ textDecoration: "none", color: "#000" }}>
                                                    <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start", paddingLeft: "15px" }} ><PortraitIcon sx={{ marginRight: "15px", paddingLeft: "5px" }} />Profile Details
                                                    </MenuItem>
                                                </Link>
                                                <Divider sx={{ my: 1, borderColor: '#e0e0e0', borderWidth: '1px' }} />
                                                <MenuItem onClick={handleClosee} sx={{ fontFamily: "Poppins", fontWeight: "500", letterSpacing: "1px", paddingTop: "20px", display: "flex", alignItems: "flex-start" }} ><LogoutIcon sx={{ marginRight: "25px", paddingLeft: "15px" }} />Log Out
                                                </MenuItem>
                                            </Menu>

                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingLeft: "15px" }} onClick={handleClickk}>
                                            <KeyboardArrowDownIcon />
                                        </Box>

                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px" }}>
                    <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Grid xs={12} md={2.3} sx={{ padding: "20px", display: { xs: "none", md: "block", sm: "none" } }}>
                            <Box sx={{ display: { sm: "flex" }, justifyContent: "space-between", borderBottom: "4px solid #4AB58E", borderRadius: "2px", marginBottom: "40px" }}>
                                <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>
                                    Credits
                                </Typography>
                                <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>
                                    5000 words left
                                </Typography>
                            </Box>
                            {/* start dashboard part */}
                            <Box sx={{ height: "100px", width: "90%", border: '1px solid #0000001A', borderRadius: "30px", padding: "25px 0px 40px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative" }}>
                                <ul style={{ margin: "0px", padding: "0px" }}>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard' passHref style={{ textDecoration: "none" }}>
                                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", }}>
                                                <PiChartPieSliceFill style={{ marginRight: "20px" }} />Dashoard

                                            </Typography>
                                        </Link>
                                    </li>

                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/templates' style={{ textDecoration: "none" }}>
                                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px" }}>
                                                <DashboardIcon sx={{ marginRight: "20px" }} />   Templates
                                            </Typography></Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/assistant' style={{ textDecoration: "none" }}>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left" }}>
                                                <SiGoogleassistant style={{ paddingRight: "20px" }} />   Assistant
                                            </Typography>
                                        </Link>
                                    </li>
                                </ul>
                            </Box>
                            {/* end dashboard part */}
                            {/* start workflows */}
                            <Box sx={{ minHeight: "100px", width: "90%", border: '1px solid #0000001A', borderRadius: "30px", padding: "50px 0px 20px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative", marginTop: "40px" }}>
                                <ul style={{ margin: "0px", padding: "0px" }}>

                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/analyst' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791" }}>
                                                <DashboardIcon sx={{ marginRight: "20px" }} />   Data Analyst
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/article' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left", }}>
                                                <FeedIcon sx={{ paddingRight: "20px" }} />   Article Generator
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/image' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left", }}>
                                                <InsertPhotoIcon sx={{ paddingRight: "20px" }} />   Image Generator
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/contentwriter' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left", }}>
                                                <ContentCopyIcon sx={{ paddingRight: "20px" }} />   Content Rewriter
                                            </Typography>
                                        </Link>
                                    </li>
                                    <Link href='/dashboard/document' style={{ textDecoration: "none" }} passHref>
                                        <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left",  }}>
                                            <DocumentScannerIcon sx={{ paddingRight: "20px" }} />   Documents
                                        </Typography>
                                    </Link>
                                </ul>
                                <Box sx={{ position: "absolute", top: "-20px", left: "55px", }}>
                                    <Typography sx={{ background: "#fff", borderRadius: "16px", color: "#403F3F", padding: "8px 25px", boxShadow: "none", textTransform: "capitalize", fontSize: "18px", fontFamily: "Poppins", fontWeight: "600" }}>Workflows</Typography>
                                </Box>
                            </Box>
                            {/* end wokflows */}
                            {/* start account parts */}
                            <Box sx={{ minHeight: "100px", width: "100%", border: '1px solid #0000001A', borderRadius: "30px", padding: "50px 0px 20px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "40px" }}>
                                <ul style={{ margin: "0px", padding: "0px" }}>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/history' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791" }}>
                                                <HistoryIcon sx={{ marginRight: "20px" }} />   My History
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/usage' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left",...getLinkStyle('/dashboard/usage') }}>
                                                <DashboardIcon sx={{ paddingRight: "20px" }} />   Usage History
                                            </Typography>
                                        </Link>
                                    </li>

                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/plans' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left", }}>
                                                <ReceiptIcon sx={{ paddingRight: "20px" }} />   Plans and Billing
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li style={{ listStyle: "none" }}>
                                        <Link href='/dashboard/profile' style={{ textDecoration: "none" }} passHref>
                                            <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left", }}>
                                                < PersonIcon sx={{ paddingRight: "20px" }} />   Profile Details
                                            </Typography>
                                        </Link>
                                    </li>
                                </ul>
                                <Box sx={{ position: "absolute", top: "-20px", left: "60px", }}>
                                    <Typography sx={{ background: "#fff", borderRadius: "16px", color: "#403F3F", padding: "8px 25px", boxShadow: "none", textTransform: "capitalize", fontSize: "18px", fontFamily: "Poppins", fontWeight: "600" }}>Accounts

                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid container xs={12} sm={12} md={9.7} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/usage">
                                        Usage History
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#F0F5F8", padding: "20px", minHeight: "100vh", borderRadius: "23px 23px 0px 0px" }}>

                                <Grid container>
                                    <Grid xs={12} sm={10.2} md={10.5}>
                                        <Box sx={{ padding: "25px", backgroundColor: "#fff", borderRadius: "10px" }}>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: { sm: "35px", xs: "28px" }, color: "#000000", lineHeight: "52.5px" }}>
                                                Usage
                                            </Typography>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: { sm: "18px", xs: "14px" }, color: "#000000", lineHeight: "27px", opacity: "86%", paddingTop: "20px" }}>
                                                Below you’ll find a summary of word usage per day. All dates and times are UTC-based.
                                            </Typography>
                                            <Box sx={{ paddingTop: "20px" }}>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        6
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        5
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        4
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        3
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        2
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        1
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                                                    <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                                                        0
                                                    </Typography>
                                                    <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginTop: "60px", backgroundColor: "#fff", borderRadius: "10px", padding: "20px" }}>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: { sm: "35px", xs: "28px" }, lineHeight: { sm: "52.5px", xs: "28px" }, color: "#000" }}>
                                                Active plan: Free
                                            </Typography>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: { sm: "18px", xs: "14px" }, lineHeight: "27px", color: "#020202DB", padding: { sm: "20px 0px 12px 0px", xs: "10px 0px 12px 0px" } }}>
                                                Words generated in this month:0(0%).
                                            </Typography>
                                            <Box sx={{ border: "1px solid #D9D9D9", paddingTop: "10px", backgroundColor: "#D9D9D9", borderRadius: "6px" }}>

                                            </Box>
                                            <Typography sx={{ paddingTop: "20px", fontFamily: "Poppins", fontWeight: "400", fontSize: { sm: "18px", xs: "14px" }, lineHeight: "27px", color: "#020202DB" }}>
                                                Credits will  reseton: Feb 15,2025 10:16 AM
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>



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

export default History
