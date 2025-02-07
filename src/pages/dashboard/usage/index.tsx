"use Client"
import { Box,  Grid,  Typography, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'

import Dashsidebar from '../dashsidebar'
import Dashnav from '../dashnav'
import DashboardLayout from '@/components/layout/DashboardLayout'




const History = () => {



 




    return (
        <>
        <DashboardLayout>
            <Box>
                <Dashnav/>
                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px" }}>
                    <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Dashsidebar/>

                        <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
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
        </DashboardLayout>
        </>
    )
}

export default History
