import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import routes from './routes';

import { Login } from './pages/login/Login';
import HomePage from './pages/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<HomePage/>} />
        <Route path={routes.sample} element={<div />} />
        <Route path={routes.login} element={<Login/>} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};
