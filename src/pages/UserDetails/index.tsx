import React from 'react';
import { useRoute } from '@react-navigation/native';
import {
  Container,
  Content,
  ContentTitle,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTile,
  Icon,
  NameData,
  NameTitle,
  UserAvatar,
  UserDetailAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';
import { IUser } from '../../model/user';
import { api } from '../../services/api';

interface RouteParams {
  userId: string;
}

export const UserDetails: React.FunctionComponent = () => {
  const [userDetails, setUserDetails] = React.useState<IUser>({} as IUser);
  const route = useRoute();
  const { userId } = route.params as RouteParams;

  React.useEffect(() => {
    const loadUser = async () => {
      const response = await api.get(`/users/${userId}`);
      setUserDetails(response.data);
    };
    loadUser();
  }, [userId]);

  return (
    <Container>
      <Header>
        <GoBackButton>
          <Icon />
        </GoBackButton>
        <HeaderTile>Usuários</HeaderTile>
        <UserAvatar />
      </Header>
      <Content>
        <ContentTitle>Detalhes do Usuário</ContentTitle>
        <UserDetailAvatar />

        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{userDetails.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>NAME</EmailTitle>
          <EmailData>{userDetails.name}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  );
};
