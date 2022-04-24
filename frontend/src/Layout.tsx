import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/HomePage/NavBar';
import { IneedHelp } from './pages/ineedhelp/ineedhelp';

const Layout = () => {
  return (
  <>
  <Navbar/>
  <IneedHelp/>
  <Outlet />;
  </>)
};

export default Layout;
