import React from "react";
import AnimatedLottieView from "lottie-react-native";
import { Box, WrapperInfos, Name, Surname, Pressable } from "./styles";
import { HeaderInfosProps } from "./interface";
import Like from '../../../../assets/icons/like.json';

const HeaderInfos = ({ name, surname, onPress, animation }: HeaderInfosProps) => {
  return (
    <Box>
      <WrapperInfos>
        <Name>{name}</Name>
        <Surname>{surname}</Surname>
      </WrapperInfos>
      <Pressable onPress={onPress}>
        <AnimatedLottieView
          source={Like}
          style={{ width: 26, height: 26 }}
          resizeMode="cover"
          autoPlay={false}
          loop={false}
          ref={animation}
        />
      </Pressable>
    </Box>
  )
}

export default HeaderInfos;