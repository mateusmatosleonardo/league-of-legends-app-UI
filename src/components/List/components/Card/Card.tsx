import React from "react";
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
import { CardProps } from "../../../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({ image, name, typeBr, navigation }: CardProps) => {
  return (
    <WrapperCard>

      <WrapperImage>
        <ImageChampion source={image} resizeMode='cover' />
      </WrapperImage>

      <WrapperInfo>
        <InfoChampion>
          <NameChampion>{name}</NameChampion>
          <TypeChampion>{typeBr}</TypeChampion>
        </InfoChampion>

        <ButtonDetails onPress={navigation}>
          <AntDesign name="right" size={13} color="#ffffff" />
        </ButtonDetails>
      </WrapperInfo>

    </WrapperCard>
  )
}

export default Card;