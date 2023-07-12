import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px;
  padding-left: 20px;
  padding-right: 10px;
`;

export const AvatarContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  border-width: 1px;
  border-color: #6500ba;
`;

export const Avatar = styled.Image`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ContainerInfoProPlayer = styled.View`
  flex-direction: row;
  gap: 20px;
`;

export const ContainerNameAndGuild = styled.View`
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const ProPlayerName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.xs)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContainerGuild = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
`;

export const AvatarGuild = styled.Image`
  width: 20px;
  height: 20px;
`;

export const GuildName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xxs)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const ContainerMoreInfo = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LearnIcon = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 12px;
`;

export const ChampionIcon = styled.Image`
  width: 24px;
  height: 24px;
  margin-left: -10px;
`;

export const ContainerChampionIcons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
