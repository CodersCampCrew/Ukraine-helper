import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/category/Category';
import { SingleAnnouncement } from './pages/announcements/SingleAnnouncement';
import { Announcements } from './pages/announcements/Announcements';
import { Add } from './pages/add/Add';

import Layout from './Layout';
import routes from './routes';

import { Register } from './pages/register/Register';
import { LoginForm } from './pages/login/components/LoginForm';
import { IneedHelp } from './pages/ineedhelp/ineedhelp';
import { Confirm } from './pages/ConfirmPage/Confirm';
import { Confirmed } from './pages/ComfiredPage/Comfired';
import { Error404 } from './pages/404page/404page';

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<div />} />
        <Route path={routes.category} element={<Category />} />
        <Route
          path={routes.singleAnnouncement}
          element={<SingleAnnouncement />}
        />
        <Route path={routes.announcements} element={<Announcements />} />
        <Route path={routes.add} element={<Add />} />
        <Route path={routes.ineedhelp} element={<IneedHelp />} />
        <Route path={routes.register} element={<Register />} />
        <Route path={routes.confirm} element={<Confirm />} />
        <Route path={routes.confirmed} element={<Confirmed />} />
        <Route path={routes.login} element={<LoginForm />} />
        <Route path={routes.error404} element={<Error404 />} />
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};
