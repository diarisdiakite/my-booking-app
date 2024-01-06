import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className="flex w-full h-screen">
    <Outlet />
  </div>
);

export default Layout;
