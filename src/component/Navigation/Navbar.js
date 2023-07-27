// import React from 'react';
// import {
//   AppBar,
//   Box,
//   Divider,
//   Drawer,
//   Typography,
//   List,
//   ListItem,
//   Toolbar,
//   ListItemText,
//   IconButton,

// } from '@mui/material';

// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import { theme } from "../../../src/themes";
// import logo from '../../assets/images/logo.png';

// import Logo from '../logo/Logo';
// import '../Navigation/Navbar.css';

// const drawerWidth = 240;
// const navItems = [
//   {
//     name: 'Home',
//     path: '#',
//   },
//   {
//     name: 'About',
//     path: 'about',
//   },
//   {
//     name: 'Team',
//     path: 'team',
//   },
//   {
//     name: 'Contact Us',
//     path: 'contact',
//   },

// ];

// function DrawerAppBar(props) {

//   const navLinkStyles = ({ isActive }) => {
//     return {
//       mt: 3,
//       height: '37px',
//       paddingLeft: '10px',
//       paddingRight: '10px',
//       alignItems: 'center',
//       textDecoration: 'none',
//       color: isActive ? theme.palette.primary.dark : theme.palette.text.dark,
//     };
//   };

//   const respNavLinkStyles = ({ isActive }) => {
//     return {
//       textDecoration: 'none',
//       color: isActive ? theme.palette.primary.main : theme.palette.text.main,
//     };
//   };

//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'start' }}>
//       <Box
//         sx={{
//           mt: 1,
//           display: 'flex',
//           flexDirection: 'row',
//           alignItems: 'center',
//         }}
//       >
//         <img src={logo} alt="logo" height={40} style={{ marginLeft: '5px' }} />
//         <Typography sx={{ pl: 1, fontWeight: 600, fontSize: '16px' }}>
//           <span style={{ color: '#177C34' }}>G</span>lobal <span style={{ color: '#177C34' }}>E</span>ducation{' '}
//           <span style={{ color: '#177C34' }}>T</span>rust
//         </Typography>
//       </Box>
//       <Divider />
//       <List>
//         {navItems.map((item, index) => (
//           <div key={index}>
//             <NavLink to={`/${item.path}`} style={respNavLinkStyles}>
//               <ListItem key={index}>
//                 <ListItemText>
//                   <Typography variant="h6"
//                    >
//                     {item.name}
//                   </Typography>
//                 </ListItemText>
//               </ListItem>
//             </NavLink>
//             <Divider
//              sx={{ width: '100%', backgroundColor: theme.palette.text.dark }}

//              />
//           </div>
//         ))}
//         <NavLink to={"/login"}>
//         <button
//           className="login-home-button"
//           style={{ width: '80px', height: '40px', marginLeft: '10px'}}
//         >
//           Login
//         </button>
//         </NavLink>
//         <NavLink to={"/donate-now"}>
//         <button
//           className="login-home-button"
//           style={{ width: '120px', height: '40px', marginLeft: '10px' }}
//         >
//           Donate Now
//         </button>
//         </NavLink>
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <>
//       <Box sx={{ display: 'flex' }}>
//         <AppBar position="relative" elevation={0}>
//           <Toolbar
//             sx={{
//               maxWidth: { xs: '100%' },
//               width: '100%',
//               m: 'auto',
//               display: 'flex',
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               backgroundColor: theme.palette.primary.main,
//               height:'120px'
//             }}
//             disableGutters
//           >
//             <div className="logo">
//               <Logo />
//             </div>
//             <Box
//               sx={{
//                 mt: 2,
//                 display: { xs: 'flex', md: 'none' },
//                 flexDirection: 'row',
//                 aligntItems: 'center',
//                 width: '100%',
//                 justifyContent: 'flex-end',
//               }}
//             >
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 edge="start"
//                 onClick={handleDrawerToggle}
//                 sx={{ display: { md: 'none' }, ml: { xs: 1, md: 0 } ,mb:5}}
//               >
//                 <MenuIcon color="secondary"
//                 sx={{ backgroundColor: theme.palette.primary.main }}

