import React from "react";
import { ImageSourcePropType } from "react-native";
import {
  ButtonDetails,
  ImageChampion,
  InfoChampion,
  NameChampion,
  TypeChampion,
  WrapperCard,
  WrapperImage,
  WrapperInfo
} from "./styles";

import { AntDesign } from '@expo/vector-icons';

export interface ICard {
  imgChampion: ImageSourcePropType;
  nameChampion: string;
  typeChampion: 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks'
  typeChampionPtBr: 'assassinos' | 'lutadores' | 'magos' | 'atiradores' | 'suportes' | 'tanques';
}

const Card: React.FC<ICard> = ({ imgChampion, nameChampion, typeChampion, typeChampionPtBr }: ICard) => {
  return (
    <WrapperCard>

      <WrapperImage>
        <ImageChampion source={imgChampion} resizeMode='cover' />
      </WrapperImage>

      <WrapperInfo>
        <InfoChampion>
          <NameChampion>{nameChampion}</NameChampion>
          <TypeChampion>{typeChampionPtBr}</TypeChampion>
        </InfoChampion>

        <ButtonDetails>
          <AntDesign name="right" size={13} color="#ffffff" />
        </ButtonDetails>
      </WrapperInfo>

    </WrapperCard>
  )
}

export default Card;