import React from 'react';
import {
  Container,
  Header,
  Icon,
  LogoutButton,
  UserAvatar,
  UserAvatarButton,
  UserGreeting,
  UserInfo,
  UserInfoDetail,
  UserList,
  UserListEmpty,
  UserListHeader,
  UserName,
  UserWrapper,
} from './styles';

import avatarDefault from '../../assets/avatar02.png';
import { useAuth } from '../../context/AuthContext';
import { Alert } from 'react-native';
import { IUser } from '../../model/user';
import { api } from '../../services/api';
import { User } from '../../components/User';

export const Home: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<IUser[]>([]);
  const { user, signOut } = useAuth();

  React.useEffect(() => {
    const loadUsers = async () => {
      const response = await api.get('users');
      setUsers(response.data);
    };
    loadUsers();
  }, []);

  const handleSignOut = () => {
    Alert.alert('Tem certeza?', 'Deseja realmente sair da aplicação?', [
      {
        text: 'Cancelar',
        onPress: () => {},
      },
      {
        text: 'Sair',
        onPress: () => signOut(),
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url ? { uri: user.avatar_url } : avatarDefault
                }
              />
            </UserAvatarButton>
            <UserInfoDetail>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>

          <LogoutButton onPress={handleSignOut}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>

      <UserList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <User data={item} onPress={() => {}} />}
        ListHeaderComponent={<UserListHeader>Usuários</UserListHeader>}
        ListEmptyComponent={
          <UserListEmpty>Ops! Ainda não há registros.</UserListEmpty>
        }
      />
    </Container>
  );
};
