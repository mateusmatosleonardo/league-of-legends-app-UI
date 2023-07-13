import React from 'react';
import {
  Avatar,
  AvatarContainer,
  Container,
  EloIcon,
  EloWrapper,
  InfoWrapper,
  InfoWrapperSecond,
  NickName,
  UserInfoContainer,
  UserName
} from './styles';
import SearchIcon from '@expo/vector-icons/Feather';
import Profile from '../../../../assets/profile.jpeg';
import Elo from '../../../../assets/elo.png';
import { useTheme } from 'styled-components';

export function HeaderHome() {
  const { colors } = useTheme();

  return (
    <Container>
      <UserInfoContainer>
        <AvatarContainer>
          <Avatar source={Profile} resizeMode='contain' />
        </AvatarContainer>
        <InfoWrapper>
          <UserName>Mateus</UserName>
          <NickName>The Black Kaiser</NickName>
        </InfoWrapper>
      </UserInfoContainer>
      <InfoWrapperSecond>
        <SearchIcon name='search' size={24} color={colors.GRAY_SECONDARY} />
        <EloWrapper>
          <EloIcon source={Elo} resizeMode='contain' />
        </EloWrapper>
      </InfoWrapperSecond>
    </Container>
  );
}