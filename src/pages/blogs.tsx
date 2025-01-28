import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Hero from '../pages/blogs.module.css';
import img1 from '../app/Assets/Imges/blog1.png';
import img2 from '../app/Assets/Imges/blog2.png';
import img3 from '../app/Assets/Imges/blog3.png';
import EastIcon from '@mui/icons-material/East';

// Sample blog data (can be dynamic in a real app)
const blogData = [
  { title: "OpenAI, Apple collaborate", image: img1.src },
  { title: "OpenAI acquires Rockset", image: img2.src },
  { title: "Finding GPT-4’s mistakes with GPT-4", image: img3.src },
  { title: "AI in Healthcare: Future Trends", image: img1.src },
  { title: "Blockchain and AI: A Powerful Combo", image: img2.src },
  { title: "How GPT-4 is Revolutionizing the Tech", image: img3.src },
  { title: "The Rise of Quantum Computing", image: img1.src },
  { title: "AI Ethics: Addressing the Dangers", image: img2.src },
  { title: "Machine Learning in Autonomous Vehicles", image: img3.src }
];

const Blogs = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3); // Initially show 3 blogs

  // Handle View More: Increase the visible blogs by 3
  const handleViewMore = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 3);
  };

  // Handle View Less: Decrease the visible blogs by 3
  const handleViewLess = () => {
    setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs - 3);
  };

  // Check if there are more blogs to show for View More
  const hasMoreBlogs = visibleBlogs < blogData.length;

  // Check if we are showing more than the initial 3 blogs for View Less
  const isShowingMoreThanInitial = visibleBlogs > 3;

  return (
    <>
      <Box sx={{ padding: { sm: '50px 0px', xs: '10px 0px' } }} className={Hero.background}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '50.75px',
              fontFamily: 'Inter',
              fontWeight: '600',
              paddingBottom: '30px',
              lineHeight: '63.51px',
              letterSpacing: '-1.72px',
              paddingTop: '0px',
            }}
          >
            Our{' '}
            <span
              className={Hero.blog}
              style={{
                backgroundImage: 'linear-gradient(to right, #603BFC , #FF6835 )',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Blogs
            </span>
          </Typography>

          <Grid container spacing={3}>
            {blogData.slice(0, visibleBlogs).map((blog, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ maxWidth: 345, padding: '10px' }}>
                  <CardMedia
                    sx={{ height: 200, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    image={blog.image}
                    title={blog.title}
                  />
                  <CardContent sx={{ padding: '15px 0px 0px 0px' }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: '#414141',
                        textAlign: 'left',
                        padding: '0px 0px',
                        fontSize: '13.88px',
                        fontFamily: 'Poppins',
                        lineHeight: '17.73px',
                        fontWeight: '500',
                      }}
                    >
                      {blog.title}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ padding: '5px 0px' }}>
                    <Button
                      size="small"
                      sx={{
                        color: '#375DD2',
                        fontSize: '12.33px',
                        lineHeight: '21.58px',
                        textDecoration: 'underline',
                        textTransform: 'capitalize',
                        fontWeight: '500',
                        fontFamily: 'Poppins',
                      }}
                    >
                      Learn More <EastIcon sx={{ fontSize: '14px', marginLeft: '8px' }} />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* View More / View Less Button */}
          <Box sx={{ padding: '40px 0px', margin: 'auto', display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#D7F200',
                borderRadius: '70px',
                color: '#000',
                boxShadow: 'none',
                fontSize: { sm: '16px', xs: '12px' },
                padding: { sm: '18px 35px', xs: '15px 28px' },
                fontWeight: '600',
                lineHeight: '19.5px',
                fontFamily: 'Montserrat',
              }}
              onClick={hasMoreBlogs ? handleViewMore : handleViewLess}
            >
              {hasMoreBlogs ? 'View More' : isShowingMoreThanInitial ? 'View Less' : ''}
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Blogs;
