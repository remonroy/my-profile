import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
import styles  from'./Footer.module.css';
import AOS from 'aos';
import { FaStreetView} from 'react-icons/fa';
import { FaArrowLeft,FaGithub,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';

const Footer = () => {
    AOS.init();
    return (
        <div className={styles.footerBg}>
           <div className="container">
                <div className="row mt-5">
                    <div className="col- col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <div className={styles.footerLink}>
                            <h4>CATEGORIES</h4>
                            <ul>
                                <li><Link to='/home'>MERN-Stack Developer</Link></li> 
                            </ul>
                        </div>
                    </div> 
                    <div className="col- col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="footerLink">
                        <h4>My resume</h4>
                        <ul>
                        <li style={{listStyle:"none",}}><FaStreetView /> : <a style={{textDecoration:"none",color:'white'}} target="_blank" href="https://drive.google.com/file/d/1Ci40PjNc_PTn8ZPhGEe2xsaOomFJ0195/view?usp=sharing">Resume</a></li>
                            
                        </ul>
                    </div>
                    </div> 
                    <div className="col- col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div  className={styles.footerGmail}>
                        <h4>Personal Email</h4>
                        <p>&copy; remonroy34@gmail.com</p>
                    </div>
                    </div>
                    
                    <div className="d-flex justify-content-between">
                        <marquee className={styles.footerLocation} behavior="" direction="">
                            <ul>
                                <li>Thank you for visit my profile..!</li>
                            </ul>
                        </marquee>
                        <marquee className={styles.arrow} behavior="" direction="" scrollAmount="20">
                            <p><FaArrowLeft /></p>
                        </marquee>
                </div>
                </div>
               
           </div>
           
        </div>
    );
};

export default Footer;