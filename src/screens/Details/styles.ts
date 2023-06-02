import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface StyledDetailsProps {
  color?: string;
}

const baseTextStyles = css`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
`;

const baseTitleStyles = css`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const Scroll = styled.ScrollView``;

export const BtnGoBack = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const Pressable = styled.Pressable``;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  font-size: ${RFValue(14)}px;
  ${baseTextStyles}
`;

export const TextToggle = styled.Text`
  color: ${({ theme }) => theme.colors.YELLOW};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const ToggleSkill = styled.Pressable``;

export const SkillName = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const SkillDescription = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  margin-top: 7.5px;
`;

export const DifficultyIcon = styled.View<StyledDetailsProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 7px;
  background-color: ${(p) => (p.color ? p.color : "rgba(255, 255, 255, 0.1)")};
`;
