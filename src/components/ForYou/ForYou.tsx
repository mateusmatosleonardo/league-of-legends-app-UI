import React, { useCallback } from 'react';
import { Container, BgImage, FeaturedImage, Title, InfoWrapper, ChampionName, ChampionSurname, ButtonCard } from './styles';
import { XStack, YStack } from 'tamagui';
import { images } from '../../constants';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { MotiView } from 'moti';
import Chevron from '@expo/vector-icons/Feather';

interface ForYouType {
  name: string;
  surname: string;
  image: any;
  bgImage: any;
}

const ForYou = () => {

  const data: ForYouType[] = [
    {
      name: 'Yasuo',
      surname: 'O Imperdoável',
      image: images.Yasuo,
      bgImage: images.BgYasuo,
    },
    {
      name: 'Violet',
      surname: 'A Defensora de Piltover',
      image: images.Violet,
      bgImage: images.BgViolet,
    }
  ];

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<ForYouType>) => {
    return (
      <MotiView
        from={{ opacity: 0, translateX: -30 }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 400 + index * 400, type: "timing" }}
      >
        <Container>
          <InfoWrapper>
            <ChampionName>{item.name}</ChampionName>
            <ChampionSurname>{item.surname}</ChampionSurname>
          </InfoWrapper>
          <ButtonCard>
            <Chevron name="chevron-right" color="#fafafa" size={26} />
          </ButtonCard>
          <BgImage source={item.bgImage} resizeMode="contain">
            <FeaturedImage source={item.image} resizeMode='contain' />
          </BgImage>
        </Container>
      </MotiView>
    )
  }, []);

  return (
    <YStack py="$5">
      <MotiView
        from={{ opacity: 0, translateX: -30 }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 400, type: "timing" }}
      >
        <XStack
          justifyContent="space-between"
          alignItems="center"
          px="$4">
          <Title>Recomendados para você</Title>
        </XStack>
      </MotiView>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingStart: 8, marginTop: 4 }}
        data={data}
        keyExtractor={item => item.name}
        renderItem={renderItem}
      />
    </YStack>
  );
}

export default ForYou;