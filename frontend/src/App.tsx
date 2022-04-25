import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Category } from './pages/category/Category';
import { SingleAnnouncement } from './pages/announcements/SingleAnnouncement';

import Layout from './Layout';
import routes from './routes';

import { Register } from './pages/register/Register';
import { LoginForm } from './pages/login/components/LoginForm';
import { IneedHelp } from './pages/ineedhelp/ineedhelp';
import { Confirm } from './pages/ConfirmPage/Confirm';
import { Confirmed } from './pages/ComfiredPage/Comfired';
import { Error404 } from './pages/404page/404page';
import { SelectedCategory } from './pages/selectedCategoryPage/SelectedCategory';
import { UserContext } from './providers/UserProvider';
import { Add } from './pages/add/Add';

export const App = () => {
  const userContext = useContext(UserContext);
  const isLogin = userContext.state.isLoggedIn
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<IneedHelp />} />
        <Route path={routes.category} element={<Category />} />
        <Route path={routes.selectedCategory} element={<SelectedCategory />} />
        <Route
          path={routes.singleAnnouncement}
          element={<SingleAnnouncement />}
        />

        {!isLogin && (
          <Route path={routes.register} element={<Register />} />
        )}
        {isLogin && (
          <Route path={routes.add} element={<Add/>} />
        ) }
        <Route path={routes.confirm} element={<Confirm />} />
        <Route path={routes.confirmed} element={<Confirmed />} />
        <Route path={routes.login} element={<LoginForm />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};
