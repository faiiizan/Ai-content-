"use Client"
import { Box, Button, Grid, Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React, { useState,  SVGProps } from 'react'
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
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const CustomRectangle = (props: SVGProps<SVGRectElement>) => (
    <rect {...props} />
);

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

    const data = [
        {
            name: '02 Feb',
            uv: 500,
            pv: 240,
            amt: 240,
        },
        {
            name: '03 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '04 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '05 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '06 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '07 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '08 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '09 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '10 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '11 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '12 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
        {
            name: '13 Feb',
            uv: '',
            pv: '',
            amt: '',
        },
    ];


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

                                    <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/adminTransaction">
                                    Transaction
                                    </MUILink>

                                </Breadcrumbs>

                            </Box>


                            {/* start of usage  part  */}
                            <Box sx={{ background: "#fff", padding: "25px", borderRadius: "23px ", marginTop: "20px" }}>

                                <Grid container>
                                    <Grid xs={12} sm={12} md={12}>
                                        <Box sx={{ padding: "0px", backgroundColor: "#fff", borderRadius: "10px", width: "auto" }}>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "500", fontSize: { sm: "35px", xs: "28px" }, color: "#000000", lineHeight: "52.5px" }}>
                                            Revenue
                                            </Typography>
                                            <Typography sx={{ fontFamily: "Poppins", fontWeight: "400", fontSize: { sm: "18px", xs: "14px" }, color: "#000000", lineHeight: "27px", opacity: "86%", paddingTop: "20px", borderBottom: "1px solid #D4E1E9 ", paddingBottom: "15px" }}>
                                                Below you’ll find a summary of word usage per day. All dates and times are UTC-based.
                                            </Typography>
                                            <Box sx={{ paddingTop: "30px" }}>


                                                <ResponsiveContainer width="100%" height={450}>
                                                    <BarChart
                                                        data={data}
                                                        margin={{
                                                            top: 5,
                                                            right: 30,
                                                            left: 20,
                                                            bottom: 5,
                                                        }}
                                                    >
                                                        <CartesianGrid strokeDasharray="3 3" />
                                                        <XAxis dataKey="name" />
                                                        <YAxis     // Set the domain to start from 0 and adjust the upper value for hundreds
                                                            domain={[0, (dataMax: number) => Math.ceil(dataMax / 100) * 100]} // Adjust the max value to the nearest hundred
                                                            tickCount={6} // Set the number of ticks you want (in this case, 6 ticks)
                                                            tickFormatter={(value) => value % 100 === 0 ? value : ''} />
                                                        <Tooltip />
                                                        <Legend />
                                                        <Bar
                                                            dataKey="pv"
                                                            fill="#8884d8"
                                                            shape={(props: unknown) => {
                                                                const svgProps = props as SVGProps<SVGRectElement>;
                                                                return (
                                                                    <CustomRectangle
                                                                        {...svgProps}
                                                                        fill="#26A0FC"
                                                                        stroke="#26A0FC"
                                                                    />
                                                                );
                                                            }}
                                                        />
                                                        <Bar
                                                            dataKey="uv"
                                                            fill="#82ca9d"
                                                            shape={(props: unknown) => {
                                                                const svgProps = props as SVGProps<SVGRectElement>;
                                                                return (
                                                                    <CustomRectangle
                                                                        {...svgProps}
                                                                        fill="gold"
                                                                        stroke="purple"
                                                                    />
                                                                );
                                                            }}
                                                        />
                                                    </BarChart>
                                                </ResponsiveContainer>

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
                                                        <Button variant='contained' sx={{ backgroundColor: "#F5F5F5", color: "#4A4A4ACC", boxShadow: "none", fontFamily: "Poppins" }} onClick={handleClick}>
                                                            Active <KeyboardArrowDownIcon sx={{ marginLeft: "10px" }} />
                                                        </Button>
                                                        <Menu
                                                            anchorEl={anchorEl}
                                                            open={Boolean(anchorEl)}
                                                            onClose={handleClose}
                                                            sx={{ marginTop: "10px" }}
                                                        >
                                                            <MenuItem onClick={handleClose} style={{ fontFamily: "Poppins" }}>Active</MenuItem>
                                                            <MenuItem onClick={handleClose} style={{ fontFamily: "Poppins" }}>Non-Active</MenuItem>

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
