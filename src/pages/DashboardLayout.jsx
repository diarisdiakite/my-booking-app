import { React } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNavbar } from '../components';

const DashboardLayout = () => (
  <div className="flex w-full h-screen">
    <SideNavbar />
    <div className="p-8 w-full h-full">
      <Outlet />
    </div>
  </div>
);

export default DashboardLayout;
