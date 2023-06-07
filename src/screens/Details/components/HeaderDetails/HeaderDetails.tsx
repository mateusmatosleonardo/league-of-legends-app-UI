import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { Name, Surname, Pressable } from "./styles";
import { HeaderDetailsProps } from "./interface";
import { Stack, XStack } from "tamagui";
import Like from '../../../../assets/icons/like.json';

const HeaderDetails = ({ name, surname, handleLike, animation }: HeaderDetailsProps) => {
  return (
    <XStack
      justifyContent="space-between"
      alignItems="flex-start"
      px="$4"
    >
      <Stack>
        <Name>{name}</Name>
        <Surname>{surname}</Surname>
      </Stack>
      <Pressable onPress={handleLike}>
        <AnimatedLottieView
          source={Like}
          style={{ width: 26, height: 26 }}
          resizeMode="cover"
          autoPlay={false}
          loop={false}
          ref={animation}
        />
      </Pressable>
    </XStack>
  )
}

export default HeaderDetails;