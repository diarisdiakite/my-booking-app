import React from 'react';

import { Link } from 'react-router-dom';

const SideNavbar = () => (
  <div className="w-[20%] border-r-2 border-slate-200 p-4">
    <Link to="/">Cars</Link>
    <Link to="/models">Reserve</Link>
    <Link to="/models">My Reservations</Link>
    <Link to="/cars/new">Add Car</Link>
    <Link to="/cars/delete">Delete Car</Link>
  </div>
);

export default SideNavbar;
