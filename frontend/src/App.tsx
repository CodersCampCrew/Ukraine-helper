import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/category/Category';
import { Announcements } from './pages/announcements/Announcements';

import Layout from './Layout';
import routes from './routes';

import { Register } from './pages/register/Register';
import { LoginForm } from './pages/login/components/LoginForm';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<div />} />
        <Route path={routes.category} element={<Category />} />
        <Route path={routes.announcements} element={<Announcements />} />
        <Route path={routes.sample} element={<div />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.login} element={<LoginForm />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};
