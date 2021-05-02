import React from 'react';
import remon from '../../Images/rogdhong.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeaderMain.css';
import Typical from 'react-typical';
import { FaGithub,FaLinkedin,FaFacebook,FaInstagram } from 'react-icons/fa';
const HeaderMain = () => {
    AOS.init();
    return (
        <section id="home" className="row ">
            <div data-aos="fade-right" className="col-md-6 text-white hehhhh"> 
                <div className="style"  style={{width:"400px",margin:"auto"}}>
                    <h1>Hi,I am</h1>
                    <h2>Remon roy</h2>
                    <p style={{fontSize:"20px"}}>
                        I,am 
                        <Typical
                            steps={[' Front End Developer', 500, ' React Develor', 500,, ' Programmer', 500]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </p>
                    <p className="jsuti">I am an enthusiastic JavaScript developer with knowing some framework for the frontend and the backend. I know Basic PHP and MySQL but basically a MERN developer.</p>
                </div>
            </div>
            <div data-aos="fade-left" className="col-md-6 text-center text-white hdhdhd ms-0 icon">
                <img style={{height:"200px",width:"200px",borderRadius:"50%"}} src={remon} alt="" className="img-fluid"/>
                <ul style={{listStyle:"none"}}>
                    <li><a target="_blank" href="https://github.com/remonroy"><FaGithub /></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/remon-roy/"><FaLinkedin /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/remonroy134/"><FaFacebook /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/knowledgefriendkf/"><FaInstagram /></a></li>
                </ul>
            </div>
        </section>
    );
    
};

export default HeaderMain;