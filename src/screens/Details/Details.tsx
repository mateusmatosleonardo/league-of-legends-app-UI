import React, { useEffect } from "react";
import { Text } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Header, Layout } from "../../components";
import { RootStackParamsList } from "../../routes/types";
import {
  BoxDescription,
  BtnGoBack,
  Description,
  Pressable,
  SkillDescription,
  SkillIcon, SkillInfos,
  SkillList,
  SkillName,
  TextToggle,
  TitleSkills,
  ToggleSkill,
  WrapperSkills
} from "./styles";
import { useControllerDetails } from "./controllers/useControllerDetails";

import Icon from '@expo/vector-icons/MaterialIcons';
import InitialInfo from "./components/InitialInfo/InitialInfo";
import { MotiView } from "moti";

const DetailsScreen: React.FC = () => {

  const {
    champion,
    fetchChampion,
    liked, setLiked,
    animation,
    firstAnimation,
    expanded,
    handleToggleExpansion,
    handleSkillPress,
    selectedSkillIndex
  } = useControllerDetails();

  const route = useRoute<RouteProp<RootStackParamsList, 'DetailsScreen'>>();
  const { id } = route.params;

  const navigation = useNavigation();

  const selectedSkill = champion?.skills && champion.skills[selectedSkillIndex];

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

          <InitialInfo
            name={champion?.nameChampion}
            surname={champion?.surname}
            animation={animation}
            onPress={() => setLiked(!liked)}
          />

          <BoxDescription>
            <Description numberOfLines={expanded ? undefined : 3}>{champion?.description}</Description>
            <Pressable onPress={handleToggleExpansion}>
              <TextToggle>{expanded ? "Ver Menos" : "Ver Mais"}</TextToggle>
            </Pressable>
          </BoxDescription>
          <WrapperSkills>
            <TitleSkills>Habilidades</TitleSkills>
            <SkillList>
              {champion.skills?.map((skill, index) => (
                <MotiView
                  key={index}
                  from={{ opacity: 0, translateY: -20 }}
                  animate={{
                    opacity: 1,
                    translateY: 0,
                  }}
                  transition={{ delay: 50 + index * 380, type: "timing" }}
                >
                  <ToggleSkill onPress={() => handleSkillPress(index)} style={{ opacity: selectedSkillIndex === index ? 1 : 0.7 }}>
                    <SkillIcon source={skill.imgSkill} />
                  </ToggleSkill>
                </MotiView>
              ))}
            </SkillList>
            <SkillInfos>
              <SkillName>{selectedSkill?.nameSkill}</SkillName>
              <SkillDescription>{selectedSkill?.descriptionSkill}</SkillDescription>
            </SkillInfos>
          </WrapperSkills>
        </React.Fragment> : <Text>Carregando...</Text>}
    </Layout>
  )
};

export default DetailsScreen;