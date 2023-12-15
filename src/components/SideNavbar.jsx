import React from 'react';

import { Link } from 'react-router-dom';

const SideNavbar = () => (
  <div className="w-[20%] border-r-2 border-slate-200">
    <Link to="/models">Models</Link>
  </div>
);

export default SideNavbar;
