"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'
import Hero from '../../../pages/dashboard.module.css'
import Link from 'next/link'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import DashboardLayout from '@/components/layout/DashboardLayout'

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



  return (
    <>
    <DashboardLayout>
      <Box>
        <Dashnav />
        {/* top header completed */}
        {/* body part started */}
        <Box sx={{ paddingTop: "15px" }}>
          <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Dashsidebar />

            <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 10px 20px 10px" } }}>
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
                <Box sx={{ width: '100%', backgroundColor: "#fff", paddingLeft: "2px", paddingTop: "10px", borderRadius: "20px" }}>

                  <Box sx={{ borderBottom: 0, borderColor: 'none' }}>
                    <Tabs
                      indicatorColor="secondary"
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab
                        label="All"
                        {...a11yProps(0)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Blog"
                        {...a11yProps(1)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Email"
                        {...a11yProps(2)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Marketing"
                        {...a11yProps(3)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Social Media"
                        {...a11yProps(4)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Study Tools"
                        {...a11yProps(5)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Videos"
                        {...a11yProps(6)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Website"
                        {...a11yProps(7)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                      <Tab
                        label="Writing Tools"
                        {...a11yProps(8)}
                        sx={{
                          fontSize: "14px",
                          fontFamily: "Inter",
                          fontWeight: "500",
                          color: "#05004E",
                          textTransform: "capitalize",
                          '&.Mui-selected': {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color:"#000"
                          },
                        }}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
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
                  <CustomTabPanel value={value} index={1}>
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
                  <CustomTabPanel value={value} index={2}>
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
                </Box>
              </Grid>
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

export default Templates
