import React from 'react';
import Home from '../../Header/Home/Home';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Project from '../Project/Project';

const SectionAdd = () => {
    return (
        <section>
            <Home></Home>
            <About></About>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </section>
    );
};

export default SectionAdd;