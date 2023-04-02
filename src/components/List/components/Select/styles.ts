import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const WrapperSelect = styled.View`
  padding: 6px 20px;
`;

export const TypesOfChampions = styled.ScrollView`
  width: 100%;
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
  margin-bottom: 12px;
  margin-right: 12px;
`;

export const Hatch = styled.View`
  width: 35px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
