import React, { useEffect, useState, useCallback } from 'react';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Toolbar,
  ListItemText,
  IconButton,
  Button,
  Badge,
} from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { theme } from "../../../src/themes";
import logo from '../../assets/images/logo.png';
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

// import NavbarHeader from "./NavbarHeader/NavbarHeader";
import NavbarLogoSection from './NavbarLogoSection/NavbarLogoSection';
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../../actions/product";
// import { getAllOrdersByUser } from "../../actions/order";
// import Navbar from '../navbar/Navbar';
import Logo from '../logo/Logo';
import Modal from '../donateform/DonateForm';
import '../Navigation/Navbar.css';
import DonateForm from '../donateformnew/DonateForm';

const drawerWidth = 240;
const navItems = [
  {
    name: 'Home',
    path: '#',
  },
  {
    name: 'About',
    path: 'about',
  },
  {
    name: 'Team',
    path: 'team',
  },
  // {
  //   name: 'News',
  //   path: '#',
  // },
  {
    name: 'Contact Us',
    path: 'contact',
  },

//   {
//     name: 'Login',
//     path: 'login',
//   },
];

function DrawerAppBar(props) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);
  //   const userId = (JSON.parse(localStorage.getItem("profile"))) ? (JSON.parse(localStorage.getItem("profile"))).data : null;
  //   const cartItems = useSelector((state) => state.cart.cart);

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     const getproductsData = async () => {
  //       dispatch(getAllProducts());
  //       dispatch(getAllOrdersByUser(userId));
  //     };
  //     getproductsData();
  //   }, [dispatch]);

  const navLinkStyles = ({ isActive }) => {
    return {
      mt: 3,
      height: '37px',
      //   border: "1px solid" + theme.palette.background.default,
      paddingLeft: '10px',
      paddingRight: '10px',
      alignItems: 'center',
      textDecoration: 'none',
      color: isActive ? theme.palette.primary.dark : theme.palette.text.dark,
      // backgroundColor: isActive ? theme.palette.secondary.main : theme.palette.background.main,
    };
  };

  const iconNavLinkStyles = ({ isActive }) => {
    return {
      height: '37px',
      //   border: "1px solid" + theme.palette.background.default,
      paddingLeft: '10px',
      paddingRight: '10px',
      alignItems: 'center',
      textDecoration: 'none',
    //   color: isActive ? theme.palette.primary.main : theme.palette.text.default,
      // backgroundColor: isActive
      //   ? theme.palette.secondary.main
      //   : theme.palette.background.main,
    };
  };

  const respNavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: 'none',
      color: isActive ? theme.palette.primary.main : theme.palette.text.main,
    };
  };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
      <Box
        sx={{
          mt: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="logo" height={40} style={{ marginLeft: '5px' }} />
        <Typography sx={{ pl: 1, fontWeight: 600, fontSize: '16px' }}>
          <span style={{ color: '#177C34' }}>G</span>lobal <span style={{ color: '#177C34' }}>E</span>ducation{' '}
          <span style={{ color: '#177C34' }}>T</span>rust
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <div key={index}>
            <NavLink to={`/${item.path}`} style={respNavLinkStyles}>
              <ListItem key={index}>
                <ListItemText>
                  <Typography variant="h6"
                //    sx={{ fontWeight: theme.typography.fontWeightMedium }}
                   >
                    {item.name}
                  </Typography>
                </ListItemText>
              </ListItem>
            </NavLink>
            <Divider
             sx={{ width: '100%', backgroundColor: theme.palette.text.dark }} 

             />
          </div>
        ))}
        <NavLink to={"/login"}>
        <button
          className="login-home-button"
          style={{ width: '80px', height: '40px', marginLeft: '10px'}}
        //   onClick={toggleModal}
        >
          Login
        </button>
        </NavLink>
        {/* <NavLink to={"/donate-now"}> */}
        <button
          className="login-home-button"
          style={{ width: '120px', height: '40px', marginLeft: '10px' }}
          onClick={toggleModal}
        >
          Donate Now
        </button>
        {/* </NavLink> */}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position="relative" elevation={0}>
          <Toolbar
            sx={{
              maxWidth: { xs: '100%' },
              width: '100%',
              m: 'auto',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: theme.palette.primary.main,
              height:'120px'
            }}
            disableGutters
          >
            <div className="logo">
              <Logo />
            </div>
            <Box
              sx={{
                mt: 2,
                display: { xs: 'flex', md: 'none' },
                flexDirection: 'row',
                aligntItems: 'center',
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { md: 'none' }, ml: { xs: 1, md: 0 } ,mb:5}}
              >
                <MenuIcon color="secondary" 
                sx={{ backgroundColor: theme.palette.primary.main }} 

                />
              </IconButton>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%',
                backgroundColor: theme.palette.primary.main,
                height: '35px',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  width: '100%',
                  maxWidth: '1200px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {navItems.map((item, index) => (
                  <NavLink key={index} to={`/${item.path}`} style={navLinkStyles}>
                    <Typography  sx={{ lineHeight: '37px', fontWeight: 400,fontSize:'18px',fontFamily:'Poppins' }}>
                      {item.name}
                    </Typography>
                  </NavLink>
                ))}
               
                <div className="login-home">
                  <ul>
                    <li>
                    <NavLink to={"/login"}>
                      <button className="login-home-button"
                        style={{ width: '75px', height: '40px',alignItems:'center',justifyContent:'center'}}
                       >
                        Login
                      </button>
                      </NavLink>
                    </li>
                    <li>
                    {/* <NavLink to={"/donate-now"}> */}
                      <button className="login-home-button"
                        style={{ width: '120px', height: '40px',alignItems:'center',justifyContent:'center',marginLeft:'20px'}}
                        onClick={toggleModal}
                       >
                        Donate Now
                      </button>
                      {/* </NavLink> */}
                    </li>
                  </ul>
                </div>
               
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                left: '240px',
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{}} />
      </Box>
      {/* {showModal && <Modal toggle={toggleModal} />} */}
      {showModal && <DonateForm  toggle={toggleModal} />}
    </>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;
