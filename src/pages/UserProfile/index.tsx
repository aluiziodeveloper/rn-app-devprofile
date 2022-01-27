import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Content,
  EmailData,
  EmailTitle,
  GoBackButton,
  Header,
  HeaderTile,
  Icon,
  NameData,
  NameTitle,
  PhotoButton,
  PhotoContainer,
  UserAvatar,
  UserEmailDetail,
  UserNameDetail,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';

interface ScreenNavigationProp {
  goBack: () => void;
}

export const UserProfile: React.FunctionComponent = () => {
  const { user } = useAuth();
  const { goBack } = useNavigation<ScreenNavigationProp>();

  return (
    <Container>
      <Header>
        <GoBackButton onPress={goBack}>
          <Icon name="chevron-left" />
        </GoBackButton>
        <HeaderTile>Seu Perfil</HeaderTile>
      </Header>

      <PhotoContainer>
        <UserAvatar
          source={user.avatar_url ? { uri: user.avatar_url } : avatarDefault}
        />
        <PhotoButton>
          <Icon name="camera" />
        </PhotoButton>
      </PhotoContainer>

      <Content>
        <UserNameDetail>
          <NameTitle>NAME</NameTitle>
          <NameData>{user.name}</NameData>
        </UserNameDetail>

        <UserEmailDetail>
          <EmailTitle>EMAIL</EmailTitle>
          <EmailData>{user.email}</EmailData>
        </UserEmailDetail>
      </Content>
    </Container>
  );
};
