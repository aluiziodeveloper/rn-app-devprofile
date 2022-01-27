import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(16)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${RFValue(48)}px ${RFValue(24)}px ${RFValue(8)}px;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-right: ${RFValue(16)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(24)}px;
`;

export const HeaderTile = styled.Text`
  color: ${({ theme }) => theme.colors.gray800};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
`;

export const UserAvatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  margin-left: auto;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: ${RFValue(48)}px ${RFValue(24)}px;
`;

export const ContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: bold;
  margin: 0 auto;
`;

export const UserDetailAvatar = styled.Image`
  width: ${RFValue(120)}px;
  height: ${RFValue(120)}px;
  border-radius: 10px;
  margin: 0 auto;
`;

export const UserNameDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`;

export const NameTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-transform: uppercase;
`;

export const NameData = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;

export const UserEmailDetail = styled.View`
  background-color: ${({ theme }) => theme.colors.gray800};
  padding: ${RFValue(16)}px ${RFValue(24)}px;
  border-radius: 10px;
`;

export const EmailTitle = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  text-transform: uppercase;
`;

export const EmailData = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
  margin-top: ${RFValue(8)}px;
`;
