import React, { useEffect } from "react";
import * as S from "./styles";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Header, Layout, LoadingScreen } from "../../components";
import { Avatar, Stack, XStack, YStack } from "tamagui";
import { RootStackParamsList } from "../../routes/types";
import { useControllerDetails } from "./controllers/useControllerDetails";
import { MotiView } from "moti";
import { EnumDifficulty } from "../../interfaces/interfaces";
import Icon from '@expo/vector-icons/MaterialIcons';
import HeaderDetails from "./components/HeaderDetails/HeaderDetails";
import FooterDetails from "./components/FooterDetails/FooterDetails";

const DetailsScreen: React.FC = () => {

  const {
    champion,
    fetchChampion,
    liked, setLiked,
    animation,
    firstAnimation,
    expanded,
    handleToggleExpansion,
    handleSkillSelected,
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

  function renderDifficulty(difficulty: string) {
    return (
      <React.Fragment>
        {champion?.difficulty === EnumDifficulty.easy ?
          <React.Fragment>
            <S.DifficultyIcon color="#ffc107" />
            <S.DifficultyIcon />
            <S.DifficultyIcon />
          </React.Fragment>
          : champion?.difficulty === EnumDifficulty.medium ?
            <React.Fragment>
              <S.DifficultyIcon color="#ffc107" />
              <S.DifficultyIcon color="#ffc107" />
              <S.DifficultyIcon />
            </React.Fragment> : champion?.difficulty === EnumDifficulty.hard ?
              <React.Fragment>
                <S.DifficultyIcon color="#ffc107" />
                <S.DifficultyIcon color="#ffc107" />
                <S.DifficultyIcon color="#ffc107" />
              </React.Fragment>
              : null
        }
      </React.Fragment>
    )
  }

  return (
    <Layout>
      {champion ?
        <S.Scroll>
          <Header>
            <S.BtnGoBack onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={30} color="#fafafa" />
            </S.BtnGoBack>
          </Header>

          <HeaderDetails
            name={champion?.name}
            surname={champion?.surname}
            animation={animation}
            handleLike={() => setLiked(!liked)}
          />

          <Stack px="$4" py="$3.5">
            <S.Description numberOfLines={expanded ? undefined : 3}>{champion?.description}</S.Description>
            <S.Pressable onPress={handleToggleExpansion}>
              <S.TextToggle>{expanded ? "Ver Menos" : "Ver Mais"}</S.TextToggle>
            </S.Pressable>
          </Stack>

          <YStack w="100%" px="$4">
            <S.Title>Habilidades</S.Title>
            <XStack w="100%" mt="$3.5">
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
                  <S.ToggleSkill
                    onPress={() => handleSkillSelected(index)}
                    style={{ opacity: selectedSkillIndex === index ? 1 : 0.7 }}
                  >
                    <Avatar circular size="$3.5" mr="$3">
                      <Avatar.Image
                        source={skill.iconSkill}
                      />
                    </Avatar>
                  </S.ToggleSkill>
                </MotiView>
              ))}
            </XStack>

            <YStack w="100%" mt="$3.5">
              <S.SkillName>{selectedSkill?.nameSkill}</S.SkillName>
              <S.SkillDescription>{selectedSkill?.descriptionSkill}</S.SkillDescription>
            </YStack>
          </YStack>

          <FooterDetails
            icon={champion?.iconFunction}
            roleOfChampion={champion?.function}
            difficulty={champion?.difficulty}
            renderDifficulty={renderDifficulty(champion?.difficulty)}
          />
        </S.Scroll> : <LoadingScreen />}
    </Layout>
  )
};

export default DetailsScreen;