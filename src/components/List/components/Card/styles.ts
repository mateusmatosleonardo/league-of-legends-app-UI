import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.Pressable`
  width: 104px;
  margin-right: 15px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.sm)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  margin-top: ${({ theme }) => theme.spacing.xxs + 2}px;
`;

export const Surname = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xxs) + 1.5}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  margin-top: ${({ theme }) => theme.spacing.xxs + 2}px;
`;
