import React from 'react';

import avatarDefault from '../../assets/avatar02.png';
import { IUser } from '../../model/user';
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

interface UserProps {
  data: IUser;
  onPress: () => void;
}

export const User: React.FunctionComponent<UserProps> = ({ data, onPress }) => {
  return (
    <Container onPress={onPress}>
      <UserDetail>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{data.name}</NameData>
        </UserNameDetail>
        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{data.email}</EmailData>
        </UserEmailDetail>
      </UserDetail>
      <UserAvatar
        source={data.avatar_url ? { uri: data.avatar_url } : avatarDefault}
      />
    </Container>
  );
};
