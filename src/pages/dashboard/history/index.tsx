"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink } from '@mui/material'
import React from 'react'
import Hero from '../../../pages/dashboard.module.css'
import SearchIcon from '@mui/icons-material/Search';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';



const History = () => {
   
    const rows = [
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
        { name: 'Google Ad Description', calories: "English", fat: 'Feb 25,2025', carbs: <DeleteIcon /> },
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

                        <Grid container xs={12} sm={12} md={9.5} sx={{ backgroundColor: "#F8F9FA", padding: { xs: "10px", sm: "5px 25px 20px 25px" }, display: "flex", flexDirection: "column" }}>
                            <Box sx={{ padding: "10px 10px", paddingBottom: "15px" }}>
                                <Breadcrumbs maxItems={2} aria-label="breadcrumb">
                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/">
                                        Home
                                    </MUILink>

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/image">
                                        History
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#fff", padding: "20px", minHeight: "100vh" }}>

                                <Typography sx={{ textAlign: "left", fontFamily: "Quicksand", fontSize: { xs: "32px", sm: "44.14px" }, lineHeight: { sm: "65.13px", xs: "30px" }, fontWeight: "600", color: "#000000", paddingBottom: { xs: "30px", sm: "5px" } }}>
                                    History
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: { sm: "flex-end", xs: "flex-start" } }}>
                                    <input placeholder='search....' type='text' style={{ padding: "20px", borderRadius: "10px 0px 0px 10px", fontSize: "20px", lineHeight: "25px", fontFamily: "Quicksand", fontWeight: "400", border: "1px solid #0000001A", outline: "none" }} className={Hero.inputField} />
                                    <Box sx={{ height: { sm: "70px", xs: "60px" }, width: { sm: "64px", xs: "45px" }, backgroundColor: "#D7F200", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0px 10px 10px 0px" }}>
                                        <SearchIcon sx={{ fontSize: "28px", fontWeight: "600" }} />
                                    </Box>
                                </Box>
                                <Grid container>
                                    <Grid xs={12}>
                                        <TableContainer component={Paper} sx={{ width: "100%",marginTop:"30px" }}>
                                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Use case</TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px",textAlign:"center" }} >Language</TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px",textAlign:"center" }}>Created</TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Delete</TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {rows.map((row) => (
                                                        <TableRow
                                                            key={row.name}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                                {row.name}
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px",textAlign:"center" }}>{row.calories}

                                                            </TableCell>
                                                            <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer",textAlign:"center" }}  >{row.fat}

                                                            </TableCell>

                                                            <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                                <Tooltip title="Delete" arrow>
                                                                    <IconButton>
                                                                        <DeleteIcon />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </TableCell>

                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </Grid>
                               




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

export default History
