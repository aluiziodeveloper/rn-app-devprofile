import React from 'react';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../context/AuthContext';

export const Routes: React.FunctionComponent = () => {
  const { user } = useAuth();

  return user?.id ? <AppRoutes /> : <AuthRoutes />;
};
