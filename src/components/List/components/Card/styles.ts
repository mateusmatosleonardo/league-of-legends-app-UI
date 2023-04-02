import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const WrapperCard = styled.View`
  flex-direction: row;
  width: 100%;
  height: 70px;
  border-radius: 14px;
  margin-bottom: 20px;
`;

export const WrapperImage = styled.View`
  width: 70px;
  height: 70px;
`;

export const ImageChampion = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
`;

export const WrapperInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
`;

export const InfoChampion = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  padding-left: 20px;
  background-color: ${({ theme }) => theme.colors.WHITE};
`;

export const NameChampion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${RFValue(18.5)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const TypeChampion = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.BLACK};
`;

export const ButtonDetails = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 70px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  background-color: ${({ theme }) => theme.colors.YELLOW};
`;
