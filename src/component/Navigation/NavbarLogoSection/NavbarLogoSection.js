import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from "../../../assets/images/logo.png"


const NavbarLogoSection = () => {
  return (
    <>
    <Box sx={{display:'flex', flexDirection:{xs:'column', md:'row'}, alignItems:'center', mt:1}}>
    <Box sx={{display:'flex', flexDirection:'row', alignItems:'center', mr:{xs:0, md:5}}}>
            {/* <img src={logo} alt="" style={{height:'auto', width:'100%', maxHeight:'100px'}} /> */}
            {/* <img src={images.nav_logo} alt="" height={40} style={{marginLeft:'15px'}} /> */}
    </Box>
    <Box sx={{ml:{xs:0, md:5}, display:'flex', flexDirection:'row', alignItems:'center'}}>
        <img src={logo} alt="" 
            style={{
                height:'300px', width:'80%'
            }}
        />
        <Typography variant="h3" sx={{
            fontWeight:'500',
            textAlign:'center',
            width:"100%",
            backgroundColor:'pink',
            mb:1,
            mt:{xs:1, md:0},
            }}>
      <span style={{color: '#177C34'}} 
             >G</span>lobal   <span style={{color: '#177C34',}} >E</span>ducation   <span style={{color: '#177C34',}} >T</span>rust
        </Typography>
    </Box>
    </Box>
    </>
  )
}

export default NavbarLogoSection
