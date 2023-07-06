import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-part1">
        <div className="footer1">
          <h1 className="headings-1">
            {/* <img src={logoimg} alt="logo" className='footer-logo' width={50} height={50} /> */}
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <span
                style={{
                  color: '#177C34',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
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
                  fontSize: '30px',
                  lineHeight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                lobal
              </span>
            </div> &nbsp;
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <span
                style={{
                  color: '#177C34',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '30px',
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
                  fontSize: '30px',
                  lineHeight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                ducation
              </span>
            </div>&nbsp; 
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <span
                style={{
                  color: '#177C34',
                  fontWeight: 600,
                  fontSize: '30px',
                  lineHeight: '33px',
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
                  fontSize: '30px',
                  lineHeight: '30px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                rust
              </span>
            </div>
          </h1>
          <p className="subheading-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </p>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div className="footer1">
          <h2 className="headings-2">COMPANY</h2>
          <p className="subheading-2">About Us</p>
          <p className="subheading-2">Legal Information</p>
          <p className="subheading-2">Contact Us</p>
          <p className="subheading-2">Blogs</p>
        </div>
        <div className="footer1">
          <h2 className="headings-2">HELP CENTER</h2>
          <p className="subheading-2">Privacy Policy</p>
          <p className="subheading-2">Donation Policy</p>
          <p className="subheading-2">Terms & Conditions</p>
          <p className="subheading-2">Disclaimer</p>
          {/* <p className="subheading-2">Rental Guides</p> */}
        </div>
        <div className="footer1">
          <h2 className="headings-2">CONTACT INFO</h2>
          <p className="subheading-3"><b>Phone:</b> +91 9540478632 </p>
          <p className="subheading-3"><b>Email:</b> secretary@globaleducationtrust.org</p>
          <p className="subheading-3"><b>Website:</b> www.globaleducationtrust.org</p>
          <p className="subheading-3"><b>Reg Office:</b> #K-60, GF, RHS, JUNGPURA EXT., NEW DELHI-110014</p>
          <div className="footer-part1">
            <img
              src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/60937a3acbbe702ec70dbacb_facebook.svg"
              alt="not-found"
            />
            <img
              src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/60937a3b1d32df751f44a51f_twitter.svg"
              alt="not-found"
            />
            <img
              src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/60937a3b116ed7082f2fd23b_linkedin.svg"
              alt="not-found"
            />
            <img
              src="https://uploads-ssl.webflow.com/5e53d34464688e6f5960a338/60937a3a6be20a432d6caac2_insta.svg"
              alt="not-found"
            />
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="subheading-4">© 2023 techastute | All rights reserved</div>
        <div className="subheading-4">Created with love by techastute</div>
      </div>
    </div>
  );
}

export default Footer;
