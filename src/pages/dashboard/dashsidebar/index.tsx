"use Client";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HistoryIcon from "@mui/icons-material/History";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FeedIcon from "@mui/icons-material/Feed";
import { SiGoogleassistant } from "react-icons/si";
import { PiChartPieSliceFill } from "react-icons/pi";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import { useRouter } from "next/router";
import SettingsIcon from "@mui/icons-material/Settings";
import LayersIcon from "@mui/icons-material/Layers";
import PaidIcon from "@mui/icons-material/Paid";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import axiosInstance from "@/utils/axios";
//@ts-ignore
import Cookies from "js-cookie";

const Dashsidebar = () => {
  const getLinkStyle = (path: string) => {
    return router.pathname === path
      ? {
          backgroundColor: "#D7F200",
          color: "#000",
          borderRadius: "16px",
          width: "100%",
        } // active style
      : {};
  };

  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [userSubscription, setUserSubscription] = useState<Subscription>();
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

  const getUserSubscription = async (userId: string) => {
    try {
      const userSubs = await axiosInstance.post(
        "/ai/subscription/get-subscription",
        { userId: userId }
      );
      setUserSubscription(userSubs.data.subscription);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      getUserSubscription(user._id);
    }
  }, [user]);

  return (
    <>
      <Grid
        xs={12}
        md={2.5}
        sx={{
          padding: "20px",
          display: { xs: "none", md: "block", sm: "none" },
        }}
      >
        <Box
          sx={{
            display: { sm: "flex" },
            justifyContent: "space-between",
            borderBottom: "4px solid #4AB58E",
            borderRadius: "2px",
            marginBottom: "40px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              lineHeight: "22.5px",
              fontWeight: "400",
            }}
          >
            Credits
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontSize: "15px",
              lineHeight: "22.5px",
              fontWeight: "400",
            }}
          >
            {`${userSubscription?.creditsRemains ?? 0} words left`}
          </Typography>
        </Box>
        {/* start dashboard part */}
        <Box
          sx={{
            height: "auto",
            width: "90%",
            border: "1px solid #0000001A",
            borderRadius: "30px",
            padding: " 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <ul style={{ margin: "0px", padding: "0px", width: "100%" }}>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    width: "100%",
                    ...getLinkStyle("/dashboard"),
                  }}
                >
                  <PiChartPieSliceFill
                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                  />
                  Dashoard
                </Typography>
              </Link>
            </li>

            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/templates"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    ...getLinkStyle("/dashboard/templates"),
                  }}
                >
                  <DashboardIcon
                    sx={{ marginRight: "20px", paddingLeft: "10px" }}
                  />{" "}
                  Templates
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/assistant"
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/assistant"),
                  }}
                >
                  <SiGoogleassistant
                    style={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "15px",
                    }}
                  />{" "}
                  Assistant
                </Typography>
              </Link>
            </li>
          </ul>
        </Box>
        {/* end dashboard part */}
        {/* start workflows */}
        <Box
          sx={{
            minHeight: "100px",
            width: "90%",
            border: "1px solid #0000001A",
            borderRadius: "30px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <ul style={{ margin: "0px", padding: "0px", width: "100%" }}>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/analyst"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    ...getLinkStyle("/dashboard/analyst"),
                    zIndex: "99",
                    position: "relative",
                  }}
                >
                  <DashboardIcon
                    sx={{ marginRight: "20px", paddingLeft: "10px" }}
                  />{" "}
                  Data Analyst
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/article"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/article"),
                  }}
                >
                  <FeedIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Article Generator
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/image"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    ...getLinkStyle("/dashboard/image"),
                    textAlign: "left",
                  }}
                >
                  <InsertPhotoIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Image Generator
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/contentwriter"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/contentwriter"),
                  }}
                >
                  <ContentCopyIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Content Rewriter
                </Typography>
              </Link>
            </li>
            <Link
              href="/dashboard/document"
              style={{ textDecoration: "none" }}
              passHref
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins",
                  fontSize: "18px",
                  lineHeight: "50px",
                  fontWeight: "400",
                  color: "#737791",
                  textAlign: "left",
                  ...getLinkStyle("/dashboard/document"),
                }}
              >
                <DocumentScannerIcon
                  sx={{
                    paddingRight: "20px",
                    paddingTop: "10px",
                    paddingLeft: "10px",
                  }}
                />{" "}
                Documents
              </Typography>
            </Link>
          </ul>
          <Box sx={{ position: "absolute", top: "-20px", left: "55px" }}>
            <Typography
              sx={{
                background: "#fff",
                borderRadius: "16px",
                color: "#403F3F",
                padding: "8px 25px",
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Workflows
            </Typography>
          </Box>
        </Box>
        {/* end wokflows */}
        {/* start account parts */}
        <Box
          sx={{
            minHeight: "auto",
            width: "90%",
            border: "1px solid #0000001A",
            borderRadius: "30px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <ul style={{ margin: "0px", padding: "0px", width: "100%" }}>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/history"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    ...getLinkStyle("/dashboard/history"),
                    position: "relative",
                    zIndex: "99",
                  }}
                >
                  <HistoryIcon
                    sx={{ marginRight: "20px", paddingLeft: "10px" }}
                  />{" "}
                  My History
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/usage"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/usage"),
                  }}
                >
                  <DashboardIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Usage History
                </Typography>
              </Link>
            </li>

            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/plans"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/plans"),
                  }}
                >
                  <ReceiptIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Plans and Billing
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/profile"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/profile"),
                  }}
                >
                  <PersonIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />{" "}
                  Profile Details
                </Typography>
              </Link>
            </li>
          </ul>
          <Box sx={{ position: "absolute", top: "-20px", left: "60px" }}>
            <Typography
              sx={{
                background: "#fff",
                borderRadius: "16px",
                color: "#403F3F",
                padding: "8px 25px",
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Accounts
            </Typography>
          </Box>
        </Box>
        {/* start admin pannel */}
        <Box
          sx={{
            minHeight: "auto",
            width: "90%",
            border: "1px solid #0000001A",
            borderRadius: "30px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            marginTop: "40px",
          }}
        >
          <ul style={{ margin: "0px", padding: "0px", width: "100%" }}>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminDashboard"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    ...getLinkStyle("/dashboard/adminDashboard"),
                    position: "relative",
                    zIndex: "99",
                  }}
                >
                  <PiChartPieSliceFill
                    style={{ marginRight: "20px", paddingLeft: "10px" }}
                  />{" "}
                  Dashboard
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminTemplates"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminTemplates"),
                  }}
                >
                  <DashboardIcon
                    sx={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />{" "}
                  Templates
                </Typography>
              </Link>
            </li>

            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminAssistant"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminAssistant"),
                  }}
                >
                  <SiGoogleassistant
                    style={{
                      paddingRight: "20px",
                      paddingLeft: "10px",
                      paddingTop: "10px",
                    }}
                  />
                  Assistant
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminSubscription"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminSubscription"),
                  }}
                >
                  <PaidIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Subscription
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminTransaction"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminTransaction"),
                  }}
                >
                  <PersonIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Transaction
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminplan"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminplan"),
                  }}
                >
                  <TextSnippetIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Plans
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminBlog"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminBlog"),
                  }}
                >
                  <PersonIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Blog
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminPages"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminPages"),
                  }}
                >
                  <LayersIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Pages
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminUser"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminUser"),
                  }}
                >
                  <GroupIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Users
                </Typography>
              </Link>
            </li>
            <li style={{ listStyle: "none" }}>
              <Link
                href="/dashboard/adminSetting"
                style={{ textDecoration: "none" }}
                passHref
              >
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontFamily: "Poppins",
                    fontSize: "18px",
                    lineHeight: "50px",
                    fontWeight: "400",
                    color: "#737791",
                    textAlign: "left",
                    ...getLinkStyle("/dashboard/adminSetting"),
                  }}
                >
                  <SettingsIcon
                    sx={{
                      paddingRight: "20px",
                      paddingTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                  Setting
                </Typography>
              </Link>
            </li>
          </ul>
          <Box sx={{ position: "absolute", top: "-20px", left: "60px" }}>
            <Typography
              sx={{
                background: "#fff",
                borderRadius: "16px",
                color: "#403F3F",
                padding: "8px 20px",
                boxShadow: "none",
                textTransform: "capitalize",
                fontSize: "18px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
            >
              Admin Panel
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Dashsidebar;
