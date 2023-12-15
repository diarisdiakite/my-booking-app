import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <div>
      <h1 className="font-bold text-5xl text-slate-900">
        <span className="text-pink-900"> Welcome to </span>
        <span> Luxury Car Booking </span>
      </h1>
      <Link to="/models" className="btn">
        All Models
      </Link>
    </div>
  </div>
);

export default Home;
