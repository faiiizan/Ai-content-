"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'



const adminTemplates = () => {




  return (
    <>
      <Box>
        <Dashnav />
        {/* top header completed */}
        {/* body part started */}
        <Box sx={{ paddingTop: "15px" }}>
          <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Dashsidebar />
             
            <Grid  xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 10px 20px 10px" } }}>
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
             
              <Box sx={{ width: 'auto', backgroundColor: "#fff", padding: "40px 20px", borderRadius: "20px", }}>
                    <Grid container spacing={1}>
                     <Grid xs={12} sm={4} item>
                        <Box sx={{ border: "1px solid #E4E4E4", padding: { md: "40px 20px", xs: "10px" }, borderRadius: "16px" }}>
                          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", minHeight: "" }}>
                            <Link href='article_generator' style={{ textDecoration: "none" }}>
                              <Typography sx={{ fontSize: { xs: "20px", md: "24px" }, lineHeight: { xs: "28px", md: "32px" }, fontFamily: "Poppins", fontWeight: "600", color: "#151D48" }}>
                                Blog Content
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
                                Email & Letter
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
                                Marketing
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
                               Social Media
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
                                Study Tools
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
                               Videos

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
                                Website

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
                                Writting Tools

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
                     
                      </Grid>
                  
                </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}


            </Grid>


       
        </Box>


      </Box>
    </>
  )
}

export default adminTemplates
