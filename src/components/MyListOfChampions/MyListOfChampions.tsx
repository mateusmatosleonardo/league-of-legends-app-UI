import React, { useCallback } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { MotiView } from "moti";
import { CardProps, HomeScreenProps } from "../../interfaces/interfaces";
import { useNavigation } from "@react-navigation/native";
import { XStack, YStack } from "tamagui";
import { Pressable, ShowAllText, Title } from "./styles";
import useChampionStore from "../../stores/useChampionStore";
import Card from "./components/Card/Card";

const MyListOfChampions: React.FC = () => {

  const { champions } = useChampionStore();

  const navigation = useNavigation<HomeScreenProps>();

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<CardProps>) => {
    return (
      <MotiView
        from={{ opacity: 0, translateX: -30 }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 400 + index * 400, type: "timing" }}
      >
        <Card {...item} navigation={() => navigation.navigate('DetailsScreen', { id: item.id })} />
      </MotiView>
    )
  }, []);

  const handleNavigation = () => navigation.navigate('AllYourChampions');

  return (
    <YStack>
      <MotiView
        from={{ opacity: 0, translateX: -30, }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 400, type: "timing" }}
      >
        <XStack
          justifyContent="space-between"
          alignItems="center"
          pb="$5"
          pl="$4"
          pr="$4">
          <Title>Meus campeões</Title>
          <Pressable onPress={handleNavigation}>
            <ShowAllText>Ver todos</ShowAllText>
          </Pressable>
        </XStack>
      </MotiView>
      <FlatList
        data={champions}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        contentContainerStyle={{ paddingStart: 20, paddingEnd: 5 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </YStack>
  )
}

export default MyListOfChampions;