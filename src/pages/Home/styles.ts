import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(17)}px;

  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-top: ${RFValue(28)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
`;

export const UserInfo = styled.View``;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image``;

export const UserInfoDetail = styled.View``;

export const UserGreeting = styled.Text``;

export const UserName = styled.Text``;
