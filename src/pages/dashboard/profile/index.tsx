"use Client";
import {
  Box,
  Button,
  Grid,
  Typography,
  Breadcrumbs,
  Link as MUILink,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Hero from "../../../pages/dashboard.module.css";
import Dashnav from "../dashnav";
import Dashsidebar from "../dashsidebar";
import { useForm } from "react-hook-form";
import DashboardLayout from "@/components/layout/DashboardLayout";
// @ts-ignore
import Cookies from "js-cookie";
import axiosInstance from "@/utils/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
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

  const {
    register: updateDetails,
    handleSubmit: onSubmitDetails,
    formState: { errors: errors1 },
  } = useForm({ mode: "onTouched" });

  const {
    register: changePassword,
    handleSubmit: onSubmitPassword,
    watch,
    formState: { errors: errors2 },
    reset,
  } = useForm({ mode: "onTouched" });

  const new_password = watch("new_password");

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
  };

  const onUpdateDetails = async (account_data: any) => {
    const reqbody = { email: user?.email, name: account_data.user_name };
    const res = await axiosInstance.post("/ai/auth/reset-username", reqbody);
    if (res && res.status === 200) {
      toast.success(res.data.message);
      toast("Please log in again for the changes to take effect");
      handleLogout();
      router.push("/login");
    } else {
      toast.error("Invalid data");
    }
  };

  const onChangePassword = async (data: any) => {
    const reqbody = {
      email: user?.email,
      oldpass: data.current_password,
      newpass: data.confirm_password,
    };
    const res = await axiosInstance.post("/ai/auth/change-password", reqbody);
    if (res && res.status === 200) {
      toast.success(res.data.message);
      reset();
    } else {
      toast.error("Invalid Data");
    }
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

              <Grid
                container
                xs={12}
                sm={12}
                md={9.5}
                sx={{
                  backgroundColor: "#F8F9FA",
                  padding: { xs: "10px", sm: "5px 25px 20px 25px" },
                  display: "flex",
                  flexDirection: "column",
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
                      href="/dashboard/profile"
                    >
                      Profile Details
                    </MUILink>
                  </Breadcrumbs>
                </Box>

                <Box
                  sx={{
                    background: "#fff",
                    padding: { sm: "20px 30px", xs: "10px" },
                    minHeight: "100vh",
                    borderRadius: "23px 23px 0px 0px",
                  }}
                >
                  {/* Account Details */}
                  <Box
                    component="form"
                    onSubmit={onSubmitDetails(onUpdateDetails)}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Quicksand",
                        fontSize: { sm: "36px", xs: "26px" },
                        lineHeight: "45px",
                        fontWeight: "600",
                        color: "#000",
                      }}
                    >
                      Account information
                    </Typography>
                    <Box sx={{ paddingTop: "40px" }}>
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          color: "#403F3F",
                          lineHeight: "27px",
                        }}
                        className={Hero.profilelable}
                      >
                        Name
                      </label>
                      <TextField
                        fullWidth
                        placeholder="Enter Your Name Here ..."
                        sx={{
                          marginTop: "15px",
                          fontFamily: "Quicksand",
                          color: "#22222299",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "600",
                          borderRadius: "8px", // Rounded corners
                          border: "1px solid #000",
                          "& .MuiInputBase-root": {
                            border: "1px solid #000", // Border around the text field
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px", // Font size for the input text
                            color: "#333", // Text color
                          },
                        }}
                        type="text"
                        {...updateDetails("user_name")}
                      />
                      {errors1?.user_name && (
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
                          {errors1?.user_name?.message as string}
                        </span>
                      )}
                    </Box>
                    <Box sx={{ paddingTop: "40px" }}>
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          color: "#403F3F",
                          lineHeight: "27px",
                        }}
                        className={Hero.profilelable}
                      >
                        Email
                      </label>
                      <TextField
                        fullWidth
                        disabled
                        value={user ? user.email : "xyz@mail.com"}
                        sx={{
                          marginTop: "15px",
                          fontFamily: "Quicksand",
                          color: "#22222299",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "600",
                          borderRadius: "8px", // Rounded corners
                          border: "1px solid #000",
                          "& .MuiInputBase-root": {
                            border: "1px solid #000", // Border around the text field
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px", // Font size for the input text
                            color: "#333", // Text color
                          },
                        }}
                        type="email"
                      />
                    </Box>
                    <Box sx={{ paddingTop: "40px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          padding: { sm: "15px 35px", xs: "12px 25px" },
                          backgroundColor: "#D7F200",
                          boxShadow: "none",
                          borderRadius: "10px",
                          color: "#000",
                          fontFamily: "Quicksand",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: { sm: "16px", xs: "15px" },
                          lineHeight: "20px",
                        }}
                        type="submit"
                      >
                        Update Details
                      </Button>
                    </Box>
                  </Box>

                  {/* Password Details */}
                  <Box
                    sx={{ paddingTop: "80px" }}
                    component="form"
                    onSubmit={onSubmitPassword(onChangePassword)}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Quicksand",
                        fontSize: { sm: "36px", xs: "26px" },
                        lineHeight: "45px",
                        fontWeight: "600",
                        color: "#000",
                      }}
                    >
                      Change password
                    </Typography>
                    <Box sx={{ paddingTop: "40px" }}>
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          color: "#403F3F",
                          lineHeight: "27px",
                        }}
                        className={Hero.profilelable}
                      >
                        Current Password
                      </label>
                      <TextField
                        fullWidth
                        placeholder="Enter Your Current Password Here ..."
                        sx={{
                          marginTop: "15px",
                          fontFamily: "Quicksand",
                          color: "#22222299",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "600",
                          borderRadius: "8px", // Rounded corners
                          border: "1px solid #000",
                          "& .MuiInputBase-root": {
                            border: "1px solid #000", // Border around the text field
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px", // Font size for the input text
                            color: "#333", // Text color
                          },
                        }}
                        type="text"
                        {...changePassword("current_password", {
                          required: "This Field is Required*",
                        })}
                      />
                      {errors2?.current_password && (
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
                          {errors2?.current_password?.message as string}
                        </span>
                      )}
                    </Box>
                    <Box sx={{ paddingTop: "40px" }}>
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          color: "#403F3F",
                          lineHeight: "27px",
                        }}
                        className={Hero.profilelable}
                      >
                        New Password
                      </label>
                      <TextField
                        fullWidth
                        placeholder="Enter Your New Password Here ..."
                        sx={{
                          marginTop: "15px",
                          fontFamily: "Quicksand",
                          color: "#22222299",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "600",
                          borderRadius: "8px", // Rounded corners
                          border: "1px solid #000",
                          "& .MuiInputBase-root": {
                            border: "1px solid #000", // Border around the text field
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px", // Font size for the input text
                            color: "#333", // Text color
                          },
                        }}
                        type="text"
                        {...changePassword("new_password", {
                          required: "This Field is Required*",
                        })}
                      />
                      {errors2?.new_password && (
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
                          {errors2?.new_password?.message as string}
                        </span>
                      )}
                    </Box>
                    <Box sx={{ paddingTop: "40px" }}>
                      <label
                        htmlFor=""
                        style={{
                          fontSize: "18px",
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          color: "#403F3F",
                          lineHeight: "27px",
                        }}
                        className={Hero.profilelable}
                      >
                        Confirm Password
                      </label>
                      <TextField
                        fullWidth
                        placeholder="Enter Your Confirm Password Here ..."
                        sx={{
                          marginTop: "15px",
                          fontFamily: "Quicksand",
                          color: "#22222299",
                          fontSize: "16px",
                          lineHeight: "20px",
                          fontWeight: "600",
                          borderRadius: "8px", // Rounded corners
                          border: "1px solid #000",
                          "& .MuiInputBase-root": {
                            border: "1px solid #000", // Border around the text field
                          },
                          "& .MuiInputBase-input": {
                            fontSize: "16px", // Font size for the input text
                            color: "#333", // Text color
                          },
                        }}
                        type="password"
                        {...changePassword("confirm_password", {
                          required: "This Field is Required*",
                          validate: (value) =>
                            value === new_password || "Password Mismatch",
                        })}
                      />
                      {errors2?.confirm_password && (
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
                          {errors2?.confirm_password?.message as string}
                        </span>
                      )}
                    </Box>
                    <Box sx={{ paddingTop: "40px" }}>
                      <Button
                        variant="contained"
                        sx={{
                          padding: { sm: "15px 35px", xs: "12px 25px" },
                          backgroundColor: "#D7F200",
                          boxShadow: "none",
                          borderRadius: "10px",
                          color: "#000",
                          fontFamily: "Quicksand",
                          fontWeight: "700",
                          textTransform: "capitalize",
                          fontSize: { sm: "16px", xs: "15px" },
                          lineHeight: "20px",
                        }}
                        type="submit"
                      >
                        Save Changes
                      </Button>
                    </Box>
                  </Box>
                </Box>

                {/* enn main part */}
                {/* start popular part  */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  );
};

export default Profile;
