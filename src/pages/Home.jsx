import React from 'react';
import { Search, Settings, ChevronRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeImageBg from '../assets/images/bg.jpg';

const Home = () => (
  <div className="relative w-full h-screen bg-orange-500/80 px-6">
    <img className="w-fit opacity-10 top-0 bottom-0 left-0 right-0 absolute z-4" src={homeImageBg} alt="home background" />
    <div className="absolute top-0 left-0 right-0">
      <div className="flex justify-between items-center p-6">
        <div className="flex flex-col gap-2">
          <div className="w-8 h-2 rounded-full bg-white" />
          <div className="w-8 h-2 rounded-full bg-white" />
        </div>
        <div className="bg-white rounded-full py-2 px-4 text-orange-500">
          <Search className="w-5 h-5" />
        </div>
      </div>
    </div>
    <div className="relative z-999">
      <div className="w-full h-screen flex flex-col gap-4 justify-center items-center -mt-6 text-center">
        <h1 className="font-bold text-5xl md:text-7xl text-white leading-normal">
          Luxury Car Booking
        </h1>
        <Link to="/dashboard/cars" className="btn mt-4">
          <div className="flex items-center gap-2 p-2">
            <Settings className="w-5 h-5" />
            <span>All Models</span>
            <ChevronRightCircle className="w-5 h-5" />
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
