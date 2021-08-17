import React from 'react';
import './About.css';
import study from '../../Images/study-man.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStreetView} from 'react-icons/fa';
const About = () => {
    AOS.init();
    return (
        <section id="about" className="row  ms-auto mt-5 w-75 m-auto mb-5 ">
            <h1 data-aos="fade-right" className="font mb-5">About section</h1>
            
            <div data-aos="zoom-in" className="col-md-4 rightSite">
                <img src={study} alt="" className="img-fluid"/>
                <p><marquee className="marque" behavior="" direction="">Design and Development skill</marquee></p>
            </div>
            <div data-aos="zoom-in" className="col-md-8  expricence">
                <div className="bordering">
                    <ul>
                        <li className="sckill">
                            <h5>Expertise</h5>
                            <ul className="ul">
                                <li>React js</li>
                                <li>React Router</li>
                                <li>React Bootstrap</li>
                                <li>Material UI</li>
                                <li>HTML</li>
                                <li>CSS3</li>
                                <li>Bootstrap4</li>
                                <li>JavaScript (ES6)</li>
                                <li>Swiper js</li>
                            </ul>
                        </li>
                    
                    </ul>
                </div>
                <div  className="borderingBotton">
                    <div className="kd">
                        <ul>
                            <li className="lp">
                                <h5>Comfortable</h5>
                                <ul className="ll">
                                    <li>Node js</li>
                                    <li>Express js</li>
                                    <li>Mongoose</li>
                                    <li>Redux</li>
                                    <li>MongoDB</li>
                                    <li>Rest api</li>
                                    <li>Passport</li>
                                    <li>Firebase</li>
                                    <li>Rest api</li>
                                    <li>Json web token</li>
                                </ul>
                            </li>
                        
                        </ul>
                    </div>
                    <div className="gl">
                        <ul>
                            <li className="lp"> 
                                <h5>Tools</h5>
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