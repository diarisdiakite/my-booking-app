import { Outlet } from 'react-router-dom';
import SideNavbar from '../components/SideNavbar';

const Layout = () => (
  <div className="flex w-full h-screen">
    <SideNavbar />
    <Outlet />
  </div>
);

export default Layout;
