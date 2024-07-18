import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-red-700 min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-4">Teknolojik Yemekler</h1>
      <p className="text-2xl mb-8">KOD ACIKTIRIR PIZZA, DOYURUR</p>
      <Link to="/order" className="bg-yellow-400 text-black py-2 px-4 rounded">ACİKTIM</Link>
    </div>
  );
};

export default Home;
