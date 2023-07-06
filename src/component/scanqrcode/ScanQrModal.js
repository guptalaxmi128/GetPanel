import React from 'react';
import logo from '../../assets/images/logo.png';
import qrImage from "../../assets/qr-image.jpg";

import './ScanQrModal.css';

function ScanQrModal(props) {
  return (
    <div className="overlay1">
      <div className="modal1">
        <div className="form-content1">
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
          <button className="close-btn1" onClick={props.toggle}>
            X
          </button>
        </div>
        
        <div className="form-container1">
        <div
        className="scan-heading"
      
        >
          Scan This QR Code
        </div>
            <img src={qrImage} alt="qrImage" className='qr-image' />
            <div className="scan-heading1">for any query contact support</div>
        </div>
      </div>
    </div>
  );
}

export default ScanQrModal;
