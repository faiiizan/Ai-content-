"use Client"
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import Hero from '../../../pages/dashboard.module.css'
import Link from 'next/link'
import image1 from '../../../app/Assets/Imges/Ellipse 1.png'
import image2 from '../../../app/Assets/Imges/Ellipse 1 (1).png'
import image3 from '../../../app/Assets/Imges/Ellipse 1 (2).png'
import image4 from '../../../app/Assets/Imges/Ellipse 1 (3).png'
import image5 from '../../../app/Assets/Imges/Ellipse 1 (4).png'
import image6 from '../../../app/Assets/Imges/Ellipse 1 (5).png'
import image8 from '../../../app/Assets/Imges/Ellipse 1 (7).png'
import image9 from '../../../app/Assets/Imges/Ellipse 1 (8).png'
import image10 from '../../../app/Assets/Imges/Ellipse 1 (9).png'
import image11 from '../../../app/Assets/Imges/Ellipse 1 (10).png'
import image12 from '../../../app/Assets/Imges/Ellipse 1 (11).png'
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







const AdminAssistant = () => {





   


    const rows = [
        { slNo: 1, name: image1, planName: "John Samoul", fat: '', expiry: 'Marketing', carbs: <DeleteIcon /> },
        { slNo: 2, name: image2, planName: "Rashmi Don", fat: '', expiry: 'Sales', carbs: <DeleteIcon /> },
        { slNo: 3, name: image3, planName: "Rose William", fat: '', expiry: 'Health', carbs: <DeleteIcon /> },
        { slNo: 4, name: image4, planName: "John Doe", fat: '', expiry: 'Job', carbs: <DeleteIcon /> },
        { slNo: 5, name: image5, planName: "Rahimul Asan", fat: '', expiry: 'Business', carbs: <DeleteIcon /> },
        { slNo: 6, name: image6, planName: "Rainbow  Sam", fat: '', expiry: 'Website', carbs: <DeleteIcon /> },
        { slNo: 7, name: image9, planName: "Happy Joel", fat: '', expiry: 'Writing', carbs: <DeleteIcon /> },
        { slNo: 8, name: image8, planName: "Intel Sam", fat: '', expiry: 'Marketing', carbs: <DeleteIcon /> },
        { slNo: 9, name: image9, planName: "Rose Martin", fat: '', expiry: 'Social', carbs: <DeleteIcon /> },
        { slNo: 10, name: image10, planName: "Jack Soft", fat: '', expiry: 'Website', carbs: <DeleteIcon /> },
        { slNo: 11, name: image11, planName: "Intel Sam", fat: '', expiry: 'Writing', carbs: <DeleteIcon /> },
        { slNo: 12, name: image12, planName: "Jack Soft", fat: '', expiry: 'Marketing', carbs: <DeleteIcon /> },

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

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/assistant">
                                        Assistant
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>

                            <Box sx={{ background: "#fff", padding: "20px", position: "relative", borderRadius: "20px" }}>
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #000", paddingBottom: "15px" }}>
                                    <Typography sx={{ fontSize: "24px", fontFamily: "Lato", fontWeight: "500", lineHeight: "28.8px", color: "#000" }}>
                                        Buy Property List
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
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }} >Image</TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>User Name</TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Role</TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Group</TableCell>
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
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px", textAlign: "center",display:"flex",alignItems:"flex-end",justifyContent:"center",paddingTop:"26px" }}>
                                                            <Image src={row.name} alt='image' style={{width:"50px",height:"50px",}}/>

                                                        </TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.planName}

                                                        </TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.fat}

                                                        </TableCell>
                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.expiry}

                                                        </TableCell>

                                                        <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>

                                                          <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
                                                             <Box sx={{width:"50px",height:"50px",backgroundColor:"#3498DB",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",cursor:"pointer"}}>
                                                                <RateReviewIcon sx={{color:"#fff",cursor:"pointer"}}/>
                                                             </Box>
                                                             <Box sx={{width:"50px",height:"50px",backgroundColor:"#E74C3C",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",cursor:"pointer"}}>
                                                                <DeleteIcon sx={{color:"#fff",cursor:"pointer"}}/>
                                                             </Box>
                                                             <Box sx={{width:"50px",height:"50px",backgroundColor:"#2ECC71",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",cursor:"pointer"}}>
                                                                <RemoveRedEyeIcon sx={{color:"#fff",cursor:"pointer"}}/>
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

export default AdminAssistant
