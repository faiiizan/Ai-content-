"use Client"
import { Box, Button, Grid, Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'
import Hero from './../../../pages/dashboard.module.css'
import Dashnav from '../dashnav';
import Dashsidebar from '../dashsidebar';
import { Accordion, AccordionDetails, AccordionSummary, Container, } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneIcon from '@mui/icons-material/Done'
import { Tab, Tabs, } from '@mui/material'
import bgImage from '../../../app/Assets/Imges/16359108_v904-nunny-026 1.png'


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


const UpgradePlan = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };








    return (
        <>
            <Box >
                <Dashnav />

                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px", backgroundColor: "" }}>
                    <Grid container>
                        <Dashsidebar />


                        <Grid xs={12} md={9.5} sm={12} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "20px", sm: "5px 10px" } }}>

                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/upgradeplan">
                                        Upgrade Plan
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box
                                sx={{
                                    padding: { sm: '50px 0px!important', xs: '10px 0px!important' },
                                    backgroundImage: `url(${bgImage})`,  // Set background image
                                    backgroundSize: 'cover',             // Make the image cover the whole box
                                    backgroundPosition: 'center',        // Center the background image
                                    backgroundRepeat: 'no-repeat',       // Prevent the image from repeating

                                }}
                                className={Hero.ParentDiv}
                                id='section5'
                            >

                                <Box className={Hero.background}>

                                </Box>
                                <Box sx={{ paddingBottom: { sm: '60px', xs: "25px" } }}>
                                    <Typography
                                        sx={{
                                            fontSize: { sm: '50px', xs: '25px' },
                                            lineHeight: '60px',
                                            fontWeight: '700',
                                            fontFamily: 'Montserrat',
                                            textAlign: 'center',
                                            color: '#000',
                                        }}
                                    >
                                        Plans and Pricing
                                    </Typography>
                                    <Typography
                                        sx={{
                                            paddingTop: '10px',
                                            textAlign: 'center',
                                            fontFamily: 'Montserrat',
                                            fontSize: { sm: '16px', xs: '16px' },
                                            lineHeight: { sm: '30px', xs: '20px' },
                                        }}
                                    >
                                        Our plans are simple and clear, they are based on the total credits used in each month.
                                    </Typography>
                                </Box>

                                <Container >
                                    <Grid container>
                                        <Box sx={{ width: '100%' }}>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ paddingBottom: { sm: "50px", xs: "15px" } }}>
                                                    <Tab label="Monthly" {...a11yProps(0)} sx={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: { sm: "16px", xs: "14px" }, lineHeight: "19.5px", color: "#000", letterSpacing: "8%" }} />
                                                    <Tab label="Yearly" {...a11yProps(1)} sx={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: { sm: "16px", xs: "14px" }, lineHeight: "19.5px", color: "#000", letterSpacing: "8%" }} />
                                                    <Tab label="Prepaid" {...a11yProps(2)} sx={{ fontFamily: "Montserrat", fontWeight: "600", fontSize: { sm: "16px", xs: "14px" }, lineHeight: "19.5px", color: "#000", letterSpacing: "8%" }} />
                                                </Tabs>
                                            </Box>
                                            <CustomTabPanel value={value} index={0}>
                                                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }} >
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }} >
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E",listStyle:"none" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Basic
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $15<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 200K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 10 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Premium Templates</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid #3C31744D", position: "relative" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Standard
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $23<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 50 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>

                                                            
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CustomTabPanel>
                                            <CustomTabPanel value={value} index={1}>
                                                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }} >
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }} >
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E",listStyle:"none" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Basic
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $15<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 200K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 10 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Premium Templates</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid #3C31744D", position: "relative" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Standard
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $23<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 50 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>

                                                            
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CustomTabPanel>
                                            <CustomTabPanel value={value} index={2}>
                                                <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }} >
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }} >
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E",listStyle:"none" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Basic
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $15<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 200K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 10 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Premium Templates</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px", border: "1px solid #3C31744D", position: "relative" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Standard
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $23<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 50 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>

                                                            
                                                        </Box>
                                                    </Grid>
                                                    <Grid xs={12} sm={6} item sx={{ marginBottom: "15px" }}>
                                                        <Box sx={{ padding: "20px 20px", backgroundColor: "#FFFFFF", borderRadius: "16px" }}>
                                                            <Box sx={{ opacity: 0.4, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} /> <Typography sx={{ opacity: 1, fontFamily: "Montserrat", fontSize: "18px", color: "#212529", lineHeight: "50px", fontWeight: "600" }}>
                                                                Free
                                                            </Typography>
                                                            <Typography sx={{ fontSize: "40px", fontFamily: "Montserrat", fontWeight: "700" }}>
                                                                $0<span style={{ fontSize: "16px", color: "#00000099", opacity: "60%", fontWeight: "400" }}>/Month</span>
                                                            </Typography>
                                                            <Box sx={{ padding: "20px 0px" }}>
                                                                <Button variant='contained' fullWidth sx={{ backgroundColor: "#0CC0DF", boxShadow: "none", borderRadius: "130px", color: "#fff", fontFamily: "Montserrat", fontSize: "16px", fontWeight: "600", lineHeight: "19.5px", letterSpacing: "8%", padding: "10px 20px" }}>
                                                                    Subscribe
                                                                </Button>
                                                            </Box>

                                                            <ul style={{ padding: "0px", margin: "0px", paddingTop: "15px" }}>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}> <DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 5K Words Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 4 Images Generate</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> 70+ Templates Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Assistant Access</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Article Generator</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} /> Content Rewriter</li>
                                                                <li style={{ fontFamily: "Montserrat", fontWeight: "500", fontSize: "16px", lineHeight: "19.5px", color: "#000000", paddingBottom: "15px",listStyle:"none",display:"flex",alignItems:"center" }}><DoneIcon sx={{ marginRight: "12px", fontSize: "25px", color: "#65C95E" }} />Smart Editor</li>
                                                            </ul>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </CustomTabPanel>
                                            
                                        </Box>
                                    </Grid>
                                </Container>

                            </Box>
                            {/* end of surya part  */}

                            <Box sx={{ padding: { sm: '50px 0', xs: '20px 0 30px 0px' } }}>
                                <Container maxWidth='lg'>
                                    <Typography sx={{
                                        textAlign: "center", fontFamily: "Montserrat", fontSize: { sm: "60px", xs: "22px" }, fontWeight: "700", lineHeight: { sm: "55px", xs: "30px" }, paddingBottom: { xs: "30px", sm: "70px" }, backgroundImage: 'linear-gradient(to right, #000  , #000  )',
                                        WebkitBackgroundClip: 'text',
                                        color: 'transparent',
                                    }}>
                                        Frequently Asked Questions
                                    </Typography>

                                    <Grid container>

                                        <Grid md={12}>
                                            <div>
                                                <Accordion >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1-content"
                                                        id="panel1-header"
                                                    >
                                                        <Typography component="span" sx={{ fontFamily: "Montserrat", lineHeight: { xs: "25px", sm: "0px" }, fontSize: { xs: "16px", sm: "21px" }, color: "#000000" }}>Can I change my subscription plan later?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion defaultExpanded>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography component="span" sx={{ fontFamily: "Montserrat", lineHeight: { sm: "0px", xs: "25px" }, fontSize: { xs: "16px", sm: "21px" }, color: "#3C3174" }}>Can I cancel my subscription anytime?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        Yes, our subscription pricing plans allow you to cancel your subscription at any time without any penalty.
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel2-content"
                                                        id="panel2-header"
                                                    >
                                                        <Typography component="span" sx={{ fontFamily: "Montserrat", lineHeight: { xs: "25px", sm: "0px" }, fontSize: { xs: "16px", sm: "21px" }, color: "#000000" }} >What happens if I miss a payment?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </AccordionDetails>
                                                </Accordion>
                                                <Accordion  >
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel3-content"
                                                        id="panel3-header"
                                                    >
                                                        <Typography component="span" sx={{ fontFamily: "Montserrat", lineHeight: { xs: "25px", sm: "0px" }, fontSize: { xs: "16px", sm: "21px" }, color: "#000000" }}>Is there any hidden fees with subscription plans?</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                                    </AccordionDetails>

                                                </Accordion>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Box>
                            {/* end for you part  */}
                            
                            {/* start proposal part */}
                           
                        </Grid>
                        {/* enn main part */}
                        {/* start popular part  */}


                    </Grid>
                </Box>


            </Box>
        </>
    )
}

export default UpgradePlan
