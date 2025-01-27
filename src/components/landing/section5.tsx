import { Box, Typography } from '@mui/material'
import React from 'react'
import bgImage from '../../app/Assets/Imges/16359108_v904-nunny-026 1.png' 

const section5 = () => {
  return (
    <>
      <Box 
        sx={{
          padding: { sm: '50px 0', xs: '20px 0' },
          backgroundImage: `url(${bgImage})`,  // Set background image
          backgroundSize: 'cover',             // Make the image cover the whole box
          backgroundPosition: 'center',        // Center the background image
          backgroundRepeat: 'no-repeat',       // Prevent the image from repeating
                            
        }}
      >
        <Box sx={{ paddingBottom: '60px' }}>
          <Typography
            sx={{
              fontSize: { sm: '50px', xs: '25px' },
              lineHeight: '60px',
              fontWeight: '400',
              fontFamily: 'Montserrat',
              textAlign: 'center',
              color: '#000',
            }}
          >
            Our  <span style={{ fontWeight: '700' }}>Pricing</span>
          </Typography>
          <Typography
            sx={{
              paddingTop: '10px',
              textAlign: 'center',
              fontFamily: 'Montserrat',
              fontSize: { sm: '16px', xs: '14px' },
              lineHeight: { sm: '30px', xs: '20px' },
            }}
          >
           Our plans are simple and clear, they are based on the total credits used in each month.
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default section5;
