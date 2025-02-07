import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import googlePic from "../app/Assets/Imges/image 3.png";
import Image from "next/image";
import facebookImage from "../app/Assets/Imges/image 5.png";
import backgoundImage from "../app/Assets/Imges/bg.png";
import "../pages/login.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import Hero from "../pages/signup.module.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import axiosInstance from "@/utils/axios";
import toast from "react-hot-toast";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onHandleSubmit = async (data: any) => {
    const reqbody = {
      name: data.Your_name,
      email: data.Email_Address,
      pass: data.Confirm_Password,
    };
    const res = await axiosInstance.post("/ai/auth/signup", reqbody);
    if (res && res.data.status === 200) {
      toast.success("Registration Successful");
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          padding: {
            xs: "20px 0px",
            md: "40px 0px 150px 0px",
            backgroundImage: `${backgoundImage}`,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid
              xs={12}
              md={6}
              sx={{ paddingBottom: { xs: "20px", md: "0px" } }}
              className={Hero.background}
            >
              <Box sx={{ paddingLeft: { sm: "43px", xs: "0px" } }}>
                <Typography
                  sx={{
                    fontSize: { sm: "50.75px", xs: "24px" },
                    fontFamily: "Inter",
                    fontWeight: "600",
                    lineHeight: { sm: "63.51px", xs: "28px" },
                    letterSpacing: "-1.72px",
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <span
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #603BFC , #FF6835 )",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    Welcome
                  </span>{" "}
                  <br />
                  Back to Verbilab
                </Typography>
                <Typography
                  sx={{
                    paddingTop: { sm: "20px", xs: "12px" },
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    color: "#3A3A40",
                    fontFamily: "Inter",
                    lineHeight: "24.14px",
                    fontSize: "15.7px",
                    letterSpacing: "-0.17px",
                    fontWeight: "500",
                    textAlign: "center",
                    paddingLeft: { xs: "20px", md: "0px", sm: "200px" },
                    textAlignLast: { xs: "center", md: "left" },
                  }}
                >
                  <CheckCircleIcon
                    sx={{ marginRight: "15px", color: "#D7F200" }}
                  />{" "}
                  Register your account with your <br /> details.
                </Typography>
                <Box
                  sx={{
                    paddingTop: "20px",
                    paddingLeft: { xs: "20px", md: "0px", sm: "160px" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "transparent",
                      color: "#000000D4",
                      boxShadow: "none",
                      border: "1px solid #CBC8C8",
                      borderRadius: "128px",
                      padding: { sm: "10px 32px", xs: "10px 24px" },
                      fontSize: { sm: "20px", xs: "16px" },
                      lineHeight: { sm: "21.18px", xs: "18px" },
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    <Image
                      src={googlePic}
                      alt="googlepicture"
                      style={{ marginRight: "15px" }}
                    />{" "}
                    Continue with Google
                  </Button>
                </Box>
                <Box
                  sx={{
                    padding: "20px 0px 25px 0px",
                    paddingLeft: { xs: "18px", md: "0px", sm: "160px" },
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "#4267B2",
                      color: "#FFFFFF",
                      boxShadow: "none",
                      border: "1px solid #CBC8C8",
                      borderRadius: "128px",
                      padding: {
                        md: "10px 24px",
                        xs: "10px 16px",
                        sm: "10px 20px",
                      },
                      fontSize: { sm: "20px", xs: "16px" },
                      lineHeight: { sm: "21.18px", xs: "18px" },
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    <Image
                      src={facebookImage}
                      alt="googlepicture"
                      style={{ marginRight: "15px" }}
                    />{" "}
                    Continue with Facebook
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", xs: "center" },
              }}
            >
              <Card
                sx={{
                  minWidth: { sm: "470px", xs: "335px" },
                  padding: "40px 20px",
                  border: "1.72px solid #DBD9FB",
                  borderRadius: "17.24px",
                  marginRight: "10px",
                  marginLeft: { xs: "15px", sm: "0px" },
                }}
                component="form"
                onSubmit={handleSubmit(onHandleSubmit)}
              >
                <Box sx={{ paddingBottom: "15px" }}>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      color: "#000",
                      paddingBottom: "18px!important",
                      marginLeft: "10px",
                    }}
                  >
                    Your Name
                  </label>
                  <TextField
                    fullWidth
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      "& .MuiInputBase-root": {
                        borderRadius: "56.3px", // Ensure border-radius is applied to the input itself
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Custom border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Border on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Focus border color
                      },
                      "& .MuiInputBase-input": {
                        outline: "none", // Remove outline when focused
                      },
                    }}
                    type="text"
                    {...register("Your_name", { required: true })}
                  />

                  {errors?.Your_name && (
                    <span
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "400",
                        color: "#F32013",
                        paddingLeft: "15px",
                        paddingTop: "12px",
                        fontSize: "14px",
                      }}
                    >
                      This Field is Required*
                    </span>
                  )}
                </Box>
                <Box sx={{ paddingBottom: "20px" }}>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      color: "#000",
                      paddingBottom: "18px!important",
                      marginLeft: "10px",
                    }}
                  >
                    Email Address
                  </label>
                  <TextField
                    fullWidth
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      "& .MuiInputBase-root": {
                        borderRadius: "56.3px", // Ensure border-radius is applied to the input itself
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Custom border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Border on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Focus border color
                      },
                      "& .MuiInputBase-input": {
                        outline: "none", // Remove outline when focused
                      },
                    }}
                    type="text"
                    {...register("Email_Address", { required: true })}
                  />
                  {errors?.Email_Address && (
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        color: "#F32013",
                        paddingLeft: "15px",
                        paddingTop: "12px",
                      }}
                    >
                      This Field is Required*
                    </span>
                  )}
                </Box>
                <Box sx={{ paddingBottom: "20px" }}>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      color: "#000",
                      paddingBottom: "18px!important",
                      marginLeft: "10px",
                    }}
                  >
                    Password
                  </label>
                  <TextField
                    fullWidth
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      "& .MuiInputBase-root": {
                        borderRadius: "56.3px", // Ensure border-radius is applied to the input itself
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Custom border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Border on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Focus border color
                      },
                      "& .MuiInputBase-input": {
                        outline: "none", // Remove outline when focused
                      },
                    }}
                    type="password"
                    {...register("password", { required: true })}
                  />
                  {errors?.Password && (
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        color: "#F32013",
                        paddingLeft: "15px",
                        paddingTop: "12px",
                      }}
                    >
                      This Field is Required*
                    </span>
                  )}
                </Box>
                <Box sx={{ paddingBottom: "20px" }}>
                  <label
                    htmlFor=""
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Inter",
                      color: "#000",
                      paddingBottom: "18px!important",
                      marginLeft: "10px",
                    }}
                  >
                    Confirm Password
                  </label>
                  <TextField
                    fullWidth
                    sx={{
                      borderRadius: "40px",
                      border: "1px solid #ccc",
                      "& .MuiInputBase-root": {
                        borderRadius: "56.3px", // Ensure border-radius is applied to the input itself
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Custom border color
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Border on hover
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: "1px solid #ccc", // Focus border color
                      },
                      "& .MuiInputBase-input": {
                        outline: "none", // Remove outline when focused
                      },
                    }}
                    type="password"
                    {...register("Confirm_Password", {
                      required: "This Field is Required*",
                      validate: (value) =>
                        value === password || "Password Mismatch",
                    })}
                  />
                  {errors?.Confirm_Password && (
                    <span
                      style={{
                        fontSize: "14px",
                        fontFamily: "Inter",
                        fontWeight: "400",
                        color: "#F32013",
                        paddingLeft: "15px",
                        paddingTop: "12px",
                      }}
                    >
                      {errors?.Confirm_Password?.message as string}
                    </span>
                  )}
                </Box>
                <Box
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    lineHeight: "24px",
                  }}
                >
                  <Checkbox {...label} defaultChecked /> I agree to the{" "}
                  <Link
                    href="/login"
                    style={{ textDecoration: "none", color: "#2E95FB" }}
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </Link>
                </Box>
                <Box sx={{ paddingTop: "15px" }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      borderRadius: "100px",
                      padding: "12px 140px",
                      backgroundColor: "#D7F200",
                      color: "#000",
                      boxShadow: "none",
                    }}
                    type="submit"
                  >
                    Continue
                  </Button>
                </Box>
                <Typography
                  sx={{
                    paddingTop: "18px",
                    textAlign: "center",
                    fontFamily: "Inter",
                    fontSize: "13.79px",
                    fontWeight: "400",
                  }}
                >
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    style={{ textDecoration: "none", color: "#2E95FB" }}
                  >
                    Log in
                  </Link>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Signup;
