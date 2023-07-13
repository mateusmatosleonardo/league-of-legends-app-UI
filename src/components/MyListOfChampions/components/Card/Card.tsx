import React from "react";
import {
  Container,
  Name,
  Surname,
} from "./styles";
import { YStack, Avatar } from "tamagui";
import { CardProps } from "../../../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({ image, name, surname, navigation }: CardProps) => {

  return (
    <Container onPress={navigation}>
      <Avatar size={"$10"} borderRadius="$3">
        <Avatar.Image source={image} borderRadius="$3" overflow="hidden" resizeMode='cover' />
      </Avatar>
      <YStack>
        <Name>{name}</Name>
        <Surname>{surname}</Surname>
      </YStack>
    </Container>
  )
}

export default Card;