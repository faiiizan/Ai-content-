"use Client"
import { Box, Button, Grid, Typography, Divider, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React, { useState } from 'react'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CollectionsIcon from '@mui/icons-material/Collections';
import JoinLeftIcon from '@mui/icons-material/JoinLeft';
import UpdateIcon from '@mui/icons-material/Update';
import Dashnav from '../dashnav';
import Dashsidebar from '../dashsidebar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {  Menu, MenuItem } from "@mui/material";




const Dashboard = () => {




  const rows = [
    { slNo: 1, name: 'Rasim Wank', planName: "Free", fat: 'Feb 25,2025', expiry: 'Feb 25,2025', carbs: <DeleteIcon /> },
    { slNo: 2, name: 'Rose Ackis', planName: "Free", fat: 'Feb 25,2025', expiry: 'Feb 25,2025', carbs: <DeleteIcon /> },
    { slNo: 3, name: 'Daniel Rahe', planName: "Free", fat: 'Feb 25,2025', expiry: 'Feb 25,2025', carbs: <DeleteIcon /> },
    { slNo: 4, name: 'Adrin Jole', planName: "Free", fat: 'Feb 25,2025', expiry: 'Feb 25,2025', carbs: <DeleteIcon /> },

  ];


 

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Open the menu when button is clicked
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <>
      <Box >
        <Dashnav />

        {/* top header completed */}
        {/* body part started */}
        <Box sx={{ paddingTop: "15px", backgroundColor: "" }}>
          <Grid container>
            <Dashsidebar />


            <Grid xs={12} md={9.5} sm={12} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "20px", sm: "5px 10px" } }}>

              <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                    Home
                  </MUILink>

                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard">
                    Dashboard
                  </MUILink>

                </Breadcrumbs>

              </Box>

              <Box sx={{ backgroundColor: "#fff", padding: "25px", borderRadius: "20px" }}>
                <Typography sx={{ fontFamily: "Poppins", fontSize: "32px", color: "#05004E", lineHeight: "32px", fontWeight: "500", paddingBottom: "25px" }}>
                  Overview
                </Typography>
                <Divider sx={{ color: "#D4E1E9" }} />
                <Grid container spacing={2} sx={{ paddingTop: "25px" }}>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{ padding: { xs: "12px 20px", sm: "20px" }, backgroundColor: "#FFE2E5", borderRadius: "16px", minHeight: { sm: "156px" } }}>
                      <Box sx={{ height: "40px", width: "40px", display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor: "#FA5A7D", borderRadius: "50%", color: "#fff", marginBottom: { xs: "10px", sm: "20px" } }}>
                        <TextSnippetIcon />
                      </Box>
                      <Typography sx={{ fontSize: { sm: "22px", xs: "16px" }, color: "#151D48", fontFamily: "Poppins", fontWeight: "600", lineHeight: { xs: "22px", sm: "32px" }, paddingBottom: { xs: "4px", sm: "8px" } }}>
                        0 Words
                      </Typography>
                      <Typography sx={{ fontSize: { sm: "20px", xs: "16px" }, color: "#425166", fontFamily: "Poppins", fontWeight: "500", lineHeight: "24px", paddingBottom: { xs: "4px", sm: "8px" } }}>
                        Words  Generated
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{ padding: { xs: "12px 20px", sm: "20px" }, backgroundColor: "#FFF4DE", borderRadius: "16px", minHeight: { sm: "156px" } }}>
                      <Box sx={{ height: "40px", width: "40px", display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor: "#FF947A", borderRadius: "50%", color: "#fff", marginBottom: "20px" }}>
                        <CollectionsIcon />
                      </Box>
                      <Typography sx={{ fontSize: { sm: "22px", xs: "16px" }, color: "#151D48", fontFamily: "Poppins", fontWeight: "600", lineHeight: { sm: "32px", xs: "22px" }, paddingBottom: { xs: "4px", sm: "8px" } }}>
                        0 Image
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "16px", sm: "20px" }, color: "#425166", fontFamily: "Poppins", fontWeight: "500", lineHeight: "24px", paddingBottom: { xs: "4px", sm: "8px" } }}>
                        Images  Generated
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{ padding: { sm: "20px", xs: "12px 20px" }, backgroundColor: "#DCFCE7", borderRadius: "16px", minHeight: { sm: "156px" } }}>
                      <Box sx={{ height: "40px", width: "40px", display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor: "#3CD856", borderRadius: "50%", color: "#fff", marginBottom: "20px" }}>
                        <JoinLeftIcon />
                      </Box>
                      <Typography sx={{ fontSize: { xs: "16px", sm: "22px" }, color: "#151D48", fontFamily: "Poppins", fontWeight: "600", lineHeight: { sm: "32px", xs: "22px" }, paddingBottom: { xs: "4px", sm: "8px" } }}>
                        $749 USD
                      </Typography>
                      <Typography sx={{ fontSize: { sm: "20px", xs: "16px" }, color: "#425166", fontFamily: "Poppins", fontWeight: "500", lineHeight: "24px", paddingBottom: { xs: "4px", sm: "8px" } }}>
                        Total   Earnings
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <Box sx={{ padding: { xs: "12px 20px", sm: "20px" }, backgroundColor: "#F3E8FF", borderRadius: "16px", minHeight: { sm: "156px" } }}>
                      <Box sx={{ height: "40px", width: "40px", display: 'flex', justifyContent: "center", alignItems: "center", backgroundColor: "#BF83FF", borderRadius: "50%", color: "#fff", marginBottom: "20px" }}>
                        <UpdateIcon />
                      </Box>
                      <Typography sx={{ fontSize: { xs: "16px", sm: "22px" }, color: "#151D48", fontFamily: "Poppins", fontWeight: "600", lineHeight: { xs: "22px", sm: "32px" }, paddingBottom: { xs: "4px", sm: "8px" } }}>
                        75 Subscriber
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "16px", sm: "20px" }, color: "#425166", fontFamily: "Poppins", fontWeight: "500", lineHeight: "24px", paddingBottom: { xs: "4px", sm: "8px" } }}>
                        Total
                        Subscriber
                      </Typography>
                    </Box>
                  </Grid>

                </Grid>
              </Box>
              {/* start of usage  part  */}
              <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ", marginTop: "20px" }}>

                <Grid container>
                  <Grid xs={12} sm={12} md={12}>
                    <Box sx={{ padding: "0px", backgroundColor: "#fff", borderRadius: "10px", width: "auto" }}>
                      <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: { sm: "35px", xs: "28px" }, color: "#000000", lineHeight: "52.5px" }}>
                        Usage
                      </Typography>
                      <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: { sm: "18px", xs: "14px" }, color: "#000000", lineHeight: "27px", opacity: "86%", paddingTop: "20px", borderBottom: "1px solid #D4E1E9 ", paddingBottom: "15px" }}>
                        Below you’ll find a summary of word usage per day. All dates and times are UTC-based.
                      </Typography>
                      <Box sx={{ paddingTop: "30px" }}>

                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            500
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            400
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            300
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            200
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            100
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                          <Typography sx={{ marginRight: "20px", fontFamily: "Lato", fontSize: "12px", fontWeight: "400", lineHeight: "14.4px", color: "#000" }}>
                            0
                          </Typography>
                          <Box sx={{ borderTop: "1.6px solid #00000038", width: "100%" }}>

                          </Box>
                        </Box>
                      </Box>
                    </Box>

                  </Grid>
                </Grid>



              </Box>
              {/* start recent subscripion */}

              <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ", marginTop: "20px" }}>
                <Typography sx={{ color: "#05004E", fontSize: "24px", fontFamily: "Poppins", fontWeight: "500", lineHeight: "32px", borderBottom: "1px solid #D4E1E9", paddingBottom: "15px" }}>
                  Recent Subscription
                </Typography>
                <TableContainer component={Paper} sx={{ width: "100%", marginTop: "30px" }}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Sl.No</TableCell>
                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }} >User Name</TableCell>
                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Plan Name</TableCell>
                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>subscribed</TableCell>
                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Expiry Date</TableCell>
                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Status</TableCell>


                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                            {row.slNo}
                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px", textAlign: "center" }}>{row.name}

                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.planName}

                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.fat}

                          </TableCell>
                          <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.expiry}

                          </TableCell>

                          <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                            <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none",fontFamily:"Poppins" }}  onClick={handleClick}>
                              Active <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                            </Button>
                            <Menu
                              anchorEl={anchorEl}
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                              sx={{ marginTop: "10px" }}
                            >
                              <MenuItem onClick={handleClose} style={{fontFamily:"Poppins"}}>Active</MenuItem>
                              <MenuItem onClick={handleClose}  style={{fontFamily:"Poppins"}}>Non-Active</MenuItem>
                             
                            </Menu>
                          </TableCell>

                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box sx={{ paddingTop: "25px", display: "flex", justifyContent: "flex-end" }}>
                  <Stack spacing={2}>

                    <Pagination count={10} color="primary" />

                  </Stack>
                </Box>

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

export default Dashboard
