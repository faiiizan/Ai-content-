'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import logo from '../../app/Assets/Imges/logo.svg'
import Image from 'next/image';
const drawerWidth = 240;
const navItems = ['User Caeses', 'Pricing', 'FAQ','Blog','Support','Log In','Sign Up'];
import '../../components/layout/Header.module.css'
import Link from 'next/link';
export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    // Client-side logic here
    setIsClient(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src={logo} alt='logo'/>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // If we're not on the client, return null to avoid hydration errors
  if (!isClient) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex',alignItems:"center" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"transparent",boxShadow:"none",paddingBottom:"40px",textAlign:"center",position:"static"}}>
        <Container maxWidth='lg'>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } , color:"#000"}}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex',justifyContent:"flex=start",alignItems:"center" } ,width:"97px",height:"81px"}}
            >
              <Image src={logo} alt='logo' style={{width:"197px",height:"81px"}}/>
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex',justifyTracks:"space-between",alignItems:"center",sm:"none" },color:"#000",paddingTop:"12px" }}>
              <Link href='' style={{color:"#000",padding:"0px 15px",fontFamily:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px"}}>User Caeses</Link>
              <Link href='' style={{color:"#000",padding:"0px 15px",fontFamily:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px"}}>Pricing</Link>
              <Link href='' style={{color:"#000",padding:"0px 15px",fontFamily:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px"}}>FAQ</Link>
              <Link href='' style={{color:"#000",padding:"0px 15px",fontFamily:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px"}}>Blog</Link>
              <Link href='' style={{color:"#000",padding:"0px 20px",fontFamily:"Montserrat",fontWeight:"400",fontSize:"16px",lineHeight:"19.5px"}}>Support</Link>
              <Link href='#faq' style={{color:"#000",padding:"8px 20px",fontFamily:"Montserrat",fontWeight:"600",fontSize:"16px",border:"1px solid #000",borderRadius:"100px",marginRight:"15px",lineHeight:"19.5px"}}>Log In</Link>
              <Link href='' style={{color:"#000",padding:"10px 20px",fontFamily:"Montserrat",fontWeight:"600",fontSize:"16px",borderRadius:"100px",backgroundColor:"#D7F200",lineHeight:"19.5px"}}>Sign Up</Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better performance on mobile
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}
