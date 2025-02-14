"use Client";
import {
  Box,
  Button,
  Grid,
  Typography,
  Breadcrumbs,
  Link as MUILink,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../../app/Assets/Imges/pdf1.png";
import image2 from "../../../app/Assets/Imges/pdf2.png";
import image3 from "../../../app/Assets/Imges/pdf3.png";
import { MdOutlineFileUpload } from "react-icons/md";
import axios from "axios";
import Dashnav from "../dashnav";
import Dashsidebar from "../dashsidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";

const Analyst = () => {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    setLoading(!loading);
    setResponse("");
    setDisplayedText("");
    setIndex(0);
    try {
      const res = await axios.post(
        "http://localhost:4000/ai/prompt/data_analysis",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setResponse(res.data.analysis);
    } catch (error) {
      console.error(error);
      toast.error("Error uploading file");
    } finally {
      setLoading(false);
      setFile(null); // Reset file state
      const fileInput = document.getElementById(
        "fileInput"
      ) as HTMLInputElement;
      if (fileInput) fileInput.value = ""; // Clear input field safely
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return; // Ensure files exist

    setFile(e.target.files[0]);
    e.target.value = ""; // Allow selecting the same file again
  };

  useEffect(() => {
    if (file) {
      handleUpload();
    }
  }, [file]);

  // Typing effect
  useEffect(() => {
    if (response && index < response.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + response[index]);
        setIndex(index + 1);
      }, 1); // Adjust speed here (milliseconds per character)
      return () => clearTimeout(timer);
    }
  }, [response, index]);

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
                      href="/dashboard/assistant"
                    >
                      Assistant
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
                      textAlign: "center",
                      fontFamily: "Quicksand",
                      fontSize: { xs: "32px", sm: "52.1px" },
                      lineHeight: "65.13px",
                      fontWeight: "600",
                      color: "#000000",
                    }}
                  >
                    Analyze Your Data
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: "Quicksand",
                      fontSize: { sm: "23px", xs: "18px" },
                      lineHeight: "28px",
                      fontWeight: "400",
                      color: "#000000",
                      paddingTop: "10px",
                    }}
                  >
                    Upload your file for data analysis, summarization, and more.
                  </Typography>
                  <Box sx={{ paddingTop: "50px" }}>
                    <Typography
                      sx={{
                        color: "#515151",
                        fontSize: { sm: "20px", xs: "18px" },
                        lineHeight: "25px",
                        fontWeight: "400",
                        fontFamily: "Quicksand",
                        textAlign: "center",
                        paddingBottom: "25px",
                      }}
                    >
                      You can add multiple PDF, DOC, TXT, and other files
                      together.
                    </Typography>

                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image src={image1} alt="image1" />
                      <Image src={image2} alt="image2" />
                      <Image src={image3} alt="image3" />
                    </Box>
                    <Box
                      sx={{
                        paddingTop: "40px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <input
                        hidden
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className=""
                        name="fileUploader"
                        id="fileUploader"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="fileUploader">
                        {file ? file.name : ""}
                        <div
                          // variant="contained"
                          style={{
                            cursor: "pointer",
                            backgroundColor: "#D7F200",
                            color: "#000000",
                            fontWeight: "700",
                            fontFamily: "Quicksand",
                            fontSize: "20px",
                            lineHeight: "28.95px",
                            textTransform: "capitalize",
                            padding: "10px 30px",
                            borderRadius: "15px",
                            boxShadow: "none",
                          }}
                        >
                          {loading ? (
                            <>
                              Analysing &nbsp;<span className="loader"></span>
                            </>
                          ) : (
                            <>
                              <MdOutlineFileUpload
                                style={{
                                  marginRight: "10px",
                                  fontSize: "28px",
                                }}
                              />{" "}
                              Upload File
                            </>
                          )}
                        </div>
                      </label>
                    </Box>
                  </Box>

                  {/* prompt window */}
                  {response && (
                    <div className="container">
                      <ReactMarkdown>{displayedText}</ReactMarkdown>
                    </div>
                  )}
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

export default Analyst;
