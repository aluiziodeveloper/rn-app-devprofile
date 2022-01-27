import React from 'react';

import avatarDefault from '../../assets/avatar02.png';
import {
  Container,
  EmailData,
  EmailTitle,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetail,
  UserEmailDetail,
  UserNameDetail,
} from './styles';

export const User: React.FunctionComponent = () => {
  return (
    <Container>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>Aluizio Developer</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>aluiziodeveloper@gmail.com</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar source={avatarDefault} />
    </Container>
  );
};
