import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BtnGoBack = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Box = styled.View`
  width: 100%;
  padding: 0px 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const WrapperInfos = styled.View``;

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

export const BoxDescription = styled.View`
  width: 100%;
  padding: 15px 20px;
  text-align: center;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
`;

export const TextToggle = styled.Text`
  color: ${({ theme }) => theme.colors.YELLOW};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
`;
