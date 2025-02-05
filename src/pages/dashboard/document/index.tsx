"use Client"
import { Box,  Grid, Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'

import Hero from '../../../pages/dashboard.module.css'


import SearchIcon from '@mui/icons-material/Search';

import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'




const Content = () => {



    





    return (
        <>
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

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/image">
                                        Documents
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#fff", padding: "20px", minHeight: "100vh" }}>

                                <Typography sx={{ textAlign: "left", fontFamily: "Quicksand", fontSize: { xs: "32px", sm: "44.14px" }, lineHeight: { sm: "65.13px", xs: "30px" }, fontWeight: "600", color: "#000000", paddingBottom: { xs: "30px", sm: "5px" } }}>
                                    Documents
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { sm: "flex-end", xs: "flex-start" } }}>
                                    <input placeholder='search....' type='text' style={{ padding: "20px", borderRadius: "10px 0px 0px 10px", fontSize: "20px", lineHeight: "25px", fontFamily: "Quicksand", fontWeight: "400", border: "1px solid #0000001A", outline: "none" }} className={Hero.inputField} />
                                    <Box sx={{ height: { sm: "70px", xs: "60px" }, width: { sm: "64px", xs: "45px" }, backgroundColor: "#D7F200", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 10px 10px 0px" }}>
                                        <SearchIcon sx={{ fontSize: "28px", fontWeight: "600" }} />
                                    </Box>
                                </Box>
                                <Typography sx={{ textAlign: "left", fontFamily: "Quicksand", fontSize: { xs: "16px", sm: "20.14px" }, lineHeight: { sm: "25px", xs: "25px" }, fontWeight: "400", color: "#000000", paddingTop: { sm: "10px", xs: "30px" } }}>
                                    You haven’t saved any document yet.
                                </Typography>




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

export default Content
