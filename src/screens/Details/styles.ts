import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface StyledDetailsProps {
  color?: string;
}

export const BtnGoBack = styled.Pressable`
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 17.5px;
  background-color: rgba(255, 255, 255, 0.1);
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

export const WrapperSkills = styled.View`
  width: 100%;
  padding: 0px 20px 15px 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
`;

export const SkillList = styled.View`
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
`;

export const SkillInfos = styled.View`
  width: 100%;
  margin-top: 15px;
`;

export const ToggleSkill = styled.Pressable``;

export const SkillIcon = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 19.5px;
  margin-right: 15px;
`;

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

export const WrapperFooter = styled.View`
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

export const WrapperFunctionTitles = styled.View`
  margin-left: 24px;
`;

export const ImageFunction = styled.Image`
  width: 70px;
  height: 70px;
`;

export const StaticTitleFunction = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
`;

export const TitleFunction = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
  margin-top: 4px;
`;

export const WrapperDifficulty = styled.View``;

export const TitleDifficulty = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
`;

export const Difficulty = styled.Text`
  color: ${({ theme }) => theme.colors.GRAY};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.Montserrat_Bold};
  margin-top: 1px;
`;

export const WrapperDifficultyIcons = styled.View`
  flex-direction: row;
`;

export const DifficultyIcon = styled.View<StyledDetailsProps>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 7px;
  background-color: ${(p) => (p.color ? p.color : "rgba(255, 255, 255, 0.1)")};
`;
