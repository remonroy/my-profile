import React from 'react';
import Smain from './Smain';
import "./Home.css"
import Navbar from '../Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
const Home = () => {
  return (
    <div className="background">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
    </div>
  );
};

export default Home;
