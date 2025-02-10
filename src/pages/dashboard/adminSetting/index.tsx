"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink, TextField, Button, Checkbox, } from '@mui/material'
import React from 'react'
import Hero from '../../../pages/dashboard.module.css'
import Link from 'next/link'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import MenuItem from '@mui/material/MenuItem';

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

    const Curcurrencies = [
        {
            value: 'USD (United States Dollar)',
            label: 'USD (United States Dollar)',
        },
        {
            value: 'INR (Indian Rupees)',
            label: 'INR (Indian Rupees)',
        },
        

    ];

    const currencies = [
        {
            value: '0',
            label: '0',
        },
        {
            value: '1',
            label: '1',
        },
        {
            value: '2',
            label: '2',
        },

    ];
    const Theme = [
        {
            value: 'Left Side Of Price',
            label: 'Left Side Of Price',
        },
        {
            value: 'Right Side Of Price',
            label: 'Right Side Of Price',
        },


    ];
    const DateFormate = [
        {
            value: '07/02/2025',
            label: '07/02/2025',
        },
        {
            value: '07-02-2025',
            label: '07-02-2025',
        },
        {
            value: '2025.02.07',
            label: '2025.02.07',
        },
        {
            value: '07 Feb ,2025',
            label: '07 Feb ,2025',
        },


    ];
    const TimeFormate = [
        {
            value: 'No Plan',
            label: 'No Plan',
        },
        {
            value: 'Free',
            label: 'Free',
        },
        {
            value: 'Standard ',
            label: 'Standard  ',
        },
        {
            value: 'Premium ',
            label: 'Premium  ',
        },
        {
            value: 'Lite ',
            label: 'Lite  ',
        },



    ];
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



    return (
        <>
            <Box>
                <Dashnav />
                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px" }}>
                    <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Dashsidebar />

                        <Grid xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: " 30px " } }}>
                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/templates">
                                        Templates
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>
                            <Grid xs={12} md={12} sx={{ backgroundColor: "#fff", borderRadius: "20px" }}>
                                <Box sx={{ width: 'auto', backgroundColor: "#fff", paddingLeft: "2px", padding: "20px", borderRadius: "20px" }}>

                                    <Box sx={{ borderBottom: 0, borderColor: 'none' }}>
                                        <Tabs
                                            indicatorColor="secondary"
                                            value={value}
                                            onChange={handleChange}
                                            aria-label="basic tabs example"
                                        >
                                            <Tab
                                                label="General"
                                                {...a11yProps(0)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Finance"
                                                {...a11yProps(1)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Security"
                                                {...a11yProps(2)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Media"
                                                {...a11yProps(3)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Mail"
                                                {...a11yProps(4)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Marketing"
                                                {...a11yProps(5)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Social"
                                                {...a11yProps(6)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Testimonials"
                                                {...a11yProps(7)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Payment"
                                                {...a11yProps(8)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Schedule"
                                                {...a11yProps(9)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="Open AI"
                                                {...a11yProps(10)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                            <Tab
                                                label="About"
                                                {...a11yProps(11)}
                                                sx={{
                                                    fontSize: "14px",
                                                    fontFamily: "Inter",
                                                    fontWeight: "500",
                                                    color: "#05004E",
                                                    textTransform: "capitalize",
                                                    '&.Mui-selected': {
                                                        backgroundColor: "#D7F200", // background color when tab is active
                                                        color: "#000"
                                                    },
                                                }}
                                            />
                                        </Tabs>
                                    </Box>
                                    <CustomTabPanel value={value} index={0}>
                                        <Typography sx={{ fontFamily: "Lato", fontSize: "35px", lineHeight: "42px", fontWeight: "600", paddingBottom: "30px", color: "#222222" }}>
                                            Site Setting
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={3}>
                                                <Grid xs={12} md={6} item>
                                                    <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Website Name</label>
                                                    <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                        InputProps={{
                                                            style: {
                                                                backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                borderRadius: "10px",
                                                                border: "1px solid #000"
                                                            },
                                                        }}

                                                    />
                                                </Grid>
                                                <Grid xs={12} md={6} item>
                                                    <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Website Media Title</label>
                                                    <TextField fullWidth sx={{ paddingTop: "15px", backgroundColor: "" }} InputProps={{
                                                        style: {
                                                            backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                            borderRadius: "10px",
                                                            border: "1px solid #000"
                                                        },
                                                    }} />
                                                </Grid>
                                            </Grid>
                                            <Box sx={{ paddingTop: "30px" }}>
                                                <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Website Meta Description</label>
                                                <TextField fullWidth sx={{ paddingTop: "20px" }}
                                                    InputProps={{
                                                        style: {
                                                            backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                            borderRadius: "10px",
                                                            border: "1px solid #000"
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Default Language</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="English"


                                                        >
                                                            {currencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Default theme</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="Light"


                                                        >
                                                            {Theme.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Default Format</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="07 Feb ,2025"
                                                            type='date'


                                                        >
                                                            {DateFormate.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Time Format</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="11:27 Am"


                                                        >
                                                            {TimeFormate.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Time Zone</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"



                                                        >

                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Copyright Information</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"



                                                        >

                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box sx={{ paddingTop: "30px" }}>
                                                <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Organization address</label>
                                                <TextField fullWidth sx={{ paddingTop: "20px" }}
                                                    InputProps={{
                                                        style: {
                                                            backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                            borderRadius: "10px",
                                                            border: "1px solid #000"
                                                        },
                                                    }}
                                                />
                                            </Box>
                                            <Box sx={{ paddingTop: "30px" }}>
                                                <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Footer Text</label>
                                                <TextField fullWidth sx={{ paddingTop: "20px" }}
                                                    InputProps={{
                                                        style: {
                                                            backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                            borderRadius: "10px",
                                                            border: "1px solid #000"
                                                        },
                                                    }}
                                                    rows={4}
                                                    multiline
                                                />
                                            </Box>
                                            <Box sx={{ paddingTop: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button variant='contained' sx={{ borderRadius: "12px", backgroundColor: "#D7F200", color: "#000000", fontFamily: "Quicksand", boxShadow: "none", fontSize: "19.18px", fontWeight: "700", lineHeight: "19.18px", textTransform: "capitalize", padding: "20px 35px" }}>Update Details</Button>
                                            </Box>


                                        </Box>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={1}>
                                        <Typography sx={{ fontFamily: "Lato", fontSize: "35px", lineHeight: "42px", fontWeight: "600", paddingBottom: "30px", color: "#222222" }}>
                                        Finance Settings
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={3}>
                                                <Grid xs={12} md={12} item>
                                                    <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Currency</label>
                                                    <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                        InputProps={{
                                                            style: {
                                                                backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                borderRadius: "10px",
                                                                border: "1px solid #000"
                                                            },
                                                        }}
                                                        id="outlined-select-currency"
                                                            select
                                                            defaultValue="USD (United States Dollar)"

                                                    > 
                                                     {Curcurrencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                    
                                                    </TextField>
                                                </Grid>
                                                
                                            </Grid>
                                            
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={3} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Symbol</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                  


                                                        >
                                                            
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={3} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Decimal</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="0"


                                                        >
                                                            {currencies.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Symbol Position</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="Left Side Of Price"


                                                        >
                                                            {Theme.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Tax Rate(%)
                                                        </label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            
                                                        defaultValue="07 Feb ,2025"
                                                            


                                                        >
                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Free Plan

                                                        </label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"
                                                            select
                                                            defaultValue="Free"


                                                        >
                                                            {TimeFormate.map((option) => (
                                                                <MenuItem key={option.value} value={option.value}>
                                                                    {option.label}
                                                                </MenuItem>
                                                            ))}
                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Welcome Credits - Words</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"



                                                        >

                                                        </TextField>
                                                    </Grid>
                                                    <Grid xs={12} md={6} item>
                                                        <label htmlFor="" style={{ fontFamily: "Lato", fontSize: "19.18px", fontWeight: "600", lineHeight: "23.02px", color: "#222222" }}>Welcome Credit Images</label>
                                                        <TextField fullWidth sx={{ paddingTop: "15px" }}
                                                            InputProps={{
                                                                style: {
                                                                    backgroundColor: "#E7E7E7", // background color for the input area (where the text is typed)
                                                                    borderRadius: "10px",
                                                                    border: "1px solid #000",
                                                                    fontFamily: "Lato"
                                                                },
                                                            }}
                                                            id="outlined-select-currency"



                                                        >

                                                        </TextField>
                                                    </Grid>
                                                </Grid>
                                            </Box>

                                            <Box sx={{paddingTop:"20px"}}>
                                             <ul style={{padding:"0px",margin:"0px"}}>
                                                <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>Carry Forward unused credits on plan renewal (excludes free plans).</Typography>
                                                </li>
                                                <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>Unused credits reset when the subscription expires.</Typography>
                                                </li>
                                                <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>Prepaid plans are available for paid subscribers only.</Typography>
                                                </li>
                                             </ul>
                                
                                            </Box>
                                           
                                            <Box sx={{ paddingTop: "50px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                <Button variant='contained' sx={{ borderRadius: "12px", backgroundColor: "#D7F200", color: "#000000", fontFamily: "Quicksand", boxShadow: "none", fontSize: "19.18px", fontWeight: "700", lineHeight: "19.18px", textTransform: "capitalize", padding: "20px 35px" }}>Update Details</Button>
                                            </Box>


                                        </Box>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={2}>
                                    <Typography sx={{ fontFamily: "Lato", fontSize: "35px", lineHeight: "42px", fontWeight: "600", paddingBottom: "30px", color: "#222222" }}>
                                    Security Settings
                                        </Typography>
                                        <Box>
                                            
                                            

                                            <Box sx={{paddingTop:"20px"}}>
                                                <Grid container>
                                                   <Grid xs={12} sm={6} item>
                                                     <ul style={{padding:"0px",margin:"0px"}}>
                                                     <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>User registration enable</Typography>
                                                </li>
                                                     </ul>
                                                    
                                                   </Grid>
                                                   <Grid xs={12} sm={6} item>
                                                   <ul style={{padding:"0px",margin:"0px"}}>
                                                     <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>Unused credits reset when the subscription expires.</Typography>
                                                </li>
                                                     </ul>
                                                   </Grid>
                                                </Grid>
                                             <ul style={{padding:"0px",margin:"0px"}}>
                                                
                                                
                                                <li style={{listStyle:"none",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                                                <Checkbox {...label} /> 
                                                <Typography sx={{fontSize:"19px",fontFamily:"lato",color:"#222222"}}>Prepaid plans are available for paid subscribers only.</Typography>
                                                </li>
                                             </ul>
                                
                                            </Box>
                                           
                                            <Box sx={{ paddingTop: "50px", display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                <Button variant='contained' sx={{ borderRadius: "12px", backgroundColor: "#D7F200", color: "#000000", fontFamily: "Quicksand", boxShadow: "none", fontSize: "19.18px", fontWeight: "700", lineHeight: "19.18px", textTransform: "capitalize", padding: "20px 35px" }}>Update Details</Button>
                                            </Box>


                                        </Box>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={3}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={4}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={5}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={6}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={7}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={8}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={9}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={10}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                    <CustomTabPanel value={value} index={11}>
                                        <Grid container spacing={1} sx={{ padding: { xs: "10px", md: "0px" } }} className={Hero.templateCardGrid} >
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                                                        <Link href='article_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Article Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_conclusion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Conclusion
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        TGenerates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_idea_and_outlet' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Idea & Outline
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#D59AED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='blog_intros' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Intros
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE9C78", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_secion' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Section
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#61DFED", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/blog_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Blog Title

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_generator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Generator

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#FE78D6", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/content_writer' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Content Rewriter

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/copy_ad_variants' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Copy Ad Variants

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#DFB915", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='email_and_messages' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Email and Message

                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#95CF29", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='/faq_geerator' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                FAQ Generator
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid xs={12} sm={4} item>
                                                <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <Link href='meta_title' style={{ textDecoration: "none" }}>
                                                            <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                                                Meta Title
                                                            </Typography>
                                                        </Link>
                                                        <Box sx={{ width: "40px", height: "40px", backgroundColor: "#789FFE", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <FormatListBulletedIcon sx={{ color: "#fff" }} />
                                                        </Box>

                                                    </Box>
                                                    <Typography sx={{ fontSize: "14px", color: "#000", lineHeight: "24px", fontFamily: "Poppins", fontWeight: "400", paddingTop: "25px" }}>
                                                        Generates captivating and engaging blog introductions to hook readers and drive traffic
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </CustomTabPanel>
                                </Box>
                            </Grid>
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
