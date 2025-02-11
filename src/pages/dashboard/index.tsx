"use Client";
import {
  Box,
  Button,
  Grid,
  Typography,
  Divider,
  Breadcrumbs,
  Link as MUILink,
} from "@mui/material";
import React, { useState, useEffect } from "react";

import Hero from "../../pages/dashboard.module.css";

import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CollectionsIcon from "@mui/icons-material/Collections";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
import ListIcon from "@mui/icons-material/List";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import UpdateIcon from "@mui/icons-material/Update";
import Link from "next/link";

import Dashnav from "./dashnav";
import Dashsidebar from "./dashsidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
// @ts-ignore
import Cookies from "js-cookie";

const Dashboard = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid cookie data", error);
      }
    }
  }, []);

  return (
    <>
      <DashboardLayout>
        <Box>
          <Dashnav />

          {/* top header completed */}
          {/* body part started */}
          <Box sx={{ paddingTop: "15px", backgroundColor: "" }}>
            <Grid container>
              <Dashsidebar />

              <Grid
                xs={12}
                md={6.1}
                sm={12}
                sx={{
                  backgroundColor: "#F8F9FA",
                  padding: { xs: "20px", sm: "5px 10px" },
                }}
              >
                <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                  <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                    <MUILink
                      sx={{
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "32px",
                      }}
                      color="inherit"
                      href="/"
                    >
                      Home
                    </MUILink>

                    <MUILink
                      sx={{
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "16px",
                        lineHeight: "32px",
                      }}
                      color="inherit"
                      href="/dashboard"
                    >
                      Dashboard
                    </MUILink>
                  </Breadcrumbs>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "32px",
                      color: "#05004E",
                      lineHeight: "32px",
                      fontWeight: "500",
                      paddingBottom: "25px",
                    }}
                  >
                    {`Hello, ${user ? user.name : "Guest"}`}
                  </Typography>
                  <Divider sx={{ color: "#D4E1E9" }} />
                  <Grid container spacing={1} sx={{ paddingTop: "25px" }}>
                    <Grid xs={12} sm={3} item>
                      <Box
                        sx={{
                          padding: { xs: "12px 20px", sm: "20px" },
                          backgroundColor: "#FFE2E5",
                          borderRadius: "16px",
                          minHeight: { sm: "176px" },
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FA5A7D",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: { xs: "10px", sm: "20px" },
                          }}
                        >
                          <TextSnippetIcon />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { sm: "22px", xs: "16px" },
                            color: "#151D48",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            lineHeight: { xs: "22px", sm: "32px" },
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          0 Words
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { sm: "20px", xs: "16px" },
                            color: "#425166",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            lineHeight: "24px",
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          Words Generated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={3} item>
                      <Box
                        sx={{
                          padding: { xs: "12px 20px", sm: "20px" },
                          backgroundColor: "#FFF4DE",
                          borderRadius: "16px",
                          minHeight: { sm: "176px" },
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#FF947A",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          <CollectionsIcon />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { sm: "22px", xs: "16px" },
                            color: "#151D48",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            lineHeight: { sm: "32px", xs: "22px" },
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          0 Image
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: "16px", sm: "20px" },
                            color: "#425166",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            lineHeight: "24px",
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          Images Generated
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={3} item>
                      <Box
                        sx={{
                          padding: { sm: "20px", xs: "12px 20px" },
                          backgroundColor: "#DCFCE7",
                          borderRadius: "16px",
                          minHeight: { sm: "176px" },
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#3CD856",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          <JoinLeftIcon />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "16px", sm: "22px" },
                            color: "#151D48",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            lineHeight: { sm: "32px", xs: "22px" },
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          5 Words
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { sm: "20px", xs: "16px" },
                            color: "#425166",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            lineHeight: "24px",
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          Credits <br className={Hero.break} /> Left
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} sm={3} item>
                      <Box
                        sx={{
                          padding: { xs: "12px 20px", sm: "20px" },
                          backgroundColor: "#F3E8FF",
                          borderRadius: "16px",
                          minHeight: { sm: "176px" },
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#BF83FF",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          <UpdateIcon />
                        </Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "16px", sm: "22px" },
                            color: "#151D48",
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            lineHeight: { xs: "22px", sm: "32px" },
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          0 Hours
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: { xs: "16px", sm: "20px" },
                            color: "#425166",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            lineHeight: "24px",
                            paddingBottom: { xs: "4px", sm: "8px" },
                          }}
                        >
                          Time
                          <br className={Hero.break} /> Saved
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* end of surya part  */}

                <Box
                  sx={{
                    padding: { sm: "20px 25px", xs: "20px 25px" },
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "20px", sm: "32px" },
                      fontWeight: "500",
                      lineHeight: "32px",
                      color: "#05004E",
                    }}
                  >
                    For you
                  </Typography>
                  <Box>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "#D7F200",
                        borderRadius: "8px",
                        color: "#000",
                        boxShadow: "none",
                        fontSize: { xs: "12px", sm: "14px" },
                        fontFamily: "Poppins",
                        textTransform: "capitalize",
                        border: "1px solid #C3D3E2",
                      }}
                    >
                      All Tools
                    </Button>
                  </Box>
                </Box>
                {/* end for you part  */}
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "20px 20px",
                    borderRadius: "20px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} md={6} item>
                      <Box
                        sx={{
                          backgroundColor: "#F6F6F6",
                          padding: { sm: "25px", xs: "12px 20px" },
                          borderRadius: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#789FFE",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: { sm: "20px", xs: "10px" },
                          }}
                        >
                          <ListIcon />
                        </Box>
                        <Link
                          href="/article generator"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: { sm: "24px", xs: "18px" },
                              color: "#151D48",
                              lineHeight: { xs: "22px", sm: "32px" },
                              fontWeight: "600",
                            }}
                          >
                            Artical Generator
                          </Typography>
                        </Link>

                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#151D48",
                            lineHeight: "24px",
                            fontWeight: "400",
                            textAlign: "center",
                            paddingTop: { xs: "10px", sm: "15px" },
                          }}
                        >
                          Assists with homework writing by providing suggestions
                          for grammar, style, and content improvements.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} md={6} item>
                      <Box
                        sx={{
                          backgroundColor: "#F6F6F6",
                          padding: { sm: "25px", xs: "12px 20px" },
                          borderRadius: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#DDA840",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: { sm: "20px", xs: "10px" },
                          }}
                        >
                          <SpaceDashboardIcon />
                        </Box>
                        <Link
                          href="/hedline_generator"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: { xs: "16px", sm: "24px" },
                              color: "#151D48",
                              lineHeight: "32px",
                              fontWeight: "600",
                            }}
                          >
                            Headline Generator
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#151D48",
                            lineHeight: "24px",
                            fontWeight: "400",
                            textAlign: "center",
                            paddingTop: { xs: "8px", sm: "15px" },
                          }}
                        >
                          Assists with homework writing by providing suggestions
                          for grammar, style, and content improvements.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                {/* start proposal part */}
                <Box
                  sx={{
                    backgroundColor: "#fff",
                    padding: "20px 20px",
                    borderRadius: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Grid container spacing={1}>
                    <Grid xs={12} md={6} item>
                      <Box
                        sx={{
                          backgroundColor: "#F6F6F6",
                          padding: { xs: "12px 20px", sm: "25px" },
                          borderRadius: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#41D7A5",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: "20px",
                          }}
                        >
                          <SignalCellularAltIcon />
                        </Box>
                        <Link
                          href="/blog_conclusion"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: { xs: "16px", sm: "24px" },
                              color: "#151D48",
                              lineHeight: { xs: "22px", sm: "32px" },
                              fontWeight: "600",
                            }}
                          >
                            Blog Conclusion
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#151D48",
                            lineHeight: "24px",
                            fontWeight: "400",
                            textAlign: "center",
                            paddingTop: { xs: "8px", sm: "15px" },
                          }}
                        >
                          Assists with homework writing by providing suggestions
                          for grammar, style, and content improvements.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid xs={12} md={6} item>
                      <Box
                        sx={{
                          backgroundColor: "#F6F6F6",
                          padding: "25px",
                          borderRadius: "16px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Box
                          sx={{
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#9B69FF",
                            borderRadius: "50%",
                            color: "#fff",
                            marginBottom: { xs: "10px", sm: "20px" },
                          }}
                        >
                          <ListIcon />
                        </Box>
                        <Link
                          href="/english_correction"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              fontSize: { xs: "16px", sm: "24px" },
                              color: "#151D48",
                              lineHeight: { xs: "22px", sm: "32px" },
                              fontWeight: "600",
                            }}
                          >
                            English Correction
                          </Typography>
                        </Link>
                        <Typography
                          sx={{
                            fontFamily: "Poppins",
                            fontSize: { xs: "14px", sm: "16px" },
                            color: "#151D48",
                            lineHeight: "24px",
                            fontWeight: "400",
                            textAlign: "center",
                            paddingTop: { xs: "10px", sm: "15px" },
                          }}
                        >
                          Assists with homework writing by providing suggestions
                          for grammar, style, and content improvements.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}
              <Grid
                xs={12}
                md={3.4}
                sx={{ padding: "60px 15px", backgroundColor: "#F8F9FA" }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "18px", sm: "32px" },
                    fontFamily: "Poppins",
                    color: "#05004E",
                    lineHeight: "32px",
                    fontWeight: "500",
                    paddingBottom: "20px",
                    paddingLeft: { xs: "20px", sm: "0px" },
                  }}
                >
                  Most Popular
                </Typography>
                <Grid
                  container
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Grid
                    xs={10}
                    sm={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        padding: { sm: "20px", xs: "15px" },
                        width: { xs: "95%", sm: "100%" },
                        borderRadius: "20px",
                        border: "1px solid #F8F9FA",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #D4E1E9",
                          paddingBottom: { xs: "12px", sm: "20px" },
                        }}
                      >
                        <Link
                          href="/teweet_generator"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "16px", sm: "18px" },
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              lineHeight: { sm: "32px", xs: "22px" },
                              color: "#05004E",
                            }}
                          >
                            Tweet Generator
                          </Typography>
                        </Link>
                        <Box
                          sx={{
                            height: { xs: "25px", sm: "29px" },
                            width: { sm: "29px", xs: "23px" },
                            borderRadius: "8px",
                            border: "2px solid #1C274C",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <QuestionMarkIcon />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          padding: {
                            sm: "20px 12px 0px 12px",
                            xs: "10px 12px 0px 12px",
                          },
                          fontSize: { sm: "16px", xs: "14px" },
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          lineHeight: { sm: "23px", xs: "20px" },
                          color: "#444444",
                        }}
                      >
                        AI-powered tool that uses natural language processing
                        algorithms to generate high-quality questions for any
                        given topic or document.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={10}
                    sm={12}
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        padding: { sm: "20px", xs: "15px" },
                        width: { xs: "95%", sm: "100%" },
                        borderRadius: "20px",
                        border: "1px solid #F8F9FA",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #D4E1E9",
                          paddingBottom: { xs: "12px", sm: "20px" },
                        }}
                      >
                        <Link
                          href="youtube_video_description"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "16px", sm: "18px" },
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              lineHeight: { sm: "32px", xs: "22px" },
                              color: "#05004E",
                            }}
                          >
                            Youtube Video Description
                          </Typography>
                        </Link>
                        <Box
                          sx={{
                            height: { xs: "25px", sm: "29px" },
                            width: { sm: "29px", xs: "23px" },
                            borderRadius: "8px",
                            border: "2px solid #1C274C",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <ListIcon />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          padding: "20px 12px 0px 12px",
                          fontSize: { sm: "16px", xs: "14px" },
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          lineHeight: { sm: "23px", xs: "20px" },
                          color: "#444444",
                        }}
                      >
                        AI-powered tool that uses natural language processing
                        algorithms to generate high-quality questions for any
                        given topic or document.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={10}
                    sm={12}
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        padding: { sm: "20px", xs: "15px" },
                        width: { xs: "95%", sm: "100%" },
                        borderRadius: "20px",
                        border: "1px solid #F8F9FA",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #D4E1E9",
                          paddingBottom: "20px",
                        }}
                      >
                        <Link
                          href="speeches_writing"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "16px", sm: "18px" },
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              lineHeight: { sm: "32px", xs: "22px" },
                              color: "#05004E",
                            }}
                          >
                            Speeches Writing
                          </Typography>
                        </Link>
                        <Box
                          sx={{
                            height: { xs: "25px", sm: "29px" },
                            width: { sm: "29px", xs: "23px" },
                            borderRadius: "8px",
                            border: "2px solid #1C274C",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <PermIdentityIcon />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          padding: "20px 12px 0px 12px",
                          fontSize: { sm: "16px", xs: "14px" },
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          lineHeight: { sm: "23px", xs: "20px" },
                          color: "#444444",
                        }}
                      >
                        AI-powered tool that uses natural language processing
                        algorithms to generate high-quality questions for any
                        given topic or document.
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid
                    xs={10}
                    sm={12}
                    sx={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#fff",
                        padding: { sm: "20px", xs: "15px" },
                        width: { xs: "95%", sm: "100%" },
                        borderRadius: "20px",
                        border: "1px solid #F8F9FA",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          borderBottom: "1px solid #D4E1E9",
                          paddingBottom: "20px",
                        }}
                      >
                        <Link
                          href="summarize_text"
                          style={{ textDecoration: "none" }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "16px", sm: "18px" },
                              fontFamily: "Poppins",
                              fontWeight: "600",
                              lineHeight: { sm: "32px", xs: "22px" },
                              color: "#05004E",
                            }}
                          >
                            Summarize Text
                          </Typography>
                        </Link>
                        <Box
                          sx={{
                            height: { xs: "25px", sm: "29px" },
                            width: { sm: "29px", xs: "23px" },
                            borderRadius: "8px",
                            border: "2px solid #1C274C",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <FileCopyIcon />
                        </Box>
                      </Box>
                      <Typography
                        sx={{
                          padding: "20px 12px 0px 12px",
                          fontSize: { sm: "16px", xs: "14px" },
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          lineHeight: { sm: "23px", xs: "20px" },
                          color: "#444444",
                        }}
                      >
                        AI-powered tool that uses natural language processing
                        algorithms to generate high-quality questions for any
                        given topic or document.
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
