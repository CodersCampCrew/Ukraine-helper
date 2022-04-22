import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/category/Category';
import { Announcements } from './pages/announcements/Announcements';

import Layout from './Layout';
import routes from './routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<div />} />
        <Route path={routes.category} element={<Category />} />
        <Route path={routes.announcements} element={<Announcements />} />
      </Route>
    </Routes>
  );
};
