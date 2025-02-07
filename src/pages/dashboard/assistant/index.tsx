"use Client"
import { Box,  Grid,  Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from'react'
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
import { FaPaperclip } from 'react-icons/fa';
import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import DashboardLayout from '@/components/layout/DashboardLayout'






const Templates = () => {


  


  const card = [
    { img: image1, title: "Kierra Curtis" },
    { img: image2, title: "Ashlynn Rhiel Madsen" },
    { img: image3, title: "Terry Septimus" },
    { img: image4, title: "Advertiser" },
    { img: image5, title: "Advertiser" },
    { img: image6, title: "Advertiser" },
    { img: image8, title: "Advertiser" },
    { img: image9, title: "Advertiser" },
    { img: image10, title: "Advertiser" },
    { img: image11, title: "Advertiser" },
    { img: image12, title: "Advertiser" },
    { img: image2, title: "Advertiser" },
    { img: image3, title: "Advertiser" },
    { img: image4, title: "Advertiser" },
    { img: image5, title: "Advertiser" },



  ]

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

              <Box sx={{ background: "#fff", padding: "20px", position: "relative" }}>
                <Typography sx={{ fontSize: "45px", fontFamily: "Quicksand", lineHeight: "56px", textAlign: "center", fontWeight: "600", color: "#000" }}>
                  How can I help you today?
                </Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "Quicksand", lineHeight: "25px", textAlign: "center", fontWeight: "400", color: "#515151", paddingTop: "10px" }}>
                  Please select an assistant or enter your message in the input box below.
                </Typography>
                <Grid container sx={{ paddingTop: { xs: "20px", md: "50px" } }} spacing={1}>
                  {
                    card.map((item) => {
                      return (
                        <>
                          <Grid xs={12} sm={4} md={2.4} item>
                            <Link href='/my_chat' style={{textDecoration:"none"}}>
                            <Box sx={{ border: "1px solid #E9E9E9", padding: "10px", borderRadius: "19px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                              <Image src={item.img} alt='image' />
                              <Typography sx={{ fontFamily: "Quicksand", paddingTop: "8px", fontWeight: "600", fontSize: "16px", lineHeight: "25px", color: "#000000" }}>
                                {item.title} 
                              </Typography>
                            </Box>
                            </Link>
                          </Grid>
                        </>
                      )
                    })


                  }
                </Grid>
                <Box sx={{ position: "sticky", bottom: "0px", left: "0px", padding: "20px 0px 30px", backgroundColor: "#fff" }}>
                  <input type="text" style={{ padding: "20px 70px", width: "88%", borderRadius: "125px", border: "1px solid #00000033", outline: "none", fontFamily: "Quicksand", fontSize: "20px", fontWeight: "600", lineHeight: "25px", color: "#515151" }} placeholder='write message here' className={Hero.Input} />
                  <FaPaperclip
                    style={{
                      position: 'absolute',
                      left: '40px', // Icon position
                      top: '46%',
                      transform: 'translateY(-50%)',
                      fontSize: '20px',
                      color: '#515151',
                    }}
                    className={Hero.clipIcon}
                  />
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

export default Templates
