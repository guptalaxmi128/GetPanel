import React from 'react';
import aboutus from "../../assets/images/aboutus.png";
import header from "../../assets/images/header.png";
import volunteer from "../../assets/images/volunteer.jpg";
import coins from "../../assets/images/coins.jpg";
import event from "../../assets/images/event.jpg";
import "../Navigation/Navbar.css";


function Home() {
  return (<>
    <section className="wpo-hero-section-2">
    <div className="container-fluid">
        <div 
        className="row "
    //    className= "align-items-center"
    
        >
            <div className="col-xs-6 col-lg-6">
                <div className="wpo-hero-section-text">
                    <div className="wpo-hero-title">
                        <h2>Giving <span>Education</span> is The Best Gift Ever</h2>
                    </div>
                    <div className="wpo-hero-subtitle">
                        <p>We help local nonprofits access the funding, training, and support they
                            need to become more.</p>
                    </div>
                    <div className="btns"><a className="theme-btn-s2" href="#">Get Started</a></div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right-vec">
                    <div className="right-items-wrap">
                        <div className="right-item">
                            <div className="r-img"><img alt="" 
                            src={header} /></div>
                            <div className="sp-1"><img alt=""
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp1.b21efd9c.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp1.b21efd9c.png&amp;w=256&amp;q=75 2x"
                                    src="_next/imagecff1?url=%2F_next%2Fstatic%2Fmedia%2Fsp1.b21efd9c.png&amp;w=256&amp;q=75"
                                    width="69" height="67" decoding="async" data-nimg="1" loading="lazy"
                                    // style="color:transparent"
                                     /></div>
                            <div className="sp-2"><img alt=""
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp2.869312cc.png&amp;w=96&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp2.869312cc.png&amp;w=256&amp;q=75 2x"
                                    src="_next/image286b?url=%2F_next%2Fstatic%2Fmedia%2Fsp2.869312cc.png&amp;w=256&amp;q=75"
                                    width="83" height="92" decoding="async" data-nimg="1" loading="lazy"
                                    // style="color:transparent"
                                     /></div>
                            <div className="sp-3"><img alt=""
                                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp3.d20620e2.png&amp;w=64&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsp3.d20620e2.png&amp;w=128&amp;q=75 2x"
                                    src="_next/image087e?url=%2F_next%2Fstatic%2Fmedia%2Fsp3.d20620e2.png&amp;w=128&amp;q=75"
                                    width="60" height="73" decoding="async" data-nimg="1" loading="lazy"
                                    // style="color:transparent"
                                     /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<br/><br/>

<section className="wpo-about-section-s2 section-padding">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-wrap">
                    <div className="wpo-about-img"><img alt="" src={aboutus} />
                        <div className="wpo-total-raised">
                            <div className="wpo-total-raised-wrap">
                                <div className="wpo-total-raised-icon"><i
                                        className="fi flaticon-wallet-filled-money-tool"></i></div>
                                <div className="wpo-total-raised-text">
                                    <ul>
                                        <li>Total Raised<span>₹25000</span></li>
                                    </ul>
                                    <div className="progress-section">
                                        <div className="process">
                                            <div className="progress">
                                                <div className="progress-bar">
                                                    <div className="progress-value"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="round-ball-1"></div>
                        <div className="round-ball-2"></div>
                        <div className="round-ball-3"></div>
                        <div className="round-ball-4"></div>
                    </div>
                </div>
            </div>
            <br/>
            <div className="col-lg-6 col-md-12 col-12">
                <div className="wpo-about-text"><span>About Us</span>
                    <h2>Global Education Trust</h2>
                    <p style={{textAlign:'justify'}}>The “Global Education Trust (GET)” is a non-profit trust registered under the Indian Trusts Act 1882 vide Registration No. 1517/2022. The trust is registered with the NITI AAYOG vide Unique Id. DL/2022/0308060 and has been registered under Section 12A & 80G of the Income Tax Act. The trust is planning to establish educational institutions in various states, including the state of Jharkhand and Uttrakhand

                        This is a movement dedicated to cementing a better future for all. Founded in 2021, we have fought for impactful policy changes on the local, national and global levels. We strive to hold our leaders accountable, and to educate and empower others to take action. We work to ensure that our voices are heard for generations to come..</p>
                   
                    <a className="theme-btn-s2" href="/about">Read More</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="wpo-fun-fact-section">
    <div className="container">
        <div className="row">
            <div className="col col-xs-12">
                <div className="wpo-fun-fact-grids clearfix">
                    <div className="grid">
                        <div className="info">
                            <h3>250+</h3>
                            <p>Donors</p>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="info">
                            <h3>1026+</h3>
                            <p>Happy Students</p>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="info">
                            <h3>250k</h3>
                            <p>Total Donation</p>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="info">
                            <h3>1250</h3>
                            <p>Successful Campains</p>
                        </div>
                    </div>
                    <div className="shape"><img alt=""
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-shape.4238f29a.png&amp;w=1920&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcta-shape.4238f29a.png&amp;w=3840&amp;q=75 2x"
                            src="_next/image8310?url=%2F_next%2Fstatic%2Fmedia%2Fcta-shape.4238f29a.png&amp;w=3840&amp;q=75"
                            width="1795" height="600" decoding="async" data-nimg="1" loading="lazy"
                            // style="color:transparent"
                             /></div>
                </div>
            </div>
        </div>
    </div>
</section>

<div className="wpo-event-area undefined">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-6">
                <br/>
                <br/>
                <div className="wpo-section-title"><span>Our Works</span>
                    <h2>What we do</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                        suffered alteration in some form,</p>
                </div>
            </div>
        </div>
        <div className="wpo-event-wrap">
            <div className="row">
                <div className="col col-lg-4 col-md-6 col-12">
                    <div className="wpo-event-single">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img"><img alt="" src={volunteer} /></div>
                            <div className="wpo-event-content">
                                <div className="wpo-event-text-top"><span></span>
                                    <h2><a href="#">VOLUNTEERING</a></h2>
                                    <p style={{textAlign:'justify'}}>Our work is never done, and we can use all the help we can get. One of the ways you can take part is by Volunteering. Spread the word about all that www.globaleducationtrust.org is doing, and help us gain the support we need.<br /><br/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-12">
                    <div className="wpo-event-single">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img"><img alt=""
                                src={coins} /></div>
                            <div className="wpo-event-content">
                                <div className="wpo-event-text-top">
                                    <h2><a href="#">PLANNING A FUNDRAISER</a></h2>
                                    <p style={{textAlign:'justify'}}>Active participation is an essential part of our movement’s success. Planning a Fundraiser is a great way to connect with your local community and spread the importance of our mission. With several different campaigns, it is easy to find something that personally inspires you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-4 col-md-6 col-12">
                    <div className="wpo-event-single">
                        <div className="wpo-event-item">
                            <div className="wpo-event-img"><img alt="" src={event} /></div>
                            <div className="wpo-event-content">
                                <div className="wpo-event-text-top">
                                    <h2>ORGANIZING AN EVENT</h2>
                                    <p style={{textAlign:'justify'}}>Every individual has the ability to motivate others and inspire true change. By Organizing an Event, you become a crucial part of our movement by making sure that our mission is heard and has a far-reaching, lasting impact <br/><br/><br/></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
     </>
  );
}

export default Home;