//                 />
//               </IconButton>
//             </Box>
//             <Box
//               sx={{
//                 mt: 2,
//                 display: {
//                   xs: 'none',
//                   md: 'flex',
//                 },
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 width: '100%',
//                 backgroundColor: theme.palette.primary.main,
//                 height: '35px',
//                 justifyContent: 'center',
//               }}
//             >
//               <Box
//                 sx={{
//                   display: { xs: 'none', md: 'flex' },
//                   width: '100%',
//                   maxWidth: '100%',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {navItems.map((item, index) => (
//                   <NavLink key={index} to={`/${item.path}`} style={navLinkStyles}>
//                     <Typography  sx={{ lineHeight: '37px', fontWeight: 400,fontSize:'18px',fontFamily:'Poppins' }}>
//                       {item.name}
//                     </Typography>
//                   </NavLink>
//                 ))}

//                 <div className="login-home">
//                   <ul>
//                     <li>
//                     <NavLink to={"/login"}>
//                       <button className="login-home-button"
//                         style={{ width: '75px', height: '40px',alignItems:'center',justifyContent:'center'}}
//                        >
//                         Login
//                       </button>
//                       </NavLink>
//                     </li>
//                     <li>
//                     <NavLink to={"/donate-now"}>
//                       <button className="login-home-button"
//                         style={{ width: '120px', height: '40px',alignItems:'center',justifyContent:'center',marginLeft:'20px'}}
//                        >
//                         Donate Now
//                       </button>
//                       </NavLink>
//                     </li>
//                   </ul>
//                 </div>

//               </Box>
//             </Box>
//           </Toolbar>
//         </AppBar>
//         <Box component="nav">
//           <Drawer
//             container={container}
//             variant="temporary"
//             open={mobileOpen}
//             onClose={handleDrawerToggle}
//             ModalProps={{
//               keepMounted: true, // Better open performance on mobile.
//             }}
//             sx={{
//               display: { xs: 'block', md: 'none' },
//               '& .MuiDrawer-paper': {
//                 boxSizing: 'border-box',
//                 width: drawerWidth,
//                 // left: '240px',
//               },
//             }}
//           >
//             {drawer}
//           </Drawer>
//         </Box>
//         <Box component="main" sx={{}} />
//       </Box>
//     </>
//   );
// }

// export default DrawerAppBar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../src/assets/images/logo.png";
import "./Navbar1.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-responsive-nav">
          <div className="container">
            <div className="startp-responsive-menu">
              <div className="logo black-logo">
                <a href="/">
                  <img src={logo} alt="logo" width="95px" height="75px" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand black-logo" href="/">
                <img src={logo} alt="logo" width={100} height={50} />
              </a>

              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav nav ml-auto">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link">
                      Home
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link ">
                      About
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/team" className="nav-link">
                      Team
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-link">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <NavLink
                  to={"/login"}
                  className="login-home-button"
                  style={{
                    width: "75px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  Login
                </NavLink>
              </div>

              <div className="others-option">
                <NavLink
                  to={"/donate-now"}
                  className="login-home-button"
                  style={{
                    width: "130px",
                    height: "40px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "10px",
                    textDecoration: "none",
                  }}
                >
                  Donate / Fee
                </NavLink>
              </div>
            </nav>
          </div>
        </div>

        <div className="others-option-for-responsive">
          <div
            className="container"
           
          >
            <div className="dot-menu">
              <div className="inner" onClick={() => setMenu(!menu)} >
                <MenuIcon />
              </div>
            </div>

            {menu && (
              <>
                <div
                  className="navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                  // style={{ background: "#fff" }}
                >
                  <ul className="navbar-nav nav ml-auto">
                    <li className="nav-item">
                      <NavLink exact to="/" className="nav-link">
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/about" className="nav-link ">
                        About{" "}
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/team" className="nav-link">
                        Team
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/contact" className="nav-link">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="others-option" 
                // style={{ background: "#fff" }}
                >
                  <NavLink
                    to={"/login"}
                    className="login-home-button"
                    style={{
                      width: "130px",
                      height: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Login
                  </NavLink>
                </div>

                <div className="others-option" 
                style={{  paddingBottom:"20px",
                      backgroundColor:"#fff"}}
                >
                  <NavLink
                    to={"/donate-now"}
                    className="login-home-button"
                    style={{
                      width: "130px",
                      height: "40px",
                      alignItems: "center",
                      justifyContent: "center",
                    
                    }}
                  >
                    Donate / Fee
                  </NavLink>
                </div>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
