import React from 'react';

interface IAuthContext {
  name: string;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);
