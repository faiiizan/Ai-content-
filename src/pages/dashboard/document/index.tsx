"use Client";
import {
  Box,
  Grid,
  Typography,
  Breadcrumbs,
  Link as MUILink,
} from "@mui/material";
import React from "react";

import Hero from "../../../pages/dashboard.module.css";

import SearchIcon from "@mui/icons-material/Search";

import Dashnav from "../dashnav";
import Dashsidebar from "../dashsidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import DashboardLayout from "@/components/layout/DashboardLayout";

const Content = () => {
  const rows = [
    {
      name: "Test Document",
      calories: "Nov 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Ai startup ideas for Ai trading",
      calories: "june 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Unveilig the Future",
      calories: "july 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Test Document",
      calories: "june 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Test Document",
      calories: "Nov 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Ai startup ideas for Ai trading",
      calories: "june 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Unveilig the Future",
      calories: "july 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
    {
      name: "Test Document",
      calories: "june 8, 2024",
      fat: (
        <BorderColorIcon
          sx={{ color: "#000000", opacity: "87%", fontSize: "20px" }}
        />
      ),
      carbs: <DeleteIcon />,
    },
  ];

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                <Grid>
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
                        href="/dashboard/image"
                      >
                        Documents
                      </MUILink>
                    </Breadcrumbs>
                  </Box>

                  <Box
                    sx={{
                      background: "#fff",
                      padding: "20px",
                      minHeight: "100vh",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "left",
                        fontFamily: "Quicksand",
                        fontSize: { xs: "32px", sm: "44.14px" },
                        lineHeight: { sm: "65.13px", xs: "30px" },
                        fontWeight: "600",
                        color: "#000000",
                        paddingBottom: { xs: "30px", sm: "5px" },
                      }}
                    >
                      Documents
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { sm: "flex-end", xs: "flex-start" },
                        marginBottom: "50px",
                      }}
                    >
                      <input
                        placeholder="search...."
                        type="text"
                        style={{
                          padding: "20px",
                          borderRadius: "10px 0px 0px 10px",
                          fontSize: "20px",
                          lineHeight: "25px",
                          fontFamily: "Quicksand",
                          fontWeight: "400",
                          border: "1px solid #0000001A",
                          outline: "none",
                        }}
                        className={Hero.inputField}
                      />
                      <Box
                        sx={{
                          height: { sm: "70px", xs: "60px" },
                          width: { sm: "64px", xs: "45px" },
                          backgroundColor: "#D7F200",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "0px 10px 10px 0px",
                        }}
                      >
                        <SearchIcon
                          sx={{ fontSize: "28px", fontWeight: "600" }}
                        />
                      </Box>
                    </Box>
                    <Grid container>
                      <Grid xs={12}>
                        <TableContainer
                          component={Paper}
                          sx={{ width: "100%" }}
                        >
                          <Table
                            sx={{ minWidth: 650 }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "18px",
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
                                  }}
                                >
                                  Modified
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                  }}
                                >
                                  Rename
                                </TableCell>
                                <TableCell
                                  align="right"
                                  sx={{
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    fontSize: "18px",
                                  }}
                                >
                                  Delete
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {rows.map((row) => (
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
                                    {row.name}
                                  </TableCell>
                                  <TableCell
                                    align="right"
                                    sx={{
                                      fontFamily: "Poppins",
                                      fontSize: "16px",
                                      fontWeight: "400",
                                      paddingLeft: "35px",
                                    }}
                                  >
                                    {row.calories}
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
                                    }}
                                    onClick={handleClickOpen}
                                  >
                                    {row.fat}
                                  </TableCell>

                                  <TableCell
                                    align="right"
                                    sx={{
                                      fontFamily: "Poppins",
                                      fontSize: "16px",
                                      fontWeight: "400",
                                    }}
                                  >
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
                </Grid>
                {/* enn main part */}
                {/* start popular part  */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogTitle>Rename</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="email"
              label="Document"
              type="file"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit">submit</Button>
          </DialogActions>
        </Dialog>
      </DashboardLayout>
    </>
  );
};

export default Content;
