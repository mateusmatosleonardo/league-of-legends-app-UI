import React from "react";
import {
  GoDetails,
  Name,
  Type,
} from "./styles";
import { XStack, YStack, Stack, Avatar } from "tamagui";
import { AntDesign } from '@expo/vector-icons';
import { CardProps } from "../../../../interfaces/interfaces";

const Card: React.FC<CardProps> = ({ image, name, typeBr, navigation }: CardProps) => {

  return (
    <XStack
      w="100%"
      h="$7"
      mb="$4.5"
      borderRadius="$5"
    >
      <Stack w="$7" h="$7">
        <Avatar size="$7" borderTopLeftRadius="$5" borderBottomLeftRadius="$5">
          <Avatar.Image source={image} resizeMode='cover' />
        </Avatar>
      </Stack>
      <XStack
        f={1}
        justifyContent="space-between"
        alignItems="center"
        borderTopRightRadius="$5"
        borderBottomRightRadius="$5"
      >
        <YStack
          f={1}
          pl="$4.5"
          h="100%"
          justifyContent="center"
          backgroundColor="white"
          borderTopRightRadius="$5"
          borderBottomRightRadius="$5"
        >
          <Name>{name}</Name>
          <Type>{typeBr}</Type>
        </YStack>
        <GoDetails onPress={navigation}>
          <AntDesign name="right" size={13} color="#ffffff" />
        </GoDetails>
      </XStack >

    </XStack >
  )
}

export default Card;