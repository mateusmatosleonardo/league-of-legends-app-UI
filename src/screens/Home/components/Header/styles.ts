import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
  padding-top: ${Platform.OS === "ios" ? 20 : 0}px;
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;

export const AvatarContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  border-width: 2.5px;
  border-color: #6500ba;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 200px;
`;

export const InfoWrapper = styled.View`
  justify-content: space-evenly;
`;

export const InfoWrapperSecond = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EloWrapper = styled.View`
  width: 48px;
  height: 56px;
`;

export const EloIcon = styled.Image`
  width: 100%;
  height: 100%;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.GRAY};
`;

export const NickName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xs)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;
