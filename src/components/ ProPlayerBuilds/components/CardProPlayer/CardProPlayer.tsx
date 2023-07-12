import React from 'react';
import * as Style from './styles';
import Chevron from '@expo/vector-icons/Feather';
import { CardProPlayerProps } from '../../interfaces/interfaces';

const CardProPlayer = ({ avatar, name, avatarGuild, guildName, learn, iconChampion, iconChampion2, iconChampion3 }: CardProPlayerProps) => {
  return (
    <Style.Container>
      <Style.ContainerInfoProPlayer>
        <Style.AvatarContainer>
          <Style.Avatar source={avatar} resizeMode='cover' />
        </Style.AvatarContainer>
        <Style.ContainerNameAndGuild>
          <Style.ProPlayerName>{name}</Style.ProPlayerName>
          <Style.ContainerGuild>
            <Style.AvatarGuild source={avatarGuild} resizeMode='cover' />
            <Style.GuildName>{guildName}</Style.GuildName>
          </Style.ContainerGuild>
        </Style.ContainerNameAndGuild>
      </Style.ContainerInfoProPlayer>
      <Style.ContainerMoreInfo>
        <Style.LearnIcon source={learn} resizeMode='cover' />
        <Style.ContainerChampionIcons>
          <Style.ChampionIcon source={iconChampion} resizeMode='cover' />
          <Style.ChampionIcon source={iconChampion2} resizeMode='cover' />
          <Style.ChampionIcon source={iconChampion3} resizeMode='cover' />
        </Style.ContainerChampionIcons>
        <Chevron name='chevron-right' size={25} color="#cecece" />
      </Style.ContainerMoreInfo>
    </Style.Container>
  );
}

export default CardProPlayer;