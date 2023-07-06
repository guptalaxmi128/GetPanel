import React from 'react';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import background from '../../../assets/background-img.png';
import './Home4.css';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#E7E7E7' : '#E7E7E7',
    fontSize: 14,
    //   width: '250px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
function Home4() {
  return (
    <div className="home4">
      <img src={background} alt="background" className="background-image" />
      <div className="home4-upper">
        <div className="home4-upper-left">
          <div className="text-overlay">
            <h2>Get In</h2>
            <h2>Touch With Us</h2>
          </div>
        </div>
      </div>
      <div className="home4-upper-right">
        <div className="first-part">
          <FormControl
            variant="standard"
            sx={{
              width: '250px',
              //   display:'grid'
            }}
          >
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
              Name
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type="text" />
          </FormControl>

          <FormControl
            variant="standard"
            sx={{
              marginLeft: '20px',
              //  display:'grid',
              width: '250px',
            }}
          >
            <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
              Email
            </InputLabel>
            <BootstrapInput id="bootstrap-input" type="email" />
          </FormControl>
        </div>

        <FormControl
          variant="standard"
          sx={{
            display: 'grid',
            width: '525px',
            marginTop: '10px',
          }}
        >
          <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
            Subject
          </InputLabel>
          <BootstrapInput id="bootstrap-input" type="text" />
        </FormControl>
        <FormControl
          variant="standard"
          sx={{
            display: 'grid',
            width: '525px',
            height: '150px',
            marginTop: '10px',
          }}
        >
          <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px', position: 'relative' }}>
            Message
          </InputLabel>
          <TextareaAutosize
            id="bootstrap-input"
            name="message"
            className="my-textarea"
            rowsMin={5}
            style={{
              resize: 'none',
              border: '1px solid #dcdcdc',
              padding: '8px',
              width: '525px',
              backgroundColor: '#E7E7E7',
              transition: 'border-color 0.2s ease-in-out',
            }}
            sx={{
              '&.my-textarea:focus': {
                borderColor: 'blue',
              },
            }}
          />
        </FormControl>
        <button className="home4-btn">Submit</button>
      </div>
    </div>
  );
}

export default Home4;
