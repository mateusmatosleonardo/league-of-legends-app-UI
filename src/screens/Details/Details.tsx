import React, { useEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Header, Layout, LoadingScreen } from "../../components";
import HeaderInfos from "./components/HeaderInfos/HeaderInfos";
import { RootStackParamsList } from "../../routes/types";
import { useControllerDetails } from "./controllers/useControllerDetails";
import { MotiView } from "moti";
import * as S from "./styles";
import Icon from '@expo/vector-icons/MaterialIcons';
import { EnumDifficulty } from "../../interfaces/interfaces";

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
        <React.Fragment>
          <Header>
            <S.BtnGoBack onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={30} color="#fafafa" />
            </S.BtnGoBack>
          </Header>
          <HeaderInfos
            name={champion?.nameChampion}
            surname={champion?.surname}
            animation={animation}
            onPress={() => setLiked(!liked)}
          />
          <S.BoxDescription>
            <S.Description numberOfLines={expanded ? undefined : 3}>{champion?.description}</S.Description>
            <S.Pressable onPress={handleToggleExpansion}>
              <S.TextToggle>{expanded ? "Ver Menos" : "Ver Mais"}</S.TextToggle>
            </S.Pressable>
          </S.BoxDescription>
          <S.WrapperSkills>
            <S.Title>Habilidades</S.Title>
            <S.SkillList>
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
                  <S.ToggleSkill onPress={() => handleSkillPress(index)} style={{ opacity: selectedSkillIndex === index ? 1 : 0.7 }}>
                    <S.SkillIcon source={skill.imgSkill} />
                  </S.ToggleSkill>
                </MotiView>
              ))}
            </S.SkillList>
            <S.SkillInfos>
              <S.SkillName>{selectedSkill?.nameSkill}</S.SkillName>
              <S.SkillDescription>{selectedSkill?.descriptionSkill}</S.SkillDescription>
            </S.SkillInfos>
          </S.WrapperSkills>
          <S.WrapperFooter>

            <S.WrapperFunction>
              <S.ImageFunction
                source={champion?.iconFunction}
              />
              <S.WrapperFunctionTitles>
                <S.StaticTitleFunction>Função</S.StaticTitleFunction>
                <S.TitleFunction>{champion?.function}</S.TitleFunction>
              </S.WrapperFunctionTitles>
            </S.WrapperFunction>

            <S.WrapperDifficulty>
              <S.TitleDifficulty>Dificuldade</S.TitleDifficulty>
              <S.Difficulty>{champion?.difficulty}</S.Difficulty>
              <S.WrapperDifficultyIcons>
                {renderDifficulty(champion?.difficulty)}
              </S.WrapperDifficultyIcons>
            </S.WrapperDifficulty>

          </S.WrapperFooter>
        </React.Fragment> : <LoadingScreen />}
    </Layout>
  )
};

export default DetailsScreen;