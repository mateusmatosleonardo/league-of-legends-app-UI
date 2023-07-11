import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: 360px;
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

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;
