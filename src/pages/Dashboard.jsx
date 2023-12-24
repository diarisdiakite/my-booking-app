import { React } from 'react';
import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';

const Dashboard = () => (
  <div className="flex w-full h-screen">
    <SideNavbar />
    <Outlet />
  </div>
);

export default Dashboard;
