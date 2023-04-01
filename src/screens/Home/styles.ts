import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${RFValue(25.5)}px;
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  padding: 10px 0px;
`;

export const TypesOfChampions = styled.View`
  width: 100%;
  padding: 6px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Type = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${RFValue(15.5)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const HandleType = styled.Pressable`
  justify-content: space-between;
  align-items: center;
  height: 30px;
`;

export const Hatch = styled.View`
  width: 35px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
