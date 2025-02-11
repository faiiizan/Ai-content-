"use Client";
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link as MUILink,
  TextField,
  Button,
  Checkbox,
  Divider,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import Hero from "../../../pages/dashboard.module.css";
import Link from "next/link";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Dashnav from "../dashnav";
import Dashsidebar from "../dashsidebar";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../app/Assets/Imges/logo.svg";
import RateReviewIcon from "@mui/icons-material/RateReview";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import image1 from "../../../app/Assets/Imges/group1723.png";
import image2 from "../../../app/Assets/Imges/Group 1707482403.png";
import image3 from "../../../app/Assets/Imges/Group 1707482404.png";
import image4 from "../../../app/Assets/Imges/Group 1707482406.png";
import image5 from "../../../app/Assets/Imges/Group 1707482407.png";
import image6 from "../../../app/Assets/Imges/Group 1707482408.png";
import image8 from "../../../app/Assets/Imges/Group 1707482409.png";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Templates = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event, newValue, "djbd");
  };

  const Curcurrencies = [
    {
      value: "USD (United States Dollar)",
      label: "USD (United States Dollar)",
    },
    {
      value: "INR (Indian Rupees)",
      label: "INR (Indian Rupees)",
    },
  ];

  const currencies = [
    {
      value: "0",
      label: "0",
    },
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
  ];
  const Theme = [
    {
      value: "Left Side Of Price",
      label: "Left Side Of Price",
    },
    {
      value: "Right Side Of Price",
      label: "Right Side Of Price",
    },
  ];
  const DateFormate = [
    {
      value: "07/02/2025",
      label: "07/02/2025",
    },
    {
      value: "07-02-2025",
      label: "07-02-2025",
    },
    {
      value: "2025.02.07",
      label: "2025.02.07",
    },
    {
      value: "07 Feb ,2025",
      label: "07 Feb ,2025",
    },
  ];
  const TimeFormate = [
    {
      value: "No Plan",
      label: "No Plan",
    },
    {
      value: "Free",
      label: "Free",
    },
    {
      value: "Standard ",
      label: "Standard  ",
    },
    {
      value: "Premium ",
      label: "Premium  ",
    },
    {
      value: "Lite ",
      label: "Lite  ",
    },
  ];
  const Tls = [
    {
      value: "TLS",
      label: "TLS",
    },
    {
      value: "SSL",
      label: "SSL",
    },
    {
      value: "None ",
      label: "  None",
    },
  ];
  const SMtp = [
    {
      value: "587 TLS",
      label: "587 TLS",
    },
    {
      value: "465 SMTP",
      label: "465 SMTP",
    },
    {
      value: "587 ",
      label: "  587",
    },
    {
      value: "465 ",
      label: "  465",
    },
  ];
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const templates = [
    {
      value: "GPT 4",
      label: "GPT 4",
    },
    {
      value: "GPT 4 Turbo",
      label: "GPT 4 Turbo",
    },
    {
      value: "GPT 4 Mini ",
      label: "GPT 4 Mini",
    },
    {
      value: "GPT 4 o",
      label: "  GPT 4 o",
    },
  ];

  const Imagearr = [
    {
      value: "DALL-E-3",
      label: "DALL-E-3",
    },
    {
      value: "DALL-E-2",
      label: "DALL-E-2",
    },
  ];

  const rows = [
    { slNo: 1, Name: "GPT-4", Model: "gpt-4", Type: "GPT" },
    { slNo: 2, Name: "GPT-4 Turbo", Model: "gpt-4-1106-preview", Type: "GPT" },
    { slNo: 3, Name: "DALL-E-2", Model: "dall-e-2", Type: "GPT" },
    { slNo: 4, Name: "GPT 4o mini", Model: "gpt-4o", Type: "GPT" },
    { slNo: 5, Name: "GPT-4o", Model: "gpt-4o-mini", Type: "GPT" },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const rowss = [
    {
      slNo: 1,
      name: "Arabic",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 2,
      name: "English",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 3,
      name: "Bengali",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 4,
      name: "Russian",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 5,
      name: "Hindi",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 6,
      name: "Japanese",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 7,
      name: "Chinese",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 8,
      name: "Bhojpuri",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
  ];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Open the menu when button is clicked
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleClosee = () => {
    setAnchorEl(null);
  };

  const rowssTone = [
    {
      slNo: 1,
      name: "Appreciative",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 2,
      name: "Assertive",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 3,
      name: "Awestruck",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 4,
      name: "Bold",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 5,
      name: "Casual",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 6,
      name: "Cautionary",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 7,
      name: "Convincing",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 8,
      name: "Dramatic",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 9,
      name: "Enthusiastic",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 10,
      name: "Formal",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 11,
      name: "Friendly",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
    {
      slNo: 12,
      name: "Funny",
      planName: "Free",
      fat: "Feb 25,2025",
      expiry: "Feb 25,2025",
      carbs: <DeleteIcon />,
    },
  ];

  const paymentrows = [
    {
      slNo: 1,
      name: image1,
      planName: "Flutterwave",
      fat: "",
      expiry: "Marketing",
      carbs: <DeleteIcon />,
      provider: "African payment gateway",
    },
    {
      slNo: 2,
      name: image2,
      planName: "Instamojo",
      fat: "",
      expiry: "Sales",
      carbs: <DeleteIcon />,
      provider: "Indian payment gateway ",
    },
    {
      slNo: 3,
      name: image3,
      planName: "Mercado Pago",
      fat: "",
      expiry: "Health",
      carbs: <DeleteIcon />,
      provider: "Latin american payment gateway ",
    },
    {
      slNo: 4,
      name: image4,
      planName: "Midtrans",
      fat: "",
      expiry: "Job",
      carbs: <DeleteIcon />,
      provider: "Indonesia payment gateway ",
    },
    {
      slNo: 5,
      name: image5,
      planName: "Mollie",
      fat: "",
      expiry: "Business",
      carbs: <DeleteIcon />,
      provider: "European payment gateway ",
    },
    {
      slNo: 6,
      name: image6,
      planName: "Omise",
      fat: "",
      expiry: "Website",
      carbs: <DeleteIcon />,
      provider: "Thailand payment gateway ",
    },
    {
      slNo: 7,
      name: image5,
      planName: "Mollie",
      fat: "",
      expiry: "Business",
      carbs: <DeleteIcon />,
      provider: "Sri Lankan payment gateway",
    },
    {
      slNo: 8,
      name: image8,
      planName: "PayPal",
      fat: "",
      expiry: "Website",
      carbs: <DeleteIcon />,
      provider: "Global payment gateway ",
    },
  ];

  const [anchorElp, setAnchorElp] = useState<null | HTMLElement>(null);

  // Open the menu when button is clicked
  const handleClickp = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElp(event.currentTarget);
  };

  // Close the menu
  const handleClosep = () => {
    setAnchorElp(null);
  };
  return (
    <>
      <Box>
        <Dashnav />
        {/* top header completed */}
        {/* body part started */}
        <Box sx={{ paddingTop: "15px" }}>
          <Grid
            container
            sx={{ paddingLeft: "0px", paddingRight: "0px", padding: "0px" }}
          >
            <Dashsidebar />

            <Grid
              xs={12}
              sm={12}
              md={9.5}
              sx={{
                backgroundColor: "#F8F9FA",
                padding: { xs: "10px", sm: " 30px " },
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
                    href="/dashboard/templates"
                  >
                    Templates
                  </MUILink>
                </Breadcrumbs>
              </Box>
              <Grid
                xs={12}
                md={12}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "0px",
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    backgroundColor: "#fff",
                    paddingLeft: "2px",
                    padding: { xs: "0px", sm: "20px" },
                    borderRadius: "20px",
                  }}
                >
                  <Box sx={{ borderBottom: 0, borderColor: "none" }}>
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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

                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
                            padding: "0px",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
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
                          "&.Mui-selected": {
                            backgroundColor: "#D7F200", // background color when tab is active
                            color: "#000",
                          },
                        }}
                      />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "30px",
                        color: "#222222",
                      }}
                    >
                      Site Setting
                    </Typography>
                    <Box>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={6} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Website Name
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                          />
                        </Grid>
                        <Grid xs={12} md={6} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Website Media Title
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px", backgroundColor: "" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Box sx={{ paddingTop: "30px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Website Meta Description
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "20px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                        />
                      </Box>
                      <Box>
                        <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Default Language
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="English"
                            >
                              {currencies.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Default theme
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="Light"
                            >
                              {Theme.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Default Format
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="07 Feb ,2025"
                              type="date"
                            >
                              {DateFormate.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Time Format
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="11:27 Am"
                            >
                              {TimeFormate.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Time Zone
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Copyright Information
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Box>
                      <Box sx={{ paddingTop: "30px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Organization address
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "20px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ paddingTop: "30px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Footer Text
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "20px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                          rows={4}
                          multiline
                        />
                      </Box>
                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: "19.18px",
                            fontWeight: "700",
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: "20px 35px",
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "30px",
                        color: "#222222",
                      }}
                    >
                      Finance Settings
                    </Typography>
                    <Box>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Currency
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Symbol
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={3} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Decimal
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="0"
                            >
                              {currencies.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Symbol Position
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="Left Side Of Price"
                            >
                              {Theme.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Tax Rate(%)
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              defaultValue="07 Feb ,2025"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Free Plan
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="Free"
                            >
                              {TimeFormate.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Welcome Credits - Words
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Welcome Credit Images
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Carry Forward unused credits on plan renewal
                              (excludes free plans).
                            </Typography>
                          </li>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Unused credits reset when the subscription
                              expires.
                            </Typography>
                          </li>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Prepaid plans are available for paid subscribers
                              only.
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: "19.18px",
                            fontWeight: "700",
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: "20px 35px",
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "30px",
                        color: "#222222",
                      }}
                    >
                      Security Settings
                    </Typography>
                    <Box>
                      <Box sx={{ paddingTop: "20px" }}>
                        <Grid container>
                          <Grid
                            xs={12}
                            sm={6}
                            item
                            sx={{ marginBottom: { xs: "20px", sm: "0px" } }}
                          >
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  User registration enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Email verification enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Device verification enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  GDPR Cookie Policy banner show
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Article generator enable
                                </Typography>
                              </li>
                            </ul>
                            <Box sx={{ paddingTop: "12px" }}>
                              <label
                                htmlFor=""
                                style={{
                                  fontFamily: "Lato",
                                  fontSize: "19.18px",
                                  fontWeight: "600",
                                  lineHeight: "23.02px",
                                  color: "#222222",
                                }}
                              >
                                Google analytics Tracking ID
                              </label>
                              <TextField
                                fullWidth
                                sx={{ paddingTop: "15px" }}
                                InputProps={{
                                  style: {
                                    backgroundColor: "#fff", // background color for the input area (where the text is typed)
                                    borderRadius: "10px",
                                    border: "1px solid #000",
                                    fontFamily: "Lato",
                                  },
                                }}
                                id="outlined-select-currency"
                                placeholder="eg-G 00000"
                              ></TextField>
                            </Box>
                            <Box sx={{ paddingTop: "12px" }}>
                              <label
                                htmlFor=""
                                style={{
                                  fontFamily: "Lato",
                                  fontSize: "19.18px",
                                  fontWeight: "600",
                                  lineHeight: "23.02px",
                                  color: "#222222",
                                }}
                              >
                                Bad word blacklist (separate by comma)
                              </label>
                              <TextField
                                fullWidth
                                sx={{ paddingTop: "15px" }}
                                InputProps={{
                                  style: {
                                    backgroundColor: "#fff", // background color for the input area (where the text is typed)
                                    borderRadius: "10px",
                                    border: "1px solid #000",
                                    fontFamily: "Lato",
                                  },
                                }}
                                id="outlined-select-currency"
                                placeholder="eg-G 00000"
                              ></TextField>
                            </Box>
                          </Grid>
                          <Grid
                            xs={12}
                            sm={6}
                            item
                            paddingLeft={{ xs: "0px", sm: "10px" }}
                          >
                            <ul
                              style={{
                                margin: "0px",
                                padding: "10px 0px 0px 0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Landing page enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Template enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Documents enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  AI assistant enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Website maintenance mode enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Content rewriter enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Image generator enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Smart editor enable
                                </Typography>
                              </li>
                            </ul>
                            <ul
                              style={{
                                paddingTop: "10px",
                                margin: "0px",
                                padding: "0px",
                              }}
                            >
                              <li
                                style={{
                                  listStyle: "none",
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}
                              >
                                <Checkbox {...label} />
                                <Typography
                                  sx={{
                                    fontSize: { sm: "19px", xs: "16px" },
                                    fontFamily: "lato",
                                    color: "#222222",
                                  }}
                                >
                                  Blog post enable
                                </Typography>
                              </li>
                            </ul>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "14px" },
                            fontWeight: { xs: "600", sm: "700" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 28px" },
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={3}>
                    <Grid
                      container
                      spacing={4}
                      sx={{ padding: "0px!important" }}
                      className={Hero.TabPanel}
                    >
                      <Grid xs={12} md={5.5} sm={6} item>
                        <Box
                          sx={{
                            backgroundColor: " #F0F5F8",
                            padding: "20px",
                            borderRadius: "20px",
                            position: "relative",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "30px",
                              lineHeight: "36px",
                              fontWeight: "600",
                            }}
                          >
                            Favicon
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              lineHeight: "23.02px",
                              fontWeight: "400",
                              padding: "10px 0px",
                              color: "background: #222222",
                            }}
                          >
                            Image at least 32 X 32 px square and .png file
                            format only.
                          </Typography>
                          <Box
                            sx={{
                              height: "64px",
                              width: "156px",
                              marginLeft: "-18px",
                            }}
                          >
                            <Image
                              src={logo}
                              alt="logoImage"
                              style={{ height: "64px", width: "156px" }}
                            />
                          </Box>
                          <Box
                            sx={{ padding: "15px 0px", paddingBottom: "10px" }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#D7F200",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                              }}
                            >
                              Change
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={12} md={5.5} sm={6} item>
                        <Box
                          sx={{
                            backgroundColor: " #F0F5F8",
                            padding: "20px",
                            borderRadius: "20px",
                            position: "relative",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "30px",
                              lineHeight: "36px",
                              fontWeight: "600",
                            }}
                          >
                            Logo
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              lineHeight: "23.02px",
                              fontWeight: "400",
                              padding: "10px 0px",
                              color: "background: #222222",
                            }}
                          >
                            At least 50 px height and .svg/ .png/ .jpg file
                            format.
                          </Typography>
                          <Box
                            sx={{
                              height: "64px",
                              width: "156px",
                              marginLeft: "-18px",
                            }}
                          >
                            <Image
                              src={logo}
                              alt="logoImage"
                              style={{ height: "64px", width: "156px" }}
                            />
                          </Box>
                          <Box
                            sx={{ padding: "15px 0px", paddingBottom: "10px" }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#D7F200",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                              }}
                            >
                              Change
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#0CC0DF",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                                marginLeft: { sm: "10px", xs: "0px" },
                                marginTop: { sm: "0px", xs: "10px" },
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={12} md={5.5} sm={6} item>
                        <Box
                          sx={{
                            backgroundColor: " #F0F5F8",
                            padding: "20px",
                            borderRadius: "20px",
                            position: "relative",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "30px",
                              lineHeight: "36px",
                              fontWeight: "600",
                            }}
                          >
                            Dark logo - for light mode
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              lineHeight: "23.02px",
                              fontWeight: "400",
                              padding: "10px 0px",
                              color: "background: #222222",
                            }}
                          >
                            Image at least 32 X 32 px square and .png file
                            format only.
                          </Typography>
                          <Box
                            sx={{
                              height: "64px",
                              width: "156px",
                              marginLeft: "-18px",
                            }}
                          >
                            <Image
                              src={logo}
                              alt="logoImage"
                              style={{ height: "64px", width: "156px" }}
                            />
                          </Box>
                          <Box
                            sx={{ padding: "15px 0px", paddingBottom: "10px" }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#D7F200",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                              }}
                            >
                              Change
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={12} md={5.5} sm={6} item>
                        <Box
                          sx={{
                            backgroundColor: " #F0F5F8",
                            padding: "20px",
                            borderRadius: "20px",
                            position: "relative",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "30px",
                              lineHeight: "36px",
                              fontWeight: "600",
                            }}
                          >
                            Light logo - for dark mode
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              lineHeight: "23.02px",
                              fontWeight: "400",
                              padding: "10px 0px",
                              color: "background: #222222",
                            }}
                          >
                            At least 50 px height and .svg/ .png/ .jpg file
                            format.
                          </Typography>
                          <Box
                            sx={{
                              height: "64px",
                              width: "156px",
                              marginLeft: "-18px",
                            }}
                          >
                            <Image
                              src={logo}
                              alt="logoImage"
                              style={{ height: "64px", width: "156px" }}
                            />
                          </Box>
                          <Box
                            sx={{ padding: "15px 0px", paddingBottom: "10px" }}
                          >
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#D7F200",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                              }}
                            >
                              Change
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: "#0CC0DF",
                                color: "#000",
                                boxShadow: "none",
                                textTransform: "capitalize",
                                borderRadius: "12px",
                                fontSize: "19px",
                                fontFamily: "Quicksand",
                                fontWeight: "700",
                                lineHeight: "23.98px",
                                padding: "10px 20px",
                                marginLeft: { sm: "10px", xs: "0px" },
                                marginTop: { sm: "0px", xs: "10px" },
                              }}
                            >
                              Delete
                            </Button>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={4}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "30px",
                        color: "#222222",
                      }}
                    >
                      Mail Settings
                    </Typography>
                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Primary email address
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            SMTP server
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box>
                        <Grid container spacing={3} sx={{ paddingTop: "30px" }}>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Security Type
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              select
                              defaultValue="TLS"
                            >
                              {Tls.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              SMTP port
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                              select
                              defaultValue="465 SMTP"
                            >
                              {SMtp.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
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
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              SMTP username
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={6} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "19.18px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              SMTP password
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                  fontFamily: "Lato",
                                },
                              }}
                              id="outlined-select-currency"
                            ></TextField>
                          </Grid>
                        </Grid>
                      </Box>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Active SMPT mail server
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#0CC0DF",
                            color: "#fff",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginLeft: { xs: "none", sm: "25px" },
                          }}
                        >
                          Test mail
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={5}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      Mailchimp
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { sm: "20px", xs: "16px" },
                        lineHeight: "24.2px",
                        fontWeight: "400",
                        paddingBottom: "30px",
                        color: "#05004E",
                      }}
                    >
                      Connect with Mailchimp marketing automation and email
                      marketing platform.{" "}
                      <Link href="#">http://mailchimp.com</Link>
                    </Typography>
                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Api key
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Audience ID
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Active mailchimp
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#0CC0DF",
                            color: "#fff",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginLeft: { xs: "none", sm: "25px" },
                          }}
                        >
                          Test mail
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={6}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      Social Follow Link
                    </Typography>

                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Facebook Link
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Twitter link
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Instagram link
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            LinkedIn link
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Youtube demo video link
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>

                  <CustomTabPanel value={value} index={7}></CustomTabPanel>
                  <CustomTabPanel value={value} index={8}>
                    <Typography
                      sx={{
                        fontSize: "35.18px",
                        fontFamily: "Lato",
                        fontWeight: "600",
                        lineHeight: "42.22px",
                        color: "#222",
                      }}
                    >
                      Payment
                    </Typography>
                    <TableContainer
                      component={Paper}
                      sx={{ width: "100%", marginTop: "30px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              Sl.No
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Image
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Provider
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Status
                            </TableCell>

                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {paymentrows.map((row) => (
                            <TableRow
                              key={row.slNo}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                {row.slNo}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingLeft: "5px",
                                  textAlign: "center",
                                  display: "flex",
                                  alignItems: "flex-end",
                                  justifyContent: "center",
                                  paddingTop: "26px",
                                }}
                              >
                                <Image
                                  src={row.name}
                                  alt="image"
                                  style={{ width: "50px", height: "50px" }}
                                />
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                {row.planName} <br /> {row.provider}
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#F5F5F5",
                                    color: "#4A4A4ACC",
                                    boxShadow: "none",
                                    fontFamily: "Poppins",
                                  }}
                                  onClick={handleClickp}
                                >
                                  Active{" "}
                                  <KeyboardArrowDownIcon
                                    sx={{ marginLeft: "10px" }}
                                  />
                                </Button>
                                <Menu
                                  anchorEl={anchorElp}
                                  open={Boolean(anchorElp)}
                                  onClose={handleClosep}
                                  sx={{ marginTop: "10px" }}
                                >
                                  <MenuItem
                                    onClick={handleClosep}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Active
                                  </MenuItem>
                                  <MenuItem
                                    onClick={handleClosep}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Non-Active
                                  </MenuItem>
                                </Menu>
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  textAlign: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#3498DB",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <RateReviewIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#E74C3C",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <DeleteIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#2ECC71",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <RemoveRedEyeIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={9}>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: "Lato",
                          fontSize: "35.18px",
                          fontWeight: "600",
                          lineHeight: "42.22px",
                          color: "#222222",
                        }}
                      >
                        Cron job
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "20px",
                          fontFamily: "Roboto",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontSize: "17px",
                          lineHeight: "19px",
                        }}
                      >
                        Last updated: 10:10 AM
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "20px",
                          fontFamily: "Quicksand",
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "#7E7E7E",
                          lineHeight: "25px",
                        }}
                      >
                        {`Reload this page five minutes later. If last updated time changed, that's mean cron job schedule working. Otherwise manually set cron job schedule every 5 minutes by the following command. Cron job schedule will automatically update user subscription and other task.`}
                      </Typography>
                      <Box sx={{ paddingTop: "15px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Roboto",
                            fontSize: "17.04px",
                            lineHeight: "19px",
                            fontWeight: "700",
                            color: "#4A4A4A",
                          }}
                        >
                          Command:
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "15px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                              color: "#D61C1C",
                            },
                          }}
                          id="outlined-select-currency"
                          placeholder="*/5 * * * * php -q /home/payklwup/themebind.com/raitor/app/Cron.php >/dev/null 2>&1"
                        ></TextField>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={10}>
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      OpenAI API information
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { sm: "20px", xs: "16px" },
                        lineHeight: "24.2px",
                        fontWeight: "400",
                        paddingBottom: "30px",
                        color: "#05004E",
                      }}
                    >
                      Get your own api key from 
                      <Link href="#">https://platform.openai.com</Link>
                    </Typography>
                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            OpenAI ApiKey
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            OpenAI Organization ID (optional)
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Save Changes
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#0CC0DF",
                            color: "#fff",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginLeft: { xs: "none", sm: "25px" },
                          }}
                        >
                          Test Api
                        </Button>
                      </Box>
                    </Box>
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={11}>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "35.18px",
                          fontFamily: "Lato",
                          color: "#222222",
                          lineHeight: "42.22px",
                          fontWeight: "600",
                        }}
                      >
                        Verbilab
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                          fontSize: "17.04px",
                          lineHeight: "19.59px",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                          paddingLeft: "5px",
                        }}
                      >
                        Version: 1.0
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                          fontSize: "17.04px",
                          lineHeight: "19.59px",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                          paddingLeft: "5px",
                        }}
                      >
                        Automatic content and image generator
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                          fontSize: "17.04px",
                          lineHeight: "19.59px",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                          paddingLeft: "5px",
                        }}
                      >
                        If you need any assistance then contact
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                          fontSize: "17.04px",
                          lineHeight: "19.59px",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                          paddingLeft: "5px",
                        }}
                      >
                        Email: example@verbilab.ai
                      </Typography>
                      <Typography
                        sx={{
                          paddingTop: "15px",
                          fontSize: "17.04px",
                          lineHeight: "19.59px",
                          color: "#4A4A4A",
                          fontWeight: "700",
                          fontFamily: "Roboto",
                          paddingLeft: "5px",
                        }}
                      >
                        Github: https://github.com/verbilab
                      </Typography>
                    </Box>
                  </CustomTabPanel>
                </Box>
              </Grid>
              {/* enn main part */}
              {/* start popular part  */}

              {/* start tab panel 6 */}
              {value === 6 ? (
                <>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: { sm: "44px", xs: "20px" },
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      Google sign in
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { sm: "20px", xs: "16px" },
                        lineHeight: "24px",
                        fontWeight: "400",
                        paddingBottom: "30px",
                        color: "#05004E",
                      }}
                    >
                      Auth Redirect URI:{" "}
                      <Link href="#" style={{ textWrap: "wrap" }}>
                        /facebook{" "}
                      </Link>
                    </Typography>

                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Client ID
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Client secret
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Google sign in enable
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: { sm: "44px", xs: "20px" },
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      Facebook sign in
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { sm: "20px", xs: "16px" },
                        lineHeight: "24px",
                        fontWeight: "400",
                        paddingBottom: "30px",
                        color: "#05004E",
                      }}
                    >
                      Auth Redirect URI:{" "}
                      <Link href="#" style={{ textWrap: "wrap" }}>
                        /facebook{" "}
                      </Link>
                    </Typography>

                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            App ID
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            App Secret
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Facebook sign in enable
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      padding: { sm: "44px", xs: "20px" },
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Lato",
                        fontSize: "35px",
                        lineHeight: "42px",
                        fontWeight: "600",
                        paddingBottom: "20px",
                        color: "#222222",
                      }}
                    >
                      Linkeden sign in
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Inter",
                        fontSize: { sm: "20px", xs: "16px" },
                        lineHeight: "24px",
                        fontWeight: "400",
                        paddingBottom: "30px",
                        color: "#05004E",
                      }}
                    >
                      Auth Redirect URI:{" "}
                      <Link href="#" style={{ textWrap: "wrap" }}>
                        /facebook{" "}
                      </Link>
                    </Typography>

                    <Box sx={{ padding: "0px" }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Client ID
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="support@verbilabmail.com"
                          ></TextField>
                        </Grid>
                      </Grid>
                      <Grid container spacing={3} sx={{ paddingTop: "20px" }}>
                        <Grid xs={12} md={12} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Client secret
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                          ></TextField>
                        </Grid>
                      </Grid>

                      <Box sx={{ paddingTop: "20px" }}>
                        <ul style={{ padding: "0px", margin: "0px" }}>
                          <li
                            style={{
                              listStyle: "none",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Checkbox {...label} />
                            <Typography
                              sx={{
                                fontSize: "19px",
                                fontFamily: "lato",
                                color: "#222222",
                              }}
                            >
                              Linkedin sign in enable
                            </Typography>
                          </li>
                        </ul>
                      </Box>

                      <Box
                        sx={{
                          paddingTop: "50px",
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          flexWrap: { sm: "none", xs: "wrap" },
                        }}
                      >
                        <Button
                          variant="contained"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontFamily: "Quicksand",
                            boxShadow: "none",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            fontWeight: { sm: "700", xs: "600" },
                            lineHeight: "19.18px",
                            textTransform: "capitalize",
                            padding: { sm: "20px 35px", xs: "15px 30px" },
                            marginBottom: { xs: "10px", sm: "0px" },
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </>
              ) : null}
              {/* end tab panel 7  */}
              {/* start tab panel 7 */}
              {value === 7 ? (
                <>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "35.18px",
                          fontWeight: "600",
                          fontFamily: "Lato",
                          lineHeight: "42.22px",
                          color: "#222222",
                        }}
                      >
                        Testimonials
                      </Typography>
                      <Box sx={{ marginTop: { xs: "20px", sm: "0px" } }}>
                        <Button
                          variant="contained"
                          sx={{
                            backgroundColor: "#D7F200",
                            color: "#000",
                            boxShadow: "none",
                            borderRadius: "12px",
                            textTransform: "capitalize",
                            padding: { sm: "12px 30px", xs: "8px 20px" },
                            fontFamily: "Quicksand",
                            fontWeight: "700",
                            fontSize: { xs: "16px", sm: "19.18px" },
                          }}
                        >
                          Add Testimonial
                        </Button>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        Thomas Flores
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      SEO Analyst
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      The content provided is well-optimized for SEO. The app
                      allows you to input your desired specifications and it
                      generates text that perfectly aligns with your needs in
                      terms of both content and tone. It proves to be extremely
                      helpful in generating the kind of text you require.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        Erica Davis
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      Brand Manage
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      {`I find this platform to be extremely useful for marketing purposes. It allows you to input the information and specifications you have, and it generates a result that greatly assists in creating the desired text and tone. The platform's ability to produce tailored content is truly valuable for generating effective marketing materials.`}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        Anthony Hill
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      Market Research Analyst
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      User-friendly platform, you simply input what you have and
                      specify the desired outcome, and it generates a result
                      that is extremely helpful in creating the desired text and
                      tone. This is extremely helpful when it comes to creating
                      content that aligns with your specific needs.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        Steven Roberts
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      Marketing Manager
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      Overall, I found the text and image generation app to be
                      very user-friendly and efficient. It allows you to input
                      your desired content and format, and in return, it
                      generates a result that perfectly aligns with my
                      requirements.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        Kevin Carter
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      Sales Representative
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      The text and image generation feature of this app is
                      incredibly user-friendly. All you have to do is input what
                      you already have and specify how you want it to be
                      portrayed, and the app will generate a result that
                      perfectly matches your desired text and tone.
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      padding: { xs: "20px", sm: "20px 44px" },
                      backgroundColor: "#fff",
                      marginTop: "20px",
                      borderRadius: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                      }}
                    >
                      <Typography
                        sx={{
                          paddingTop: "25px",
                          fontFamily: "Lato",
                          fontSize: "19px",
                          fontWeight: "600",
                          lineHeight: "23.02px",
                          color: "#222",
                        }}
                      >
                        John Vincent
                      </Typography>
                      <Box
                        sx={{
                          width: "35px",
                          height: "30px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#D7F200",
                          borderRadius: "5px",
                        }}
                      >
                        <RateReviewIcon />
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        paddingTop: "10px",
                        fontFamily: "Poppins",
                        fontSize: "15px",
                        fontWeight: "500",
                        lineHeight: "32px",
                        color: "#686868",
                      }}
                    >
                      Visual Designer
                    </Typography>
                    <Typography
                      sx={{
                        paddingTop: "15px",
                        fontFamily: "Quicksand",
                        fontWeight: "600",
                        color: "#7E7E7E",
                        lineHeight: "25px",
                        fontSize: "16px",
                      }}
                    >
                      The product is excellent. It allows you to input your
                      content and specify the desired outcome, and it generates
                      text that perfectly matches the required tone and style.
                      This is extremely helpful in generating the kind of text
                      you need.
                    </Typography>
                  </Box>
                </>
              ) : null}
              {/* end tab panel 7 */}
              {/* start tab panel 9 */}
              {value === 9 ? (
                <>
                  <Box
                    sx={{
                      padding: {
                        xs: "20px",
                        sm: "44px",
                        backgroundColor: "#fff",
                        marginTop: "20px",
                        borderRadius: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "28px", sm: "35.18px" },
                        fontFamily: "Lato",
                        fontWeight: "600",
                        lineHeight: { sm: "42.22px", xs: "30px" },
                        color: "#222222",
                      }}
                    >
                      Schedule management
                    </Typography>
                    <Box sx={{ paddingTop: "20px" }}>
                      <ul style={{ padding: "0px", margin: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Checkbox {...label} />
                          <Typography
                            sx={{
                              fontSize: { sm: "19px", xs: "16px" },
                              fontFamily: "lato",
                              color: "#222222",
                            }}
                          >
                            Automatically remove 30 days old history
                          </Typography>
                        </li>
                      </ul>
                    </Box>
                    <Box sx={{ paddingTop: "20px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          textTransform: "capitalize",
                          backgroundColor: "#D7F200",
                          padding: { sm: "10px 30px", xs: "8px 22px" },
                          color: "#000",
                          boxShadow: "none",
                          borderRadius: "12px",
                          fontFamily: "Quicksand",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          lineHeight: "23.98px",
                        }}
                      >
                        Save Changes
                      </Button>
                    </Box>
                  </Box>
                </>
              ) : null}
              {/* end tab panel 9 */}
              {/* start ta panel 10 */}
              {value === 10 ? (
                <>
                  <Box
                    sx={{
                      padding: { sm: "20px 44px", xs: "20px" },
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "35.18px",
                        fontFamily: "Lato",
                        color: "#222222",
                        lineHeight: "42.22px",
                        fontWeight: "600",
                      }}
                    >
                      Default model
                    </Typography>
                    <Box sx={{ paddingTop: "40px" }}>
                      <Grid container spacing={2}>
                        <Grid xs={12} md={6} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Templates
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="selectModel"
                            defaultValue="GPT 4 o"
                            select
                          >
                            {templates.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid xs={12} md={6} item>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            AI Assistant
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="selectModel"
                            defaultValue="GPT 4 Turbo"
                            select
                          >
                            {templates.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid xs={12} md={6} item sx={{ marginTop: "20px" }}>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Data Analyst
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="selectModel"
                            defaultValue="GPT 4 Mini"
                            select
                          >
                            {templates.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid xs={12} md={6} item sx={{ marginTop: "20px" }}>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Article Generator
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="selectModel"
                            defaultValue="GPT 4 Turbo"
                            select
                          >
                            {templates.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid xs={12} md={6} item sx={{ marginTop: "20px" }}>
                          <label
                            htmlFor=""
                            style={{
                              fontFamily: "Lato",
                              fontSize: "19.18px",
                              fontWeight: "600",
                              lineHeight: "23.02px",
                              color: "#222222",
                            }}
                          >
                            Image Generator
                          </label>
                          <TextField
                            fullWidth
                            sx={{ paddingTop: "15px" }}
                            InputProps={{
                              style: {
                                backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                borderRadius: "10px",
                                border: "1px solid #000",
                              },
                            }}
                            id="outlined-select-currency"
                            placeholder="selectModel"
                            defaultValue="DALL-E-2"
                            select
                          >
                            {Imagearr.map((option) => (
                              <MenuItem key={option.value} value={option.value}>
                                {option.label}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                      </Grid>
                      <Box sx={{ padding: "20px 0px" }}>
                        <Button
                          variant="contained"
                          sx={{
                            textTransform: "capitalize",
                            backgroundColor: "#D7F200",
                            padding: { sm: "15px 30px", xs: "8px 22px" },
                            color: "#000",
                            boxShadow: "none",
                            borderRadius: "12px",
                            fontFamily: "Quicksand",
                            fontSize: { sm: "19.18px", xs: "16px" },
                            lineHeight: "23.98px",
                          }}
                        >
                          Update Details
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      padding: { sm: "20px 44px", xs: "20px" },
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "35.18px",
                        lineHeight: "42.22px",
                        fontWeight: "600",
                        fontFamily: "Lato",
                        color: "#222222",
                      }}
                    >
                      Model
                    </Typography>
                    <TableContainer
                      component={Paper}
                      sx={{ width: "100%", marginTop: "30px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              Sl.No
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Name
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Model
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Type
                            </TableCell>

                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.slNo}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                {row.slNo}
                              </TableCell>
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  textAlign: "center",
                                }}
                              >
                                {row.Name}
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                {row.Model}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                {row.Type}
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "right",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#E74C3C",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <DeleteIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Box sx={{ paddingTop: "30px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#D7F200",
                          textTransform: "capitalize",
                          boxShadow: "none",
                          padding: "15px 30px",
                          borderRadius: "12px",
                          color: "#000",
                          fontFamily: "Quicksand",
                          fontWeight: "700",
                          fontSize: "19.18px",
                          lineHeight: "23.98px",
                        }}
                        onClick={handleClickOpen}
                      >
                        Add New Model
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle
                          id="alert-dialog-title"
                          sx={{ textAlign: "center" }}
                        >
                          {"Add New Model"}
                        </DialogTitle>
                        <Divider />
                        <DialogContent>
                          <Grid xs={12} md={12} item>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Model type
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                },
                              }}
                              placeholder="selectModel"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={12} item sx={{ marginTop: "15px" }}>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              AI Assistant
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                },
                              }}
                              placeholder="selectModel"
                            ></TextField>
                          </Grid>
                          <Grid xs={12} md={12} item sx={{ marginTop: "15px" }}>
                            <label
                              htmlFor=""
                              style={{
                                fontFamily: "Lato",
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "23.02px",
                                color: "#222222",
                              }}
                            >
                              Model
                            </label>
                            <TextField
                              fullWidth
                              sx={{ paddingTop: "15px" }}
                              InputProps={{
                                style: {
                                  backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                                  borderRadius: "10px",
                                  border: "1px solid #000",
                                },
                              }}
                              placeholder="selectModel"
                            ></TextField>
                          </Grid>
                        </DialogContent>
                        <DialogActions sx={{ paddingBottom: "10px" }}>
                          <Button
                            onClick={handleClose}
                            autoFocus
                            fullWidth
                            sx={{
                              backgroundColor: "#D7F200",
                              color: "#000",
                              borderRadius: "12px",
                            }}
                          >
                            Add
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      background: "#fff",
                      padding: "25px",
                      borderRadius: "23px ",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#05004E",
                        fontSize: "24px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        lineHeight: "32px",
                        borderBottom: "1px solid #D4E1E9",
                        paddingBottom: "15px",
                      }}
                    >
                      Language
                    </Typography>
                    <TableContainer
                      component={Paper}
                      sx={{ width: "100%", marginTop: "30px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              Sl.No
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              Name
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Default
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowss.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                {row.slNo}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingLeft: "5px",
                                  textAlign: "center",
                                }}
                              >
                                {row.name}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                <input
                                  type="radio"
                                  style={{ width: "25px", height: "25px" }}
                                  className="radio"
                                />
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#F5F5F5",
                                    color: "#4A4A4ACC",
                                    boxShadow: "none",
                                    fontFamily: "Poppins",
                                  }}
                                  onClick={handleClick}
                                >
                                  Active{" "}
                                  <KeyboardArrowDownIcon
                                    sx={{ marginLeft: "10px" }}
                                  />
                                </Button>
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={handleClosee}
                                  sx={{ marginTop: "10px" }}
                                >
                                  <MenuItem
                                    onClick={handleClosee}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Active
                                  </MenuItem>
                                  <MenuItem
                                    onClick={handleClosee}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Non-Active
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#E74C3C",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <DeleteIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    <Box
                      sx={{
                        paddingTop: "25px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Stack spacing={2}>
                        <Pagination count={10} color="primary" />
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "50px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: { sm: "none", xs: "wrap" },
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#D7F200",
                          color: "#000000",
                          fontFamily: "Quicksand",
                          boxShadow: "none",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          fontWeight: { sm: "700", xs: "600" },
                          lineHeight: "19.18px",
                          textTransform: "capitalize",
                          padding: { sm: "20px 35px", xs: "15px 30px" },
                          marginBottom: { xs: "10px", sm: "0px" },
                        }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#0CC0DF",
                          color: "#fff",
                          fontFamily: "Quicksand",
                          boxShadow: "none",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          fontWeight: { sm: "700", xs: "600" },
                          lineHeight: "19.18px",
                          textTransform: "capitalize",
                          padding: { sm: "20px 35px", xs: "15px 30px" },
                          marginLeft: { xs: "none", sm: "25px" },
                        }}
                      >
                        Add New Language
                      </Button>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      background: "#fff",
                      padding: "25px",
                      borderRadius: "23px ",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#05004E",
                        fontSize: "24px",
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        lineHeight: "32px",
                        borderBottom: "1px solid #D4E1E9",
                        paddingBottom: "15px",
                      }}
                    >
                      Language
                    </Typography>
                    <TableContainer
                      component={Paper}
                      sx={{ width: "100%", marginTop: "30px" }}
                    >
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                              }}
                            >
                              Sl.No
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              {" "}
                              Name
                            </TableCell>

                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Status
                            </TableCell>
                            <TableCell
                              align="right"
                              sx={{
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                fontSize: "18px",
                                textAlign: "center",
                              }}
                            >
                              Action
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rowssTone.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                {row.slNo}
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingLeft: "5px",
                                  textAlign: "center",
                                }}
                              >
                                {row.name}
                              </TableCell>

                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  textAlign: "center",
                                }}
                              >
                                <Button
                                  variant="contained"
                                  sx={{
                                    backgroundColor: "#F5F5F5",
                                    color: "#4A4A4ACC",
                                    boxShadow: "none",
                                    fontFamily: "Poppins",
                                  }}
                                  onClick={handleClick}
                                >
                                  Active{" "}
                                  <KeyboardArrowDownIcon
                                    sx={{ marginLeft: "10px" }}
                                  />
                                </Button>
                                <Menu
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={handleClosee}
                                  sx={{ marginTop: "10px" }}
                                >
                                  <MenuItem
                                    onClick={handleClosee}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Active
                                  </MenuItem>
                                  <MenuItem
                                    onClick={handleClosee}
                                    style={{ fontFamily: "Poppins" }}
                                  >
                                    Non-Active
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                              <TableCell
                                align="right"
                                sx={{
                                  fontFamily: "Poppins",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                  paddingRight: "38px",
                                  color: "#000000DE",
                                  cursor: "pointer",
                                  textAlign: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "37px",
                                      height: "37px",
                                      backgroundColor: "#E74C3C",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      borderRadius: "50%",
                                      cursor: "pointer",
                                    }}
                                  >
                                    <DeleteIcon
                                      sx={{ color: "#fff", cursor: "pointer" }}
                                    />
                                  </Box>
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>

                    <Box
                      sx={{
                        paddingTop: "25px",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Stack spacing={2}>
                        <Pagination count={10} color="primary" />
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "50px",
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexWrap: { sm: "none", xs: "wrap" },
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#D7F200",
                          color: "#000000",
                          fontFamily: "Quicksand",
                          boxShadow: "none",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          fontWeight: { sm: "700", xs: "600" },
                          lineHeight: "19.18px",
                          textTransform: "capitalize",
                          padding: { sm: "20px 35px", xs: "15px 30px" },
                          marginBottom: { xs: "10px", sm: "0px" },
                        }}
                      >
                        Save Changes
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#0CC0DF",
                          color: "#fff",
                          fontFamily: "Quicksand",
                          boxShadow: "none",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          fontWeight: { sm: "700", xs: "600" },
                          lineHeight: "19.18px",
                          textTransform: "capitalize",
                          padding: { sm: "20px 35px", xs: "15px 30px" },
                          marginLeft: { xs: "none", sm: "25px" },
                        }}
                      >
                        Add Voice Tone
                      </Button>
                    </Box>
                  </Box>
                </>
              ) : null}
              {/* end tab panel 10 */}
              {/* start tab panel 7 */}
              {value === 8 ? (
                <>
                  <Box
                    sx={{
                      padding: { sm: "20px 44px", xs: "20px" },
                      backgroundColor: "#fff",
                      borderRadius: "12px",
                      marginTop: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "35px",
                        fontFamily: "Lato",
                        fontWeight: "600",
                        lineHeight: "42px",
                        color: "#222222",
                      }}
                    >
                      Offline Payment
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid xs={12} md={12} item sx={{ marginTop: "20px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Payment Title
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "15px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                          placeholder="Bank Transfer"
                        />
                      </Grid>
                      <Grid xs={12} md={12} item sx={{ marginTop: "20px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Payment Guidlines
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "15px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                          placeholder={`'Direct payment into our bank account and use your invoice number as the payment reference. Your payment won't be allocated until we receive the funds in our bank account.`}
                          multiline
                          rows={5}
                        />
                      </Grid>
                      <Grid xs={12} md={12} item sx={{ marginTop: "20px" }}>
                        <label
                          htmlFor=""
                          style={{
                            fontFamily: "Lato",
                            fontSize: "19.18px",
                            fontWeight: "600",
                            lineHeight: "23.02px",
                            color: "#222222",
                          }}
                        >
                          Payment Recipient Accounts
                        </label>
                        <TextField
                          fullWidth
                          sx={{ paddingTop: "15px" }}
                          InputProps={{
                            style: {
                              backgroundColor: "rgba(231, 231, 231, 0.2)", // background color for the input area (where the text is typed)
                              borderRadius: "10px",
                              border: "1px solid #000",
                            },
                          }}
                          placeholder={`Bank Name 
Account Number
Account Type
Beneficiary Name`}
                          multiline
                          rows={5}
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ paddingTop: "20px" }}>
                      <ul style={{ padding: "0px", margin: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Checkbox {...label} />
                          <Typography
                            sx={{
                              fontSize: "19px",
                              fontFamily: "lato",
                              color: "#222222",
                            }}
                          >
                            Offline payment enable
                          </Typography>
                        </li>
                      </ul>
                    </Box>

                    <Box sx={{ paddingTop: "20px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          borderRadius: "12px",
                          backgroundColor: "#D7F200",
                          color: "#000000",
                          fontFamily: "Quicksand",
                          boxShadow: "none",
                          fontSize: { sm: "19.18px", xs: "16px" },
                          fontWeight: { sm: "700", xs: "600" },
                          lineHeight: "19.18px",
                          textTransform: "capitalize",
                          padding: { sm: "20px 35px", xs: "15px 30px" },
                          marginBottom: { xs: "10px", sm: "0px" },
                        }}
                      >
                        Save Changes
                      </Button>
                    </Box>
                  </Box>
                </>
              ) : null}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Templates;
