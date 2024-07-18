import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import logo from 'https://raw.githubusercontent.com/olguncc/fsweb-s6-challenge-pizza/946ee6fe1db5890ac80d72627200a6a1b45b9e2b/public/assets/iteration-1/logo.svg';

const HomePage = () => {
  return (
    <div className="home-container">
      <img src={logo} alt="Teknolojik Yemekler Logo" className="home-logo" />
      <h1 className="home-title">Teknolojik Yemekler</h1>
      <p className="home-subtitle">KOD ACIKTIRIR PIZZA, DOYURUR</p>
      <Link to="/order" className="home-button">
        ACİKTIM
      </Link>
    </div>
  );
};

export default HomePage;
