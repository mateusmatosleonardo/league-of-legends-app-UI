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

export const StaticTitleFunction = styled.Text`
  ${baseTextStyles}
`;

export const TitleFunction = styled.Text`
  ${baseTitleStyles}
  margin-top: 4px;
`;

export const TitleDifficulty = styled.Text`
  ${baseTextStyles}
`;

export const Difficulty = styled.Text`
  ${baseTitleStyles}
  margin-top: 1px;
`;
