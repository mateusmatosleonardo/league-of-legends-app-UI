import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

const baseTextStyles = css`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
`;

const baseTitleStyles = css`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const Container = styled.View`
  width: 100%;
  padding: 0px 20px;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperFunction = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperText = styled.View`
  margin-left: 24px;
`;

export const IconFunction = styled.Image`
  width: 70px;
  height: 70px;
`;

export const StaticTitleFunction = styled.Text`
  ${baseTextStyles}
`;

export const TitleFunction = styled.Text`
  ${baseTitleStyles}
  margin-top: 4px;
`;

export const WrapperDifficulty = styled.View``;

export const TitleDifficulty = styled.Text`
  ${baseTextStyles}
`;

export const Difficulty = styled.Text`
  ${baseTitleStyles}
  margin-top: 1px;
`;

export const WrapperDifficultyIcons = styled.View`
  flex-direction: row;
`;
