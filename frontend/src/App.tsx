import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import routes from './routes';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<div />} />
        <Route path={routes.sample} element={<div />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};
