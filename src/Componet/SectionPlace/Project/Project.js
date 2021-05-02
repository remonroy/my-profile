import React from 'react';
import './Project.css'
import projectOne from '../../Images/project1.jpg';
import projectTwo from '../../Images/project2.jpg';
import projectThree from '../../Images/project3.jpg';
import { Carousel } from 'react-bootstrap';
import { useState } from 'react';
import { FaGithub,FaStreetView} from 'react-icons/fa';
import freshOne from '../../Images/fresh1.jpg';
import freshTwo from '../../Images/fresh2.jpg';
import freshFour from '../../Images/fresh4.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Project = () => {
    AOS.init();
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <section id="project" className="row w-75 m-auto project">
            <h1 className="text-center bangla">My project</h1>
            <div className="col-md-6 ">
            <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={projectOne}
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={projectTwo}
                alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={projectThree}
                alt="Third slide"
                />

            
            </Carousel.Item>
            </Carousel>
            </div>
            <div className="col-md-6">
                <ul>
                    <li><h1 data-aos="fade-left">Project One</h1></li>
                </ul>
                <h5>Food store Project</h5>
                <small>It is an food website, which serves some services like many kinds of food services and provide food ,  etc. All the facilities of this website are listed here:</small>
                <ul>
                    <li>Admin can see all order lists of the users and change the order's status by drop down menu.</li>
                    <li>Admin can add more services</li>
                    <li>Admin can make a person 'Admin' by providing those person's email.</li>
                    <li>User can see his all orders and order's status.</li>
                    <li>User can submit a review about a service, which are shown in the homepage randomly.</li>
                </ul>
                <ul className="iconsLinks">
                    <li><a target="_blank" href="https://github.com/remonroy/food-store-project"><FaGithub /></a></li>
                    <li><a target="_blank" href="https://foodstore-project-7555c.web.app/"><FaStreetView /></a></li>
                    
                </ul>
            </div>
            <div className="row">
                <div className="col-md-6">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={freshOne}
                    alt="First slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={freshTwo}
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={freshFour}
                    alt="Third slide"
                    />

                
                </Carousel.Item>
                </Carousel>
                </div>
                <div className="col-md-6">
                    <ul>
                        <li><h1 data-aos="fade-left">Project Two</h1></li>
                    </ul>
                    <h5>Fresh Valley</h5>
                    <small>It is an food website, which serves some services like many kinds of food services and provide food ,  etc. All the facilities of this website are listed here:</small>
                    <ul>
                        <li>User purchases This product</li>
                        <li>User can add more product</li>
                        <li>Google login info added </li>
                        <li>User can see his all orders .</li>
                        <li>User can submit a review about a service, which are shown in the homepage randomly.</li>
                    </ul>
                    <ul className="iconsLinks">
                        <li><a target="_blank" href="https://github.com/remonroy/fresh-valley-project"><FaGithub /></a></li>
                        <li><a target="_blank" href="https://fresh-valley-a1f4d.web.app/"><FaStreetView /></a></li>
                    
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Project;