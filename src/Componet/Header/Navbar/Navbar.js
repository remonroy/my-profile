import React from 'react';
import logo from '../../Images/remon.png'
// import { Link } from "react-router-dom";
import { HashLink as Link} from 'react-router-hash-link';
const Navbar = () => {
    return (
        <section >
          <nav style={{backgroundColor:"#1a1f59d9"}} class="navbar navbar-expand-lg navbar-light fixed-top mb-5">
          <div class="container-fluid">
            <img style={{height:"70px"}} src={logo} class="navbar-brand img-fluid" alt="..."/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto  mb-2">
                <li class="nav-item ms-5">
                <Link smooth class="nav-link text-white" to="#home">Home</Link>
                </li>
                <li class="nav-item ms-5">
                <Link smooth class="nav-link text-white" to="#about">About</Link>
                </li>
                <li class="nav-item ms-5">
                <Link smooth class="nav-link text-white" to="#project">Project</Link>
                </li>
                <li class="nav-item ms-5">
                <Link smooth class="nav-link text-white" to="#blog">Blog</Link>
                </li>
                <li class="nav-item ms-5">
                <Link smooth class="nav-link text-white" to="#contact">Contact us</Link>
                </li>
                  
              </ul>
            </div>
          </div>
        </nav>
        </section>
    );
};

export default Navbar;