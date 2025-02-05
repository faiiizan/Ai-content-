"use Client"
import { Box, Button, Grid,  Typography,  MenuItem,  Breadcrumbs, Link as MUILink, TextField, } from '@mui/material'
import React, { useState } from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'






const Imagegenertor = () => {







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
            <Box>
                <Dashnav />
                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px" }}>
                    <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Dashsidebar />

                        <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
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

                                <Typography sx={{ textAlign: "left", fontFamily: "Quicksand", fontSize: { xs: "32px", sm: "52.1px" }, lineHeight: { sm: "65.13px", xs: "30px" }, fontWeight: "600", color: "#000000" }}>
                                    Generate Your Best Image
                                </Typography>
                                <Box sx={{ paddingTop: "50px" }}>
                                    <Typography sx={{ fontSize: "22.95px", fontFamily: "Quicksand", fontWeight: "600", lineHeight: "28.69px", color: "#515151" }}>
                                        Write image description here...
                                    </Typography>
                                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} spacing={2}>
                                        <Grid md={10} sm={12} xs={12} item>

                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"


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

                                                </TextField>
                                            </Box>
                                        </Grid>
                                        <Grid md={2} item>
                                            <Box sx={{ paddingTop: "0px", display: "flex", justifyContent: "center" }}>
                                                <Button variant='contained' sx={{ backgroundColor: "#D7F200", color: "#000000", fontWeight: "700", fontFamily: "Poppins", fontSize: { sm: "16px", xs: "14px" }, lineHeight: "28.95px", textTransform: "capitalize", padding: "15px 20px", borderRadius: "14px", boxShadow: "none", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                    Generate <ArrowRightAltIcon sx={{ marginLeft: "10px", fontSize: "18px" }} />
                                                </Button>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>

                                <Box sx={{ paddingTop: "30px" }}>
                                    <Grid container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} spacing={1}>
                                        <Grid md={3} sm={12} xs={12} item>

                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Style"

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
                                        </Grid>
                                        <Grid md={3} sm={12} xs={12} item>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Lighting"

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
                                        </Grid>
                                        <Grid md={3} sm={12} xs={12} item>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Medium"

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
                                        </Grid>
                                        <Grid md={3} sm={12} xs={12} item>
                                            <Box sx={{ padding: "10px 0px" }}>
                                                <TextField
                                                    id="outlined-select-currency"
                                                    select
                                                    label="Mode"

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
        </>
    )
}

export default Imagegenertor
