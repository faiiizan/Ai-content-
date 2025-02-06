"use Client"
import { Box, Button,  Grid,  Typography,  Breadcrumbs, Link as MUILink, } from '@mui/material'
import React from 'react'

import Image from 'next/image'
import Hero from '../../../pages/dashboard.module.css'
import Link from 'next/link'
import image1 from '../../../app/Assets/Imges/Vector.png'
import image2 from '../../../app/Assets/Imges/Vector (1).png'
import image3 from '../../../app/Assets/Imges/Vector (2).png'
import image4 from '../../../app/Assets/Imges/Group.png'

import Dashnav from '../dashnav'
import Dashsidebar from '../dashsidebar'
import { useRouter } from 'next/router'




const History = () => {


 const router = useRouter()

 const handleclick = ()=>{
    router.push('/dashboard/upgradeplan')
 }

  



  return (
    <>
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

                  <MUILink sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontFamily: "Poppins", fontWeight: "500", fontSize: "16px", lineHeight: "32px" }} color="inherit" href="/dashboard/plans">
                    Plans & Pricing
                  </MUILink>

                </Breadcrumbs>

              </Box>

              <Box sx={{ background: "#fff", padding: { sm: "20px 30px", xs: "10px" }, minHeight: "100vh", borderRadius: "23px 23px 0px 0px" }}>
                <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "space-between" }, alignItems: "center", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                  <Link href='/your_billing_overview' style={{ textDecoration: "none" }}>
                    <Typography sx={{ fontFamily: "Quicksand", fontSize: { xs: "32px", md: "56.4px" }, lineHeight: { sm: "70.5px", xs: "35px" }, fontWeight: "600", color: "#000000" }}>
                      Your Billing overview
                    </Typography>
                  </Link>
                  <Box sx={{ paddingTop: { xs: "20px", sm: "0px" } }}>
                    <Button variant='contained' sx={{ backgroundColor: "#D7F200", borderRadius: "15.6px", textTransform: "capitalize", color: "#515151", fontFamily: "Inter", boxShadow: "none", padding: { sm: "15px 25px", xs: "10px 20px" }, fontSize: { sm: "21px", xs: "18px" }, lineHeight: "27px" }} onClick={handleclick}>
                      Upgrade plan
                    </Button>
                  </Box>
                </Box>
                <Box sx={{ padding: "60px 0px" }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={3} sm={6}>
                      <Box sx={{ padding: { sm: "15px 20px", xs: "10px 20px" }, border: "1.5px solid #E9E9E9", borderRadius: "23.5px" }}>
                        <Typography sx={{ fontSize: { xs: "20px", sm: "25.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#515151", lineHeight: "31.33px" }}>
                          Active plan
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "22px", sm: "28.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#000", lineHeight: "35.33px", paddingTop: "5px" }}>
                          Free
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                      <Box sx={{ padding: { sm: "15px 20px", xs: "10px 20px" }, border: "1.5px solid #E9E9E9", borderRadius: "23.5px" }}>
                        <Typography sx={{ fontSize: { xs: "20px", sm: "25.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#515151", lineHeight: "31.33px" }}>
                          Plan expire
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "22px", sm: "28.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#000", lineHeight: "35.33px", paddingTop: "5px" }}>
                          Feb 15, 2025
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                      <Box sx={{ padding: { sm: "15px 20px", xs: "10px 20px" }, border: "1.5px solid #E9E9E9", borderRadius: "23.5px" }}>
                        <Typography sx={{ fontSize: { xs: "20px", sm: "25.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#515151", lineHeight: "31.33px" }}>
                          Words left
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "22px", sm: "28.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#000", lineHeight: "35.33px", paddingTop: "5px" }}>
                          5000 words
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={3} sm={6}>
                      <Box sx={{ padding: { sm: "15px 20px", xs: "10px 20px" }, border: "1.5px solid #E9E9E9", borderRadius: "23.5px" }}>
                        <Typography sx={{ fontSize: { xs: "20px", sm: "25.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#515151", lineHeight: "31.33px" }}>
                          Images left
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "22px", sm: "28.07px" }, fontFamily: "Quicksand", fontWeight: "600", color: "#000", lineHeight: "35.33px", paddingTop: "5px" }}>
                          0 Images
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                <Box sx={{ padding: { sm: "50px 60px", xs: "30px 15px" }, backgroundColor: "#EBEBEB", borderRadius: "23px" }}>
                  <Grid container spacing={2} sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Grid xs={12} md={6} sx={{ paddingBottom: "40px" }}>
                      <Link href='/payment_methods' style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                          <Image src={image1} alt='image' style={{ paddingTop: "0px" }} className={Hero.plansImage} />
                          <Box sx={{ paddingLeft: { xs: "10px", sm: "25px" } }}>

                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "28.2px", xs: "25px" }, fontWeight: "700", lineHeight: "35.25px", color: "#000000" }}>
                              Payment methods
                            </Typography>

                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "22.2px", xs: "18px" }, fontWeight: "600", lineHeight: { sm: "35.25px", xs: "28px" }, color: "#515151" }}>
                              Add or change payment method
                            </Typography>

                          </Box>


                        </Box>
                      </Link>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ paddingBottom: "40px" }}>
                      <Link href='/plans_and_pricing' style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: { md: "center" }, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                          <Image src={image2} alt='image' style={{ paddingTop: "6px" }} className={Hero.plansImage} />
                          <Box sx={{ paddingLeft: { sm: "25px", xs: "10px" } }}>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: "28.2px", fontWeight: "700", lineHeight: { sm: "35.25px", xs: "25px" }, color: "#000000" }}>
                              Plans and pricing
                            </Typography>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "22.2px", xs: "18px" }, fontWeight: "600", lineHeight: { sm: "35.25px", xs: "28px" }, color: "#515151", paddingTop: { xs: "10px", sm: "0px" } }}>
                              View pricing and FAQs
                            </Typography>
                          </Box>

                        </Box>
                      </Link>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ paddingBottom: "20px" }}>
                      <Link href='subscription_history' style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                          <Image src={image3} alt='image' style={{ paddingTop: "6px" }} className={Hero.plansImage} />
                          <Box sx={{ paddingLeft: { sm: "25px", xs: "15px" } }}>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "28.2px", xs: "22px" }, fontWeight: "700", lineHeight: "35.25px", color: "#000000" }}>
                              Subscription history
                            </Typography>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "22.2px", xs: "22px" }, fontWeight: "600", lineHeight: { sm: "35.25px", xs: "28px" }, color: "#515151", paddingTop: { xs: "0px", sm: "0px" } }}>
                              View subscriptions and invoices
                            </Typography>
                          </Box>

                        </Box>
                      </Link>
                    </Grid>
                    <Grid xs={12} md={6} sx={{ paddingBottom: "40px" }}>
                      <Link href='/transaction' style={{ textDecoration: "none" }}>
                        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: { xs: "flex-start", md: "center" }, flexWrap: { xs: "wrap", sm: "nowrap" } }}>
                          <Image src={image4} alt='image' style={{ paddingTop: "6px" }} />
                          <Box sx={{ paddingLeft: { xs: "15px", sm: "25px" } }}>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "28.2px", xs: "25px" }, fontWeight: "700", lineHeight: "35.25px", color: "#000000" }}>
                              Transaction
                            </Typography>
                            <Typography sx={{ fontFamily: "Quicksand", fontSize: { sm: "22.2px", xs: "18px" }, fontWeight: "600", lineHeight: { sm: "35.25px", xs: "28px" }, color: "#515151", }}>
                              View pricing and FAQs
                            </Typography>
                          </Box>

                        </Box>
                      </Link>
                    </Grid>


                  </Grid>
                </Box>



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
