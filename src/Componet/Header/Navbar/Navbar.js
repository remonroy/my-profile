import React,{useState} from 'react';
import logo from '../../Images/remon.png'
import { HashLink as Link} from 'react-router-hash-link';

const styles={
  backgroundColor:'#1a1f59d9'
}
const styles2={
  backgroundColor:'transparent'
}
const Navbar = () => {

  const [scroll,setScroll]=useState(false)

  const changeBackground=()=>{
      if(window.scrollY >=267){
          setScroll(true)
      }else{
          setScroll(false)
      };
  }

  window.addEventListener('scroll',changeBackground)
  // backgroundColor:"#1a1f59d9"
 
    return (
        <section>
          <nav style={scroll ? styles : styles2} class="navbar navbar-expand-lg navbar-light fixed-top mb-5">
          <div class="container-fluid">
            <img style={{height:"70px"}} src={logo} class="navbar-brand img-fluid" alt="..."/>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto  mb-2">
                <li class="nav-item ms-3">
                <Link smooth class="nav-link text-white" to="#home">Home</Link>
                </li>
                <li class="nav-item ms-3">
                <Link smooth class="nav-link text-white" to="#about">About</Link>
                </li>
                <li class="nav-item ms-3">
                <Link smooth class="nav-link text-white" to="#project">Project</Link>
                </li>
                <li class="nav-item ms-3">
                <Link smooth class="nav-link text-white" to="#blog">Blog</Link>
                </li>
                <li class="nav-item ms-3">
                <Link smooth class="nav-link text-white" to="#contact">Contact us</Link>
                </li>
                <li class="nav-item ms-3">
                  <a target="_blank" href="https://drive.google.com/file/d/1Ci40PjNc_PTn8ZPhGEe2xsaOomFJ0195/view">
                      <button  className="btn btn-outline-success">Resume</button>
                  </a>
                </li>
                
                  
              </ul>
            </div>
          </div>
        </nav>
        </section>
    );
};

export default Navbar;