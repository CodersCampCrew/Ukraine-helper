import React from 'react';
import { Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';

const Layout = () => {
  return (
    <>
      <HomePage />
      <Outlet />;
    </>
  );
};

export default Layout;
