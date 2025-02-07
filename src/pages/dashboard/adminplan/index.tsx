"use Client"
import { Box, Button, Grid, Typography, Breadcrumbs, Link as MUILink, } from '@mui/material'
import React, { useState  } from 'react'
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
import { Menu, MenuItem } from "@mui/material";





const AdminPlan = () => {




   
    const monthlyPlan = [
        { slNo: 1, PlanName: 'Free', planName: "Free", fat: '&0/m', expiry: '0', carbs: <DeleteIcon /> },
        { slNo: 2, PlanName: 'Basic', planName: "Free", fat: '&15/m', expiry: '10', carbs: <DeleteIcon /> },
        { slNo: 3, PlanName: 'Standard', planName: "Free", fat: '$29/m', expiry: '50', carbs: <DeleteIcon /> },
        { slNo: 4, PlanName: 'Premium', planName: "Free", fat: '$49/m', expiry: '100', carbs: <DeleteIcon /> },

    ];
  
    
    const [anchorEll, setAnchorEll] = useState<null | HTMLElement>(null);

    // Open the menu when button is clicked
    const handleClickk = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEll(event.currentTarget);
    };

    // Close the menu
    const handleClosee = () => {
        setAnchorEll(null);
    };

    //



    

    //

    


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

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/adminPlans">
                                        Plans
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>


                            {/* start of usage  part  */}
                           
                            {/* Monthly Plan */}

                            <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ",  }}>
                                <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: { sm: "24px", xs: "28px" }, color: "#05004E", lineHeight: "32.5px",paddingBottom:"15px" }}>
                                    Plans & Pricing
                                </Typography>
                                <Typography sx={{ color: "#05004E", fontSize: "24px", fontFamily: "Poppins", fontWeight: "500", lineHeight: "32px", borderBottom: "1px solid #D4E1E9", paddingBottom: "15px" }}>
                                    Monthly Plan
                                </Typography>
                                <TableContainer component={Paper} sx={{ width: "100%", marginTop: "30px" }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Sl.No</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }} >Plan Name</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Pricing</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Words</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Images</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Premium</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Assistant</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Analyst</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Status</TableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {monthlyPlan.map((row) => (
                                                <TableRow
                                                    key={row.slNo}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                        {row.slNo}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px", textAlign: "center" }}>{row.PlanName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.planName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.fat}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.expiry}

                                                    </TableCell>

                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Cancelled <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Cancelled</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Paid</MenuItem>

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
                            {/* start Yearly Plan */}
                            <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ", marginTop: "20px" }}>
                                <Typography sx={{ color: "#05004E", fontSize: "24px", fontFamily: "Poppins", fontWeight: "500", lineHeight: "32px", borderBottom: "1px solid #D4E1E9", paddingBottom: "15px" }}>
                                    Yearly Plan
                                </Typography>
                                <TableContainer component={Paper} sx={{ width: "100%", marginTop: "30px" }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Sl.No</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }} >Plan Name</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Pricing</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Words</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Images</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Premium</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Assistant</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Analyst</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Status</TableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {monthlyPlan.map((row) => (
                                                <TableRow
                                                    key={row.slNo}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                        {row.slNo}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px", textAlign: "center" }}>{row.PlanName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.planName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.fat}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.expiry}

                                                    </TableCell>

                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Yes <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>No</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Yes</MenuItem>

                                                        </Menu>
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Cancelled <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Cancelled</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Paid</MenuItem>

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
                            {/* prepaid plan */}
                            <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ", marginTop: "20px" }}>
                                <Typography sx={{ color: "#05004E", fontSize: "24px", fontFamily: "Poppins", fontWeight: "500", lineHeight: "32px", borderBottom: "1px solid #D4E1E9", paddingBottom: "15px" }}>
                                    Prepaid Plan
                                </Typography>
                                <TableContainer component={Paper} sx={{ width: "100%", marginTop: "30px" }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px" }}>Sl.No</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }} >Plan Name</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Pricing</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Words</TableCell>
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Images</TableCell>
                                               
                                               
                                              
                                                <TableCell align="right" sx={{ fontFamily: "Poppins", fontWeight: "600", fontSize: "18px", textAlign: "center" }}>Status</TableCell>


                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {monthlyPlan.map((row) => (
                                                <TableRow
                                                    key={row.slNo}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400" }}>
                                                        {row.slNo}
                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingLeft: "5px", textAlign: "center" }}>{row.PlanName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.planName}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.fat}

                                                    </TableCell>
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", paddingRight: "38px", color: "#000000DE", cursor: "pointer", textAlign: "center" }}  >{row.expiry}

                                                    </TableCell>

                                                  
                                                  
                                                    <TableCell align="right" sx={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: "400", textAlign: "center" }}>
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClickk}>
                                                            Cancelled <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEll}
                                                            open={Boolean(anchorEll)}
                                                            onClose={handleClosee}
                                                            sx={{ marginTop: "10px",width:"450px" }}
                                                        >
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Cancelled</MenuItem>
                                                            <MenuItem onClick={handleClosee} style={{ fontFamily: "Poppins" }}>Paid</MenuItem>

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

export default AdminPlan
