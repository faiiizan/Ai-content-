"use Client"
import { Box, Button,  Grid,  Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import image1 from '../../../app/Assets/Imges/pdf1.png'
import image2 from '../../../app/Assets/Imges/pdf2.png'
import image3 from '../../../app/Assets/Imges/pdf3.png'
import { MdOutlineFileUpload } from "react-icons/md";

import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import DashboardLayout from '@/components/layout/DashboardLayout'







const Analyst = () => {



  




  return (
    <>
    <DashboardLayout>
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

                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/assistant">
                    Assistant
                  </MUILink>

                </Breadcrumbs>

              </Box>

              <Box sx={{ background: "#fff", padding: "20px", minHeight: "100vh" }}>

                <Typography sx={{ textAlign: "center", fontFamily: "Quicksand", fontSize: { xs: "32px", sm: "52.1px" }, lineHeight: "65.13px", fontWeight: "600", color: "#000000" }}>
                  Analyze Your Data
                </Typography>
                <Typography sx={{ textAlign: "center", fontFamily: "Quicksand", fontSize: { sm: "23px", xs: "18px" }, lineHeight: "28px", fontWeight: "400", color: "#000000", paddingTop: "10px" }}>
                  Upload your file for data analysis, summarization, and more.
                </Typography>
                <Box sx={{ paddingTop: "50px" }}>
                  <Typography sx={{ color: "#515151", fontSize: { sm: "20px", xs: "18px" }, lineHeight: "25px", fontWeight: "400", fontFamily: "Quicksand", textAlign: "center", paddingBottom: "25px" }}>
                    You can add multiple PDF, DOC, TXT, and other files together.
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image src={image1} alt='image1' />
                    <Image src={image2} alt='image2' />
                    <Image src={image3} alt='image3' />
                  </Box>
                  <Box sx={{ paddingTop: "40px", display: "flex", justifyContent: "center" }}>
                    <Button variant='contained' sx={{ backgroundColor: "#D7F200", color: "#000000", fontWeight: "700", fontFamily: "Quicksand", fontSize: { sm: "23.16px", xs: "20px" }, lineHeight: "28.95px", textTransform: "capitalize", padding: "10px 30px", borderRadius: "15px", boxShadow: "none" }}>
                      <MdOutlineFileUpload style={{ marginRight: "10px", fontSize: "28px" }} /> Upload File
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
  )
}

export default Analyst
