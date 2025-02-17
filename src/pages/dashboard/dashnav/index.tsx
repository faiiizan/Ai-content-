"use Client";
import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatIcon from "@mui/icons-material/Chat";
import RestoreIcon from "@mui/icons-material/Restore";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PaidIcon from "@mui/icons-material/Paid";
import PortraitIcon from "@mui/icons-material/Portrait";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import logoImage from "../../../app/Assets/Imges/logo.svg";
import Hero from "../../../pages/dashboard.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import dashboardman from "../../../app/Assets/Imges/dasboardman.png";
import Link from "next/link";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  TextSnippet,
  Settings,
} from "@mui/icons-material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import HistoryIcon from "@mui/icons-material/History";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PersonIcon from "@mui/icons-material/Person";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import FeedIcon from "@mui/icons-material/Feed";
import { SiGoogleassistant } from "react-icons/si";
import { PiChartPieSliceFill } from "react-icons/pi";
import GroupIcon from "@mui/icons-material/Group";
import LayersIcon from "@mui/icons-material/Layers";
//@ts-ignore
import Cookies from "js-cookie";

const Dashnav = () => {
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

  const [open, setOpen] = useState(false); // State to control drawer visibility

  // Function to toggle the drawer open/close
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  const [anchorEll, setAnchorEll] = useState<HTMLElement | null>(null);

  const handleClickk = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEll(event.currentTarget);
  };

  const handleClosee = () => {
    setAnchorEll(null);
  };

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
  };

  const menuItems = (
    <Box
      sx={{
        width: { xs: 250, sm: "500px" },
        padding: { xs: "15px 10px", sm: "20px 30px" },
      }}
    >
      {/* Credits Section */}
      <Box>
        <Image
          src={logoImage}
          alt="logo"
          style={{ margin: "auto", width: "180px", paddingLeft: "30px" }}
          className={Hero.navLogo}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: { xs: "4px solid #4AB58E", sm: "8px solid #4AB58E" },
          borderRadius: { xs: "2px", sm: "4px" },
          marginBottom: "40px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "15px", sm: "18px" },
            lineHeight: "22.5px",
            fontWeight: { xs: "400", sm: "700" },
          }}
        >
          Credits
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "15px", sm: "18px" },
            lineHeight: "22.5px",
            fontWeight: { xs: "400", sm: "700" },
          }}
        >
          5000 words left
        </Typography>
      </Box>

      {/* Dashboard Section */}

      <Box
        sx={{
          height: "100px",
          width: { xs: "100%", sm: "90%" },
          border: { xs: "none", sm: "none" },
          borderRadius: { sm: "none", xs: "none" },
          padding: { xs: "0px 0px 60px 10px", sm: "30px 0px 60px 30px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          borderBottom: {
            xs: "1px solid #0000001A",
            sm: "1px solid #0000001A",
          },
        }}
      >
        <ul style={{ padding: "0px", margin: "0px" }}>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link passHref href="/dashboard" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", sm: "22px" },
                  lineHeight: { xs: "20px", sm: "27px" },
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                }}
              >
                <PiChartPieSliceFill style={{ marginRight: "20px" }} />{" "}
                Dashboard
              </Typography>
            </Link>
          </li>

          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/templates"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", sm: "22px" },
                  lineHeight: { xs: "20px", sm: "27px" },
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                }}
              >
                <DashboardIcon sx={{ marginRight: "20px" }} /> Templates
              </Typography>
            </Link>
          </li>
          <li style={{ textDecoration: "none", listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/assistant"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", sm: "22px" },
                  lineHeight: { xs: "20px", sm: "27px" },
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                <SiGoogleassistant style={{ paddingRight: "20px" }} /> Assistant
              </Typography>
            </Link>
          </li>
        </ul>
      </Box>

      {/* Workflows Section */}
      <Box
        sx={{
          minHeight: "100px",
          width: { xs: "100%", sm: "90%" },
          border: { xs: "none", sm: "none" },
          borderRadius: { sm: "none", xs: "none" },
          padding: { xs: "0px 0px 30px 10px", sm: "30px 0px 50px 30px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          marginTop: "10px",
          borderBottom: { sm: "1px solid #0000001A" },
        }}
      >
        <ul style={{ padding: "0px", margin: "0px" }}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              fontFamily: "Poppins",
              fontSize: { xs: "16px", sm: "22px" },
              lineHeight: "27px",
              fontWeight: { xs: "400", sm: "700" },
              color: "#737791",
              position: "absolute",
              top: "-30px",
              left: { sm: "16px", xs: "0px" },
              padding: "5px 15px 5px 10px",
              backgroundColor: "#fff",
            }}
          >
            Workflows
          </Typography>
          <li style={{ listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/analyst"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "16px", sm: "22px" },
                  lineHeight: "27px",
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                }}
              >
                <DashboardIcon sx={{ marginRight: "20px" }} /> Data Analyst
              </Typography>
            </Link>
          </li>
          <Link
            passHref
            href="/dashboard/article"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "22px" },
                lineHeight: "27px",
                fontWeight: { xs: "400", sm: "700" },
                color: "#737791",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              <FeedIcon sx={{ paddingRight: "20px" }} /> Article Generator
            </Typography>
          </Link>
          <Link
            passHref
            href="/dashboard/image"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "22px" },
                lineHeight: "27px",
                fontWeight: { xs: "400", sm: "700" },
                color: "#737791",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              <InsertPhotoIcon sx={{ paddingRight: "20px" }} /> Image Generator
            </Typography>
          </Link>
          <Link
            passHref
            href="/dashboard/contentwriter"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "22px" },
                lineHeight: "27px",
                fontWeight: { xs: "400", sm: "700" },
                color: "#737791",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              <ContentCopyIcon sx={{ paddingRight: "20px" }} /> Content Rewriter
            </Typography>
          </Link>
          <Link
            passHref
            href="/dashboard/document"
            style={{ textDecoration: "none" }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "22px" },
                lineHeight: "27px",
                fontWeight: { xs: "400", sm: "700" },
                color: "#737791",
                paddingTop: "20px",
                textAlign: "left",
              }}
            >
              <DocumentScannerIcon sx={{ paddingRight: "20px" }} /> Documents
            </Typography>
          </Link>
        </ul>
      </Box>

      {/* Account Section */}
      <Box
        sx={{
          minHeight: "100px",
          width: { xs: "100%", sm: "90%" },
          border: { xs: "none", sm: "none" },
          borderRadius: "30px",
          padding: { xs: "0px 0px 30px 10px", sm: "30px 0px 50px 30px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          position: "relative",
          marginTop: "20px",
        }}
      >
        <ul style={{ padding: "0px", margin: "0px" }}>
          <li style={{ listStyle: "none" }}>
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Poppins",
                fontSize: { xs: "16px", sm: "22px" },
                lineHeight: "27px",
                fontWeight: { xs: "400", sm: "700" },
                color: "#737791",
                position: "absolute",
                top: "-40px",
                left: { sm: "16px", xs: "0px" },
                padding: "5px 15px 5px 10px",
                backgroundColor: "#fff",
              }}
            >
              Accounts
            </Typography>
          </li>

          <li style={{ listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/history"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Poppins",
                  fontSize: { xs: "18px", sm: "22px" },
                  lineHeight: "27px",
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                }}
              >
                <DashboardIcon sx={{ marginRight: "20px" }} /> My History
              </Typography>
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/usage"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins",
                  fontSize: { xs: "18px", sm: "22px" },
                  lineHeight: "27px",
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                <ReceiptIcon sx={{ paddingRight: "20px" }} /> Usage History
              </Typography>
            </Link>
          </li>

          <li style={{ listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/plans"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins",
                  fontSize: { xs: "18px", sm: "22px" },
                  lineHeight: "27px",
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                <HistoryIcon sx={{ paddingRight: "20px" }} /> Plans and Billing
              </Typography>
            </Link>
          </li>
          <li style={{ listStyle: "none" }}>
            <Link
              passHref
              href="/dashboard/profile"
              style={{ textDecoration: "none" }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  fontFamily: "Poppins",
                  fontSize: { xs: "18px", sm: "22px" },
                  lineHeight: "27px",
                  fontWeight: { xs: "400", sm: "700" },
                  color: "#737791",
                  paddingTop: "20px",
                  textAlign: "left",
                }}
              >
                <PersonIcon sx={{ paddingRight: "20px" }} /> Profile Details
              </Typography>
            </Link>
          </li>
        </ul>
      </Box>
    </Box>
  );
  return (
    <>
      <Box>
        <Container
          maxWidth="xl"
          sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        >
          <Box sx={{ height: "60px", width: "100%" }}>
            <Grid container>
              <Grid
                xs={12}
                sm={2.5}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {/* hambburger part start */}
                <Box>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={0}
                      sx={{ display: { xs: "block", md: "none", sm: "block" } }}
                    >
                      <IconButton onClick={() => toggleDrawer()}>
                        <MenuIcon sx={{ color: "#737791", fontSize: "30px" }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Drawer
                    anchor="left"
                    open={open}
                    onClose={() => toggleDrawer()}
                    sx={{
                      "& .MuiDrawer-paper": {
                        width: open ? { xs: "280px", sm: "580px" } : "240px", // Customize the width based on the open state
                        transition: "width 0.3s", // Smooth transition when resizing
                      },
                    }}
                  >
                    {menuItems} {/* Drawer content */}
                  </Drawer>
                </Box>
                {/* hamburger part end */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginRight: { md: "60px", xs: "0px" },
                  }}
                >
                  <Image
                    src={logoImage}
                    alt="logo image"
                    className={Hero.LogoImage}
                    style={{ height: "78px" }}
                  />
                </Box>
              </Grid>
              <Grid
                xs={0}
                sm={9.5}
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <Box sx={{ padding: "0px 45px", width: "150px" }}>
                    <Link href="/dashboard/templates">
                      <Button
                        variant="contained"
                        sx={{
                          width: "100%",
                          fontSize: "14px",
                          fontWeight: "600",
                          fontFamily: "Poppins",
                          textTransform: "capitalize",
                          padding: "15px 10px",
                          boxShadow: "none",
                          backgroundColor: "#D7F200",
                          color: "#000000",
                          borderRadius: "12px",
                        }}
                      >
                        create content
                      </Button>
                    </Link>
                  </Box>
                  <Link href="/dashboard/assistant">
                    <Box
                      sx={{
                        height: "48px",
                        width: "48px",
                        backgroundColor: "#FFFAF1",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "8px",
                        color: "#FFA412",
                        cursor: "pointer",
                        marginLeft: "5px",
                      }}
                    >
                      <ChatIcon sx={{ color: "#000" }} />
                    </Box>
                  </Link>
                  <Box
                    sx={{
                      paddingLeft: "45px",
                      display: "flex",
                      cursor: "pointer",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={dashboardman}
                      alt="dashboardman"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "space-between",
                        flexDirection: "column",
                        height: "60px",
                        paddingLeft: "20px",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingLeft: "12px",
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          color: "#374557",
                          lineHeight: "24px",
                          fontWeight: "600",
                        }}
                      >
                        {user ? (user?.name?.split(" ")[0] as string) : "Guest"}
                      </Typography>
                      <Typography
                        sx={{
                          paddingLeft: "12px",
                          fontSize: "16px",
                          color: "#737791",
                          lineHeight: "20px",
                          fontWeight: "400",
                          fontFamily: "Poppins",
                          paddingTop: "10px",
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        {user ? user.role : "user"}
                      </Typography>

                      <Menu
                        anchorEl={anchorEll}
                        open={Boolean(anchorEll)}
                        onClose={handleClosee}
                        PaperProps={{
                          style: {
                            width: "240px", // You can adjust this width
                            fontFamily: "Poppins",
                            border: "1px solid #0000002B",
                            padding: "10px",
                          },
                        }}
                      >
                        <Link
                          href="/dashboard/upgradeplan"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleClosee}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                              paddingLeft: "15px",
                            }}
                          >
                            <ShowChartIcon
                              sx={{ marginRight: "15px", paddingLeft: "5px" }}
                            />
                            Upgarde Plan
                          </MenuItem>
                        </Link>
                        <Link
                          href="/dashboard/history"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleClosee}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                              paddingLeft: "15px",
                            }}
                          >
                            <RestoreIcon
                              sx={{ marginRight: "15px", paddingLeft: "5px" }}
                            />
                            My History
                          </MenuItem>
                        </Link>
                        <Link
                          href="/dashboard/usage"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleClosee}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                              paddingLeft: "15px",
                            }}
                          >
                            <AutoGraphIcon
                              sx={{ marginRight: "15px", paddingLeft: "5px" }}
                            />
                            Usage History
                          </MenuItem>
                        </Link>
                        <Link
                          href="/dashboard/plans"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleClosee}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                              paddingLeft: "15px",
                            }}
                          >
                            <PaidIcon
                              sx={{ marginRight: "15px", paddingLeft: "5px" }}
                            />
                            Plans and Billings
                          </MenuItem>
                        </Link>
                        <Link
                          href="/dashboard/profile"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleClosee}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                              paddingLeft: "15px",
                            }}
                          >
                            <PortraitIcon
                              sx={{ marginRight: "15px", paddingLeft: "5px" }}
                            />
                            Profile Details
                          </MenuItem>
                        </Link>
                        <Divider
                          sx={{
                            my: 1,
                            borderColor: "#e0e0e0",
                            borderWidth: "1px",
                          }}
                        />
                        <Link
                          href="/login"
                          style={{ textDecoration: "none", color: "#000" }}
                        >
                          <MenuItem
                            onClick={handleLogout}
                            sx={{
                              fontFamily: "Poppins",
                              fontWeight: "500",
                              letterSpacing: "1px",
                              paddingTop: "20px",
                              display: "flex",
                              alignItems: "flex-start",
                            }}
                          >
                            <LogoutIcon
                              sx={{ marginRight: "15px", paddingLeft: "8px" }}
                            />
                            Log Out
                          </MenuItem>
                        </Link>
                      </Menu>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "15px",
                      }}
                      onClick={handleClickk}
                    >
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Dashnav;
