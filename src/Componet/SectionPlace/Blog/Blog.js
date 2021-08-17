import React from 'react';
import img from'../../Images/study-man.png';
import laptop from'../../Images/laptop.jpg';
import code from'../../Images/code.jpg';
import './Blog.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Blog = () => {
    AOS.init();
    return (
        <section id="blog" className="row w-75 m-auto mt-5 mb-5">
            <h1 className="blog mb-5">My blog</h1>
            <div data-aos="zoom-in" className="col-md-4">
                <div class="card">
                    <img style={{height:"200px"}} src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">10 JavaScript Interview Questions</h5>
                        <a target="_blank" href="https://remonroy34.medium.com/javascript-interview-question-11d2650c71dd" class="card-text">Hello, I am Remon. I am here to share some common JavaScript interview questions. So, let’s start.</a>
                        
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="col-md-4">
                <div class="card">
                    <img style={{height:"200px"}} src={laptop} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Node Interview Questions</h5>
                        <a target="_blank" href="https://remonroy34.medium.com/javascript-demo-arry-bfa5daf46129"class="card-text">Sometimes, we can get ‘null’ or ‘undefined’ after printing some variables in the console. It is very disgusting. We all want to handle them lest they should come.</a>
                        
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="col-md-4">
                <div class="card">
                    <img style={{height:"200px"}} src={code} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Express js Interview Questions</h5>
                        <a target="_blank" href="https://remonroy34.medium.com/javascript-es6-introduction-bfc27842af1a" class="card-text">Sometimes, we can get ‘null’ or ‘undefined’ after printing some variables in the console. It is very disgusting. We all want to handle them lest they should come..</a>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Blog;