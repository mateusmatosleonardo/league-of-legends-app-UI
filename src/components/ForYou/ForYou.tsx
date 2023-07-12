import React, { useCallback } from 'react';
import { Container, BgImage, FeaturedImage, Title } from './styles';
import { XStack, YStack } from 'tamagui';
import { images } from '../../constants';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { MotiView } from 'moti';

interface ForYouType {
  name: string;
  image: any;
  bgImage: any;
}

const ForYou = () => {

  const data: ForYouType[] = [
    {
      name: 'Yasuo',
      image: images.Yasuo,
      bgImage: images.BgYasuo,
    },
    {
      name: 'Violet',
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
        transition={{ delay: 500, type: "timing" }}
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