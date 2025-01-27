import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import logo from '../../app/Assets/Imges/logo.svg';
import Image from 'next/image';
import '../layout/Footer.module.css';

const Footer = () => {
  return (
    <Box sx={{ padding: "40px 0 10px", backgroundColor: "#F7F1EE" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {/* Logo Section */}
          <Grid item xs={12} sm={6} md={5}>
            <Image src={logo} alt="logo" />
            <Typography
              sx={{
                paddingTop: "30px",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "30px",
                color: "#4F4F4F",
                fontFamily: "Inter",
              }}
            >
              AI Writing Tool is a website that provides
              <br /> users with a powerful and efficient tool for
              <br /> automatically creating unique content.
            </Typography>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontSize: "22px",
                fontWeight: 600,
                lineHeight: "30px",
                fontFamily: "Inter",
                paddingTop: { sm: "30px", xs: "0px" }, // Adjust padding for sm and above
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
                Facebook
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
                Twitter
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
                Instagram
              </li>
            </ul>
          </Grid>

          {/* Support Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontSize: "22px",
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
                FAQ
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
                About Us
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
                Contact Us
              </li>
            </ul>
          </Grid>

          {/* Policy Section */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              sx={{
                fontSize: "22px",
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
                Terms of Use
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
                Privacy Policy
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
                Refund Policy
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
