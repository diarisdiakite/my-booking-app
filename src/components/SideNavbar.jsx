import React from 'react';
import { Twitter } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

const SideNavbar = () => (
  <div className="w-[300px] p-4 border-r-2 border-slate-200">
    <div className="h-full flex flex-col justify-between">
      <div className="flex flex-col gap-14">
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <NavLink to="/dashboard/cars" className="block p-3 uppercase font-bold">Cars</NavLink>
          <NavLink to="/dashboard/new-car-form" className="block p-3 uppercase font-bold">New Car</NavLink>
          <NavLink to="/dashboard/reservations" className="block p-3 uppercase font-bold">My Reservations</NavLink>
          <NavLink to="/dashboard/reservation-form" className="block p-3 uppercase font-bold">Reservation Form</NavLink>
        </div>
      </div>
      <div className="flex flex-col items-center text-center">
        <Twitter />
        <p>
          &copy; 2024 &middot; LuxCar
        </p>
      </div>
    </div>
  </div>
);

export default SideNavbar;
