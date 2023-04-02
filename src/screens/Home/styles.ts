import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${RFValue(25.5)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  padding: 16px 0px 10px 0px;
`;

export const EmptyContainer = styled.View`
  width: 100%;
  height: 55px;
`;
