import React from 'react';
import img from'../../Images/study-man.png';
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
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">10 JavaScript Interview Questions</h5>
                        <a href="" class="card-text">Hello, I am Remon. I am here to share some common JavaScript interview questions. So, let’s start.</a>
                        
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="col-md-4">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">10 JavaScript Interview Questions</h5>
                        <a href=""class="card-text">Sometimes, we can get ‘null’ or ‘undefined’ after printing some variables in the console. It is very disgusting. We all want to handle them lest they should come.</a>
                        
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" className="col-md-4">
                <div class="card">
                    <img src={img} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">10 JavaScript Interview Questions</h5>
                        <a href="" class="card-text">SSometimes, we can get ‘null’ or ‘undefined’ after printing some variables in the console. It is very disgusting. We all want to handle them lest they should come..</a>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Blog;