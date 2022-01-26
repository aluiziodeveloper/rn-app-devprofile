import React from 'react';

interface IAuthContext {
  name: string;
  signIn(): void;
}

interface IProps {
  children: React.ReactElement;
}

export const AuthContext = React.createContext<IAuthContext>(
  {} as IAuthContext,
);

export const AuthProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const signIn = () => {
    console.log('signIn');
  };

  return (
    <AuthContext.Provider value={{ name: 'Jorge', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
