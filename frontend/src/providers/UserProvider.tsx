import React, { useReducer } from 'react';
import jwtDecode from 'jwt-decode';

import userService from '../services/userService';

type UserProviderProps = {
  children: React.ReactNode;
};

type State = {
  isLoading: boolean;
  user?: User;
  error?: unknown;
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
  | { type: 'login/failure'; error: unknown };

const initialState: State = { isLoading: false };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'login/request':
      return { isLoading: true };
    case 'login/success':
      return { isLoading: false, user: action.user };
    case 'login/failure':
      return { isLoading: false, error: action.error };
  }
};

export const UserContext = React.createContext({
  state: initialState,
  actions: {
    async login({ email, password }: { email: string; password: string }) {}
  }
});

export const UserProvider = ({ children }: UserProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    async login({ email, password }: { email: string; password: string }) {
      dispatch({ type: 'login/request' });
      try {
        const user = await userService.login({
          email: email,
          password: password
        });

        console.log(user);

        dispatch({ type: 'login/success', user });
        console.log(user);
      } catch (error) {
        console.log(error);
        dispatch({ type: 'login/failure', error });
      }
    }
  };

  return (
    <UserContext.Provider value={{ state, actions }}>
      {children}
    </UserContext.Provider>
  );
};
