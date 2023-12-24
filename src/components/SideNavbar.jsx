import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavbar = () => (
  <div className="w-[20%] border-r-2 border-slate-200">
    <NavLink to="/dashboard/models" className="block p-3 uppercase">Models</NavLink>
    <NavLink to="/dashboard/lifestyle" className="block p-3 uppercase">Lifestyle</NavLink>
    <NavLink to="/dashboard/booking" className="block p-3 uppercase">Booking</NavLink>
    <NavLink to="/dashboard/test-drive" className="block p-3 uppercase">Test Drive</NavLink>
  </div>
);

export default SideNavbar;
