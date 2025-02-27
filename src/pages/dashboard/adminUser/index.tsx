"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink,  } from '@mui/material'
import React  from 'react'
import Hero from '../../../pages/dashboard.module.css'
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import RateReviewIcon from '@mui/icons-material/RateReview';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';








const AdminUser = () => {


   
   
       //





    const rows = [
        { slNo: 1, name: "John Samoul", planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Marketing', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 2, name: 'Rashmi Don', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Sales', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 3, name:'Rose William', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Health', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 4, name: "John Doe", planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Marketing', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 5, name: 'Rahimul Asan', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Sales', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 6, name:'Rainbow  Sam', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Health', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 7, name: "Happy Joel", planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Marketing', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 8, name: 'Intel Sam', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Sales', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 9, name:'Rose Martin', planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Health', carbs: <DeleteIcon />,activeplan:"Free" },
        { slNo: 10, name: "Jack Soft", planName: "demo@examplemail.com", title: 'Feb 03, 2025', expiry: 'Marketing', carbs: <DeleteIcon />,activeplan:"Free" },
        


    ];

    return (
        <>
            <Box>
                <Dashnav />
                {/* top header completed */}
                {/* body part started */}
                <Box sx={{ paddingTop: "15px" }}>
                    <Grid container sx={{ paddingLeft: "0px", paddingRight: "0px" }}>
                        <Dashsidebar />

                        <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: " 20px" }, display: "flex", flexDirection: "column" }}>
                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/adminUser">
                                        Users
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#fff", padding: "20px", position: "relative", borderRadius: "20px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #000", paddingBottom: "15px" }}>
                                    <Typography sx={{ fontSize: "24px", fontFamily: "Lato", fontWeight: "500", lineHeight: "28.8px", color: "#000" }}>
                                        Users
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: { sm: "flex-end", xs: "flex-start" } }}>
                                        <input placeholder='search....' type='text' style={{ padding: "10px", borderRadius: "10px 0px 0px 10px", fontSize: "20px", lineHeight: "20px", fontFamily: "Quicksand", fontWeight: "400", border: "1px solid #0000001A", outline: "none", backgroundColor: "#F5F5F5", borderRight: "0px" }} className={Hero.inputField} />
                                        <Box sx={{ height: { sm: "70px", xs: "60px" }, width: { sm: "64px", xs: "45px" }, backgroundColor: "#F5F5F5", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 10px 10px 0px", border: "1px solid #0000001A", borderLeft: "0px" }}>
                                            <SearchIcon sx={{ fontSize: "28px", fontWeight: "600" }} />
                                        </Box>
                                    </Box>

                                </Box>
                                <TableContainer component={Paper} sx={{ width: "100%", marginTop: "30px" }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Sl.No</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "left" }} >User Name</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Email ID</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "left" }}>Join Date</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "left" }}>Active Plan</TableCell>
                                                
                                            <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Action</TableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.slNo}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                        {row.slNo}
                                                    </TableCell>
                                                    <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                        {row.name}
                                                    </TableCell>
                                                    
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >
                                                        {row.planName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "left" }}  >
                                                        {row.title}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "left" }}  >
                                                        {row.activeplan}

                                                    </TableCell>
                                                   

                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >
                                                    <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                                            <Box sx={{ width: "37px", height: "37px", backgroundColor: "#3498DB", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                                                <RateReviewIcon sx={{ color: "#fff", cursor: "pointer" }} />
                                                            </Box>
                                                            <Box sx={{ width: "37px", height: "37px", backgroundColor: "#E74C3C", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                                                <DeleteIcon sx={{ color: "#fff", cursor: "pointer" }} />
                                                            </Box>
                                                            <Box sx={{ width: "37px", height: "37px", backgroundColor: "#2ECC71", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer" }}>
                                                                <RemoveRedEyeIcon sx={{ color: "#fff", cursor: "pointer" }} />
                                                            </Box>
                                                        </Box>

                                                    </TableCell>
                                                    


                                                  

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

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

export default AdminUser
