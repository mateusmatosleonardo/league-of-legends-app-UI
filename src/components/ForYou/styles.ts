import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 360px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 214px;
  margin-right: 8px;
`;

export const BgImage = styled.ImageBackground`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const FeaturedImage = styled.Image`
  width: 100%;
  height: 195px;
  right: -68px;
  bottom: 18px;
  z-index: 99;
  position: absolute;
`;

export const InfoWrapper = styled.View`
  position: absolute;
  z-index: 9999;
  width: 100px;
  left: 22px;
  top: 40px;
  gap: 2px;
`;

export const ButtonCard = styled.Pressable`
  position: absolute;
  z-index: 9999;
  left: 22px;
  bottom: 40px;
  width: 52px;
  height: 52px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background-color: #1e1f24;
`;

export const ChampionName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const ChampionSurname = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xxs)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;
