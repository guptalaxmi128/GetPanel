import React, { useState ,useCallback } from 'react';
// import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Typography } from '@mui/material';
import logo from '../../assets/images/logo.png';


import './DonateForm.css';
import ScanQrModal from '../scanqrcode/ScanQrModal';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#fff',
    border: '1px solid #dcdcdc',
    fontSize: 14,
    width: '450px',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));
function Modal(props) {

  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');

  const [showQrModal,setShowQrModal]=useState(false);

  const scanQrModal = useCallback(() => {
    setShowQrModal(!showQrModal);
  }, [showQrModal]);

//   function handleSubmit(event) {
//     event.preventDefault();

//     axios.post('https://global-education-trust.onrender.com/api/donar/registerDonar', {
//       name,
//       contactNumber,
//       email,
//       amount
//     })
//     .then(response => {
//       console.log(response);
//    alert("Donar added successfully!")
//    setName('');
//    setContactNumber('');
//    setEmail('');
//    setAmount('');
//     })
//     setShowQrModal(true)
//     .catch(error => {
//       console.log(error);
//     });
//   }

  return (
    <>
    <div className="overlay">
      <div className="modal">
        <div className="form-content">
          <img src={logo} alt="logo" />
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <span
              style={{
                color: '#177C34',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              G
            </span>
            <span
              style={{
                color: '#000',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              lobal
            </span>
          </div>{' '}
          &nbsp;&nbsp;&nbsp;
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <span
              style={{
                color: '#177C34',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              E
            </span>
            <span
              style={{
                color: '#000',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              ducation
            </span>
          </div>{' '}
          &nbsp;&nbsp;&nbsp;
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <span
              style={{
                color: '#177C34',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              T
            </span>
            <span
              style={{
                color: '#000',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '45px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              rust
            </span>
          </div>
          <button  className='close-btn' onClick={props.toggle}>X</button>
        </div>
        <div className="form-container">
          <Typography
            sx={{
              width: '263px',
              height: '45px',
              fontSize: '30px',
              fontWeight: 500,
              color: '#000',
              marginLeft: '30px',
              marginTop: '10px',
            }}
          >
            Enter Your Details
          </Typography>
          <div>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '30px',
                marginTop: '10px',
              }}
            >
              <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
                Name
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Your Full Name"
                id="bootstrap-input"
                type="text"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '30px',
                marginTop: '10px',
              }}
            >
              <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
                Mobile Number
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Your Mobile Number"
                id="bootstrap-input"
                type="number"
                value={contactNumber}
                onChange={(e)=>setContactNumber(e.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '30px',
                marginTop: '10px',
              }}
            >
              <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
                Email
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Your Email Address"
                id="bootstrap-input"
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </FormControl>
          </div>
          <div>
            <FormControl
              variant="standard"
              sx={{
                marginLeft: '30px',
                marginTop: '10px',
              }}
            >
              <InputLabel shrink htmlFor="bootstrap-input" sx={{ color: '#000', fontSize: '18px' }}>
                Donation Amount
              </InputLabel>
              <BootstrapInput
                placeholder="Enter Amount you would like to donate"
                id="bootstrap-input"
                type="number"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </FormControl>
          </div>
          <button className="donation-button" 
        //   onClick={handleSubmit}
          >Submit</button>
        </div>
      </div>
    </div>
    {showQrModal && <ScanQrModal toggle={scanQrModal} />}
    </>
  );
}

export default Modal;
