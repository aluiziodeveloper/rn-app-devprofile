import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Container } from './styles';

export const UserDetails: React.FunctionComponent = () => {
  const route = useRoute();

  console.log(route);

  return <Container />;
};
