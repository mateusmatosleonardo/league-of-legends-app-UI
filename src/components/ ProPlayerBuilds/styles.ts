import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const ShowAllText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xs)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;

export const SeparatorItem = styled.View`
  width: 100%;
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;
