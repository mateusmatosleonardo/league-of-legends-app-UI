import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const Surname = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  margin-top: 4px;
`;

export const Pressable = styled.Pressable``;
