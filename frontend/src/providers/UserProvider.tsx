import jwtDecode from 'jwt-decode';
import React, { useReducer } from 'react';

import userService from '../services/userService';

type UserProviderProps = {
  children: React.ReactNode;
};

type State = {
  isLoading: boolean;
  user?: User;
  error?: unknown;
  jwt?: any;
  isLoggedIn?: any;
};

type User = {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  address: string;
  jwt: string;
};

type Action =
  | { type: 'login/request' }
  | { type: 'login/success'; user: User }
  | { type: 'logout' }
  | { type: 'login/failure'; error: unknown };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'login/request':
      return { isLoading: true };
    case 'login/success':
      return { isLoading: false, user: action.user };
    case 'login/failure':
      return { isLoading: false, error: action.error };
    case 'logout':
      return { isLoading: false };
  }
};

const token = localStorage.getItem('token');

const initialState: State = { isLoading: false, isLoggedIn: token };

export const UserContext = React.createContext({
  state: initialState,
  actions: {
    async login({ email, password }: { email: string; password: string }) {},
    async logout() {}
  }
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = {
    async login({ email, password }: { email: string; password: string }) {
      dispatch({ type: 'login/request' });
      try {
        await userService.login({
          email: email,
          password: password
        });
        const jwt = document.cookie;
        localStorage.setItem('token', jwt);
        const decodedJWT: any = jwtDecode(jwt);
        const { userName }: any = decodedJWT;

        dispatch({ type: 'login/success', user: userName });
      } catch (error) {
        dispatch({ type: 'login/failure', error });
      }
    },
    async logout() {
      dispatch({ type: 'logout' });
      localStorage.removeItem('token');
    }
  };

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
