import React from 'react';
import Navbar from '../Navigation/Navbar';
import Footer from '../home/footer/Footer';

const Contact = () => {
  return (
    <>
    <Navbar />
        <section className="wpo-contact-pg-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-10 offset-lg-1">
                            <div className="office-info">
                                <div 
                                className="row"
                                >
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon"><i className="fi flaticon-placeholder"></i></div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Location</h2>
                                                <p>K-60, GF, RHS, JUNGPURA EXT.,
                                                    NEW DELHI-110014</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon"><i className="fi flaticon-email"></i></div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Email Us</h2>
                                                <p >secretary@globaleducation
                                                trust.org</p>
                                                   
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                        <div className="office-info-item">
                                            <div className="office-info-icon">
                                                <div className="icon"><i className="fi flaticon-phone-call"></i></div>
                                            </div>
                                            <div className="office-info-text">
                                                <h2>Call Now</h2>
                                                <p>+91 9355541415</p>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wpo-contact-title">
                                <h2>Have Any Question?</h2>
                               
                            </div>
                            <div className="wpo-contact-form-area">
                                <form className="contact-validation-active">
                                    <div className="row">
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field"><input type="text" name="name"
                                                    placeholder="Your Name" value="" /></div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field"><input type="email" name="email"
                                                    placeholder="Your Email" value="" /></div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field"><input type="number" name="phone"
                                                    placeholder="Your phone" value="" /></div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field"><input type="phone" name="phone"
                                                    placeholder="Subject" value="" /></div>
                                        </div>
                                        
                                        <div className="col col-lg-12 col-12"><textarea type="text" name="message"
                                                placeholder="Message"></textarea></div>
                                    </div>
                                    <div className="submit-area"><button type="submit" className="theme-btn"> Submit
                                            Now</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
             <br/>
                <br/><br/><br/><br /><br /><br /><br /><br />
            </section>
            <Footer />
    </>
  );
}



export default Contact;