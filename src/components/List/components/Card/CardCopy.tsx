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
import { IChampions } from "../../../types";


const CardCopy: React.FC<IChampions> = ({ image, name }: IChampions) => {
  return (
    <WrapperCard>

      <WrapperImage>
        <ImageChampion source={image.full} resizeMode='cover' />
      </WrapperImage>

      <WrapperInfo>
        <InfoChampion>
          <NameChampion>{name}</NameChampion>
          <TypeChampion>{name}</TypeChampion>
        </InfoChampion>

        <ButtonDetails>
          <AntDesign name="right" size={13} color="#ffffff" />
        </ButtonDetails>
      </WrapperInfo>

    </WrapperCard>
  )
}

export default CardCopy;