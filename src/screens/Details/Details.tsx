import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Header, Layout } from "../../components";
import { RootStackParamsList } from "../../routes/types";
import { Box, BoxDescription, BtnGoBack, Description, Name, Pressable, Surname, TextToggle, WrapperInfos } from "./styles";
import { useControllerDetails } from "./controllers/useControllerDetails";
import AnimatedLottieView from "lottie-react-native";
import Like from '../../assets/icons/like.json';
import Icon from '@expo/vector-icons/MaterialIcons';

const DetailsScreen: React.FC = () => {

  const {
    champion,
    fetchChampion,
    liked, setLiked,
    animation,
    firstAnimation,
    expanded,
    handleToggleExpansion
  } = useControllerDetails();

  const route = useRoute<RouteProp<RootStackParamsList, 'DetailsScreen'>>();
  const { id } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    fetchChampion(id);
  }, [id]);

  useEffect(() => {
    if (firstAnimation.current) {
      if (liked) {
        animation.current?.play(24, 24);
      } else {
        animation.current?.play(7, 7);
      }
      firstAnimation.current = false;
    } else if (liked) {
      animation.current?.play(10, 24);
    } else {
      animation.current?.play(45, 60);
    }
  }, [liked]);

  return (
    <Layout>
      {champion ?
        <React.Fragment>
          <Header>
            <BtnGoBack onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={30} color="#fafafa" />
            </BtnGoBack>
          </Header>
          <Box>
            <WrapperInfos>
              <Name>{champion?.nameChampion}</Name>
              <Surname>{champion?.surname}</Surname>
            </WrapperInfos>
            <Pressable onPress={() => setLiked(!liked)}>
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
          <BoxDescription>
            <Description numberOfLines={expanded ? undefined : 3}>{champion?.description}</Description>
            <Pressable onPress={handleToggleExpansion}>
              <TextToggle>{expanded ? "Ver Menos" : "Ver Mais"}</TextToggle>
            </Pressable>
          </BoxDescription>
        </React.Fragment> : <Text>Carregando...</Text>}
    </Layout>
  )
};

export default DetailsScreen;