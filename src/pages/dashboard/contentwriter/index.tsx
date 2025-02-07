"use Client"
import { Box, Grid, Typography,  MenuItem,Breadcrumbs, Link as MUILink, TextField, } from '@mui/material'
import React from 'react'
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import DashboardLayout from '@/components/layout/DashboardLayout'





const Contentwriter = () => {



    

    

    const currencies = [
        {
            value: 'Hindi',
            label: 'Hindi',
        },
        {
            value: 'English',
            label: 'English',
        },
        {
            value: 'Bengali',
            label: 'Bengali',
        },
        {
            value: 'Urdu',
            label: 'Urdu',
        },
    ];


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

                        <Grid container xs={12} sm={12} md={9.7} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/image">
                                        Image Generator
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#fff", padding: "20px", minHeight: "100vh" }}>

                                <Typography sx={{ textAlign: "center", fontFamily: "Quicksand", fontSize: { xs: "32px", sm: "44px" }, lineHeight: { sm: "65.13px", xs: "30px" }, fontWeight: "600", color: "#000000" }}>
                                    Rewriter Your Content Over Here
                                </Typography>
                                <Typography sx={{ textAlign: "center", fontFamily: "Quicksand", fontSize: { sm: "19.62px", xs: "18px" }, lineHeight: "28px", fontWeight: "400", color: "#000000", paddingTop: "10px" }}>
                                    AI to rewrite the current content and generate fresh, captivating content that stands out.
                                </Typography>
                                <Box sx={{ paddingTop: "50px" }}>


                                </Box>

                                <Box sx={{ paddingTop: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Grid md={10} sm={10}>

                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="select your Language"
                                                    placeholder='select your Language'
                                                    fullWidth
                                                    sx={{
                                                        '& .MuiInputBase-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the input text
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222",
                                                            borderRadius: "10px"
                                                        },
                                                        '& .MuiSelect-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the select options
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the label
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                    }}
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Box>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Industry Specific"
                                                    placeholder='Industry Specific'
                                                    fullWidth
                                                    sx={{
                                                        fontFamily: "Quicksand",
                                                        '& .MuiInputBase-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the input text
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222",
                                                            borderRadius: "10px"
                                                        },
                                                        '& .MuiSelect-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the select options
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the label
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                    }}
                                                >
                                                    {currencies.map((option) => (
                                                        <MenuItem key={option.value} value={option.value}>
                                                            {option.label}
                                                        </MenuItem>
                                                    ))}
                                                </TextField>
                                            </Box>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-required"

                                                    label="Focus keywords separated with a comma (optional)"
                                                    fullWidth
                                                    sx={{
                                                        fontFamily: "Quicksand",
                                                        '& .MuiInputBase-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the input text
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222",
                                                            borderRadius: "10px"
                                                        },
                                                        '& .MuiSelect-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the select options
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the label
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                    }}
                                                >

                                                </TextField>
                                            </Box>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <label htmlFor="" style={{ fontFamily: "Quicksand", fontSize: "19.18px", lineHeight: "23px", fontWeight: "600", color: "#515151", padding: "20px 10px", paddingBottom: "10px!important" }}>What would you like to rewrite? (Paste the content here)</label>
                                                <TextField
                                                    id="outlined-multiline-static"
                                                    multiline
                                                    fullWidth
                                                    rows={5}
                                                    sx={{
                                                        fontFamily: "Quicksand",
                                                        '& .MuiInputBase-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the input text
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222",
                                                            borderRadius: "10px",
                                                            marginTop: "10px"
                                                        },
                                                        '& .MuiSelect-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the select options
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: 'Quicksand', // Apply fontFamily to the label
                                                            fontWeight: "600",
                                                            fontSize: "19px",
                                                            lineHeight: "23px",
                                                            color: "#222222"
                                                        },
                                                    }}
                                                >

                                                </TextField>
                                            </Box>
                                        </Grid>
                                    </Grid>


                                </Box>


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

export default Contentwriter
