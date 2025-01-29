import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../../app/Assets/Imges/logo.svg';
import Image from 'next/image';
import Hero from '../layout/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box sx={{ padding: "40px 0 10px", backgroundColor: "#F7F1EE" }}>
      <Container maxWidth="lg">
        <Grid container spacing={0} justifyContent="flex-start">
          {/* Logo Section */}
          <Grid item xs={12} sm={6} md={6} sx={{paddingLeft:"0px!important",width:"100%"}}>
            <Image src={logo} alt="logo" style={{marginLeft:"-30px"}} className={Hero.Image} />
            <Typography
              sx={{
                paddingTop: "30px",
                fontSize: {sm:"16px",xs:"14px"},
                fontWeight: 400,
                lineHeight: "30px",
                color: "#4F4F4F",
                fontFamily: "Inter",
                textAlign:{xs:"center",sm:"left"}
              }}
            >
              AI Writing Tool is a website that provides
              <br /> users with a powerful and efficient tool for
              <br /> automatically creating unique content.
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={6} sm={6} md={2} sx={{paddingTop:{xs:"15px",sm:"0px"}}}>
            <Typography
              sx={{
                fontSize:{sm: "22px",xs:"18px"},
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Inter",
                paddingTop: { sm: "30px", xs: "-10px" }, // Adjust padding for sm and above
              }}
            >
              Follow Us
            </Typography>
            <ul style={{ padding: "0", margin: "0", paddingTop: "20px" }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='' style={{textDecoration:"none",color:"#4F4F4F"}}> Facebook </Link>
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='' style={{textDecoration:"none",color:"#4F4F4F"}} > Twitter </Link>
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='' style={{textDecoration:"none",color:"#4F4F4F"}} >Instagram </Link> 
              </li>
            </ul>
          </Grid>

          {/* Support Section */}
          <Grid item xs={6} sm={6} md={2} sx={{paddingTop:{xs:"15px",sm:"0px"}}}>
            <Typography
              sx={{
                fontSize:{sm: "22px",xs:"18px"},
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Inter",
                paddingTop: { sm: "30px", xs: "0px" }, // Adjust padding for sm and above
              }}
            >
              Support 
            </Typography>
            <ul style={{ padding: "0", margin: "0", paddingTop: "20px" }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='/faq' style={{textDecoration:"none",color:"#4F4F4F"}}>FAQ </Link> 
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='/aboutus' style={{textDecoration:"none",color:"#4F4F4F"}}> About Us </Link>
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='/contact' style={{textDecoration:"none",color:"#4F4F4F"}} > Contact Us </Link>
              </li>
            </ul>
          </Grid>

          {/* Policy Section */}
          <Grid item xs={12} sm={6} md={2} sx={{paddingTop:{xs:"15px",sm:"0px"}}}>
            <Typography
              sx={{
                fontSize:{sm: "22px",xs:"18px"},
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Inter",
                paddingTop: { sm: "30px", xs: "0px" }, // Adjust padding for sm and above
              }}
            >
              Policy
            </Typography>
            <ul style={{ padding: "0", margin: "0", paddingTop: "20px" }}>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='/terms' style={{textDecoration:"none",color:"#4F4F4F"}} >Terms of Use </Link> 
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
              <Link href='/privacypolicy' style={{textDecoration:"none",color:"#4F4F4F"}} >  Privacy Policy </Link>
              </li>
              <li
                style={{
                  listStyle: "none",
                  fontSize: "16px",
                  lineHeight: "40px",
                  color: "#4F4F4F",
                  fontWeight: 400,
                  fontFamily: "Inter",
                }}
              >
               <Link href='/refundpolicy' style={{textDecoration:"none",color:"#4F4F4F"}} > Refund Policy </Link>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ border: "1px solid #383838", marginTop: { sm: "60px", xs: "30px" }, opacity: "30%" }} />

        {/* Copyright */}
        <Typography
          sx={{
            fontWeight: 400,
            fontFamily: "Inter",
            fontSize: "16px",
            textAlign: "center",
            lineHeight: "30px",
            color: "#4F4F4F",
            paddingTop: "20px",
          }}
        >
          Copyright © Verbilab
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
