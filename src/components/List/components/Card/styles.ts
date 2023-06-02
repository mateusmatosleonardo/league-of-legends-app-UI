import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const Type = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xxs) + 1.5}px;
  color: ${({ theme }) => theme.colors.BLACK};
  margin-top: ${({ theme }) => theme.spacing.xxs + 2}px;
`;

export const GoDetails = styled.Pressable`
  position: absolute;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
