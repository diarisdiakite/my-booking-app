import { React } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNavbar } from '../components';

const DashboardLayout = () => (
  <div className="flex w-full h-screen">
    <SideNavbar />
    <Outlet />
  </div>
);

export default DashboardLayout;
