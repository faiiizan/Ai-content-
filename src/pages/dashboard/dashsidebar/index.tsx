"use Client"
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import FeedIcon from '@mui/icons-material/Feed';
import { SiGoogleassistant } from "react-icons/si"; 
import { PiChartPieSliceFill } from "react-icons/pi";
import { Menu as MenuIcon, Dashboard as DashboardIcon } from '@mui/icons-material';

import {  useRouter } from 'next/router'

const Dashsidebar = () => {
      const router = useRouter();
    const getLinkStyle = (path: string) => {
        return router.pathname === path
          ? { backgroundColor: "#D7F200",padding:"10px 15px",color:"#000",borderRadius:"16px", } // active style
          : {};
      };
    return (
        <>
            
                <Grid xs={12} md={2.5} sx={{ padding: "20px", display: { xs: "none", md: "block", sm: "none" } }}>
                    <Box sx={{ display: { sm: "flex" }, justifyContent: "space-between", borderBottom: "4px solid #4AB58E", borderRadius: "2px", marginBottom: "40px" }}>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>
                            Credits
                        </Typography>
                        <Typography sx={{ fontFamily: "Poppins", fontSize: "15px", lineHeight: "22.5px", fontWeight: "400" }}>
                            5000 words left
                        </Typography>
                    </Box>
                    {/* start dashboard part */}
                    <Box sx={{ height: "100px", width: "90%", border: '1px solid #0000001A', borderRadius: "30px", padding: "40px 0px 60px 20px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", position: "relative" }}>
                        <ul style={{ margin: "0px", padding: "0px" }}>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard' passHref style={{ textDecoration: "none" }}>
                                    <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791",padding:"10px 20px", ...getLinkStyle('/dashboard') }}>
                                        <PiChartPieSliceFill style={{ marginRight: "20px" }} />Dashoard

                                    </Typography>
                                </Link>
                            </li>

                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/templates' style={{ textDecoration: "none" }}> 
                                <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", padding:"10px 20px",...getLinkStyle('/dashboard/templates')  }}>
                                    <DashboardIcon sx={{ marginRight: "20px" }} />   Templates
                                </Typography></Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/assistant' style={{ textDecoration: "none" }}>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791",padding:"10px 20px", textAlign: "left",...getLinkStyle('/dashboard/assistant') }}>
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
                                    <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791",padding:"10px 20px",...getLinkStyle('/dashboard/analyst') }}>
                                        <DashboardIcon sx={{ marginRight: "20px" }} />   Data Analyst
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/article' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/article')}}>
                                        <FeedIcon sx={{ paddingRight: "20px" }} />   Article Generator
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/image' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791",padding:"10px 20px",...getLinkStyle('/dashboard/image'), textAlign: "left", }}>
                                        <InsertPhotoIcon sx={{ paddingRight: "20px" }} />   Image Generator
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/contentwriter' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/contentwriter') }}>
                                        <ContentCopyIcon sx={{ paddingRight: "20px" }} />   Content Rewriter
                                    </Typography>
                                </Link>
                            </li>
                            <Link href='/dashboard/document' style={{ textDecoration: "none" }} passHref>
                                <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/document') }}>
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
                                    <Typography sx={{ display: "flex", alignItems: "center", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791",padding:"10px 20px",...getLinkStyle('/dashboard/history') }}>
                                        <HistoryIcon sx={{ marginRight: "20px" }} />   My History
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/usage' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/usage') }}>
                                        <DashboardIcon sx={{ paddingRight: "20px" }} />   Usage History
                                    </Typography>
                                </Link>
                            </li>

                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/plans' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/plans') }}>
                                        <ReceiptIcon sx={{ paddingRight: "20px" }} />   Plans and Billing
                                    </Typography>
                                </Link>
                            </li>
                            <li style={{ listStyle: "none" }}>
                                <Link href='/dashboard/profile' style={{ textDecoration: "none" }} passHref>
                                    <Typography sx={{ display: "flex", alignItems: "flex-start", fontFamily: "Poppins", fontSize: "18px", lineHeight: "27px", fontWeight: "400", color: "#737791", paddingTop: "20px", textAlign: "left",padding:"10px 20px",...getLinkStyle('/dashboard/profile') }}>
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
            
        </>
    )
}

export default Dashsidebar
