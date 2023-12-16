import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/2024-aston-martin-db12-125-64933aa0a739d.jpg';
// import '../assets/css/navbar.css';

const NavBar = () => (
  <div className="container">
    <div className="title">
      <img src={logo} className="logo" alt="logo" />
      <h2>Luxurious Cars</h2>
    </div>
    <nav className="nav-container">
      <NavLink to="/cars" className="nav-item">Cars</NavLink>
    </nav>
  </div>
);

export default NavBar;
