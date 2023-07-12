import React, { useCallback } from 'react';
import { XStack } from 'tamagui';
import { YStack } from 'tamagui';
import { SeparatorItem, ShowAllText, Title } from './styles';
import { CardProPlayerProps } from './interfaces/interfaces';
import CardProPlayer from './components/CardProPlayer/CardProPlayer';
import { ProPlayerBuilds as Assets } from '../../constants';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { MotiView } from 'moti';

const ProPlayerBuilds = () => {

  const data: CardProPlayerProps[] = [
    {
      avatar: Assets.Cariok,
      name: 'Cariok',
      avatarGuild: Assets.Pain,
      guildName: 'paiN Gaming',
      learn: Assets.Jungle,
      iconChampion: Assets.Eli1,
      iconChampion2: Assets.Eli2,
      iconChampion3: Assets.Eli3
    },
    {
      avatar: Assets.Cariok,
      name: 'Cariok2',
      avatarGuild: Assets.Pain,
      guildName: 'paiN Gaming',
      learn: Assets.Jungle,
      iconChampion: Assets.Eli1,
      iconChampion2: Assets.Eli2,
      iconChampion3: Assets.Eli3
    },
    {
      avatar: Assets.Cariok,
      name: 'Cariok3',
      avatarGuild: Assets.Pain,
      guildName: 'paiN Gaming',
      learn: Assets.Jungle,
      iconChampion: Assets.Eli1,
      iconChampion2: Assets.Eli2,
      iconChampion3: Assets.Eli3
    },
    {
      avatar: Assets.Cariok,
      name: 'Cariok4',
      avatarGuild: Assets.Pain,
      guildName: 'paiN Gaming',
      learn: Assets.Jungle,
      iconChampion: Assets.Eli1,
      iconChampion2: Assets.Eli2,
      iconChampion3: Assets.Eli3
    },
  ];

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<CardProPlayerProps>) => {
    return (
      <MotiView
        from={{ opacity: 0, translateX: -30 }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 400 + index * 400, type: "timing" }}
      >
        <CardProPlayer {...item} />
      </MotiView>
    )
  }, []);

  const ItemSeparatorComponent = () => <SeparatorItem />;

  return (
    <YStack>
      <XStack
        justifyContent="space-between"
        alignItems="center"
        pl="$4"
        pr="$4">
        <Title>Builds de pro-players</Title>
        <ShowAllText>Ver todos</ShowAllText>
      </XStack>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </YStack>
  );
}

export default ProPlayerBuilds;