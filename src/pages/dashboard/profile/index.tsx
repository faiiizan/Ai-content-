"use Client"
import { Box, Button,  Grid,  Typography, Breadcrumbs, Link as MUILink, TextField } from '@mui/material'
import React from 'react'
import Hero from '../../../pages/dashboard.module.css'
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'





const Profile = () => {



 



  return (
    <>
      <Box>
        <Dashnav/>
        {/* top header completed */}
        {/* body part started */}
        <Box sx={{ paddingTop: "15px" }}>
          <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
            <Dashsidebar/>

            <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
              <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                    Home
                  </MUILink>

                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/profile">
                    Profile Details
                  </MUILink>

                </Breadcrumbs>

              </Box>

              <Box sx={{ background: "#fff", padding: { sm: "20px 30px", xs: "10px" }, minHeight: "100vh", borderRadius: "23px 23px 0px 0px" }}>
                <Box>
                  <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "36px", xs: "26px" }, lineHeight: "45px", fontWeight: "600", color: "#000" }}>
                    Account information
                  </Typography>
                  <Box sx={{ paddingTop: "40px" }}>
                    <label htmlFor="" style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "600", color: "#403F3F", lineHeight: "27px" }} className={Hero.profilelable}>Name</label>
                    <TextField fullWidth placeholder='Enter Your Name Here ...'
                      sx={{
                        marginTop: "15px",
                        fontFamily: "Quicksand",
                        color: "#22222299",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        borderRadius: '8px', // Rounded corners
                        border: "1px solid #000",
                        '& .MuiInputBase-root': {
                          border: '1px solid #000', // Border around the text field
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '16px', // Font size for the input text
                          color: '#333', // Text color
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <label htmlFor="" style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "600", color: "#403F3F", lineHeight: "27px" }} className={Hero.profilelable}>Email</label>
                    <TextField fullWidth placeholder='Enter Your Email Here ...'
                      sx={{
                        marginTop: "15px",
                        fontFamily: "Quicksand",
                        color: "#22222299",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        borderRadius: '8px', // Rounded corners
                        border: "1px solid #000",
                        '& .MuiInputBase-root': {
                          border: '1px solid #000', // Border around the text field
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '16px', // Font size for the input text
                          color: '#333', // Text color
                        }
                      }}
                      type='email'
                    />
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <Button variant='contained' sx={{ padding: { sm: "15px 35px", xs: "12px 25px" }, backgroundColor: "#D7F200", boxShadow: "none", borderRadius: "10px", color: "#000", fontFamily: "Quicksand", fontWeight: "700", textTransform: "capitalize", fontSize: { sm: "16px", xs: "15px" }, lineHeight: "20px" }}>
                      Update Details
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ paddingTop: "80px" }}>
                  <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "36px", xs: "26px" }, lineHeight: "45px", fontWeight: "600", color: "#000" }}>
                    Change password
                  </Typography>
                  <Box sx={{ paddingTop: "40px" }}>
                    <label htmlFor="" style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "600", color: "#403F3F", lineHeight: "27px" }} className={Hero.profilelable}>Current Password</label>
                    <TextField fullWidth placeholder='Enter Your Current Password Here ...'
                      sx={{
                        marginTop: "15px",
                        fontFamily: "Quicksand",
                        color: "#22222299",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        borderRadius: '8px', // Rounded corners
                        border: "1px solid #000",
                        '& .MuiInputBase-root': {
                          border: '1px solid #000', // Border around the text field
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '16px', // Font size for the input text
                          color: '#333', // Text color
                        }
                      }}
                    />
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <label htmlFor="" style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "600", color: "#403F3F", lineHeight: "27px" }} className={Hero.profilelable}>New Password</label>
                    <TextField fullWidth placeholder='Enter Your New Password Here ...'
                      sx={{
                        marginTop: "15px",
                        fontFamily: "Quicksand",
                        color: "#22222299",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        borderRadius: '8px', // Rounded corners
                        border: "1px solid #000",
                        '& .MuiInputBase-root': {
                          border: '1px solid #000', // Border around the text field
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '16px', // Font size for the input text
                          color: '#333', // Text color
                        }
                      }}
                      type='password'
                    />
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <label htmlFor="" style={{ fontSize: "18px", fontFamily: "Poppins", fontWeight: "600", color: "#403F3F", lineHeight: "27px" }} className={Hero.profilelable}>Confirm Password</label>
                    <TextField fullWidth placeholder='Enter Your Confirm Password Here ...'
                      sx={{
                        marginTop: "15px",
                        fontFamily: "Quicksand",
                        color: "#22222299",
                        fontSize: "16px",
                        lineHeight: "20px",
                        fontWeight: "600",
                        borderRadius: '8px', // Rounded corners
                        border: "1px solid #000",
                        '& .MuiInputBase-root': {
                          border: '1px solid #000', // Border around the text field
                        },
                        '& .MuiInputBase-input': {
                          fontSize: '16px', // Font size for the input text
                          color: '#333', // Text color
                        }
                      }}
                      type='password'
                    />
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <Button variant='contained' sx={{ padding: { sm: "15px 35px", xs: "12px 25px" }, backgroundColor: "#D7F200", boxShadow: "none", borderRadius: "10px", color: "#000", fontFamily: "Quicksand", fontWeight: "700", textTransform: "capitalize", fontSize: { sm: "16px", xs: "15px" }, lineHeight: "20px" }}>
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
    </>
  )
}

export default Profile
