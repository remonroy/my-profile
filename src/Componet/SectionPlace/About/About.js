import React from 'react';
import './About.css'
import study from '../../Images/study-man.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStreetView} from 'react-icons/fa';
const About = () => {
    AOS.init();
    return (
        <section id="about" className="row  ms-auto mt-5 w-75 m-auto mb-5 ">
            <h1 className="font mb-5">About section</h1>
            
            <div data-aos="fade-right" className="col-md-4 rightSite">
                <img src={study} alt="" className="img-fluid"/>
                <p><marquee className="marque" behavior="" direction="">Design and Development skill</marquee></p>
            </div>
            <div data-aos="zoom-in" className="col-md-8  expricence">
                <div className="bordering">
                    <ul>
                        <li className="sckill">
                            <h5>Design Sckill</h5>
                            <ul className="ul">
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap</li>
                                <li>JavaScript (ES6)</li>
                                <li>Jquery</li>
                            </ul>
                        </li>
                    
                    </ul>
                </div>
                <div className="bordering">
                    <ul>
                        <li className="sckill">
                            <h5>My Baiodata</h5>
                            <ul  className="ul">
                                <li style={{listStyle:"none"}}><FaStreetView />:<a style={{textDecoration:"none"}} target="_blank" href="https://drive.google.com/file/d/1Ci40PjNc_PTn8ZPhGEe2xsaOomFJ0195/view?usp=sharing">Resumi</a></li>
                                <li  style={{listStyle:"none"}}><FaStreetView />:<a style={{textDecoration:"none"}} target="_blank" href="https://drive.google.com/file/d/11acgh735c8TyjuQDshEV_zeqxb2h3RoL/view?usp=sharing">Cover letter</a></li>
                            </ul>
                        </li>
                    
                    </ul>
                </div>
                <div  className="borderingBotton">
                    <div data-aos="zoom-in" className="kd">
                        <ul>
                            <li className="lp">
                                <h5>Backend Sckill</h5>
                                <ul className="ll">
                                    <li>React JS</li>
                                    <li>Node js</li>
                                    <li>React Router</li>
                                    <li>MongoDB</li>
                                    <li>Material UI</li>
                                    <li>Express js</li>
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                    <div data-aos="zoom-in" className="bl">
                        <ul>
                            <li className="lp">
                                <h5>Software Sckill</h5>
                                <ul className="ll">
                                    <li>Adobe photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                    <div data-aos="zoom-in" className="gl">
                        <ul>
                            <li className="lp"> 
                            <h5>Diploy Sckill</h5>
                                <ul className="ll">
                                    <li> Firebase</li>
                                    <li> Ntlify</li>
                                    <li>Heroku</li>
                                    <li>Github</li>
                                    
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default About;