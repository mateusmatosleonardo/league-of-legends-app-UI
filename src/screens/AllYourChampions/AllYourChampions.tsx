import React, { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { XStack } from 'tamagui';
import { AllYourChampionScreenProps, CardProps } from '../../interfaces/interfaces';
import { MotiView } from 'moti';
import { Header } from '../../components';
import { BtnGoBack } from './styles';
import { useNavigation } from '@react-navigation/native';
import useChampionStore from '../../stores/useChampionStore';
import CardChampion from './components/CardChampion';
import Icon from '@expo/vector-icons/MaterialIcons';

const AllYourChampions = () => {
  const { champions } = useChampionStore();
  const { colors } = useTheme();
  const navigation = useNavigation<AllYourChampionScreenProps>();

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<CardProps>) => {
    return (
      <MotiView
        from={{ opacity: 0, translateY: -50 }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{ delay: index * 400 + 400, type: "timing" }}
      >
        <CardChampion {...item} navigation={() => navigation.navigate('DetailsScreen', { id: item.id })} />
      </MotiView>
    );
  }, []);

  return (
    <FlatList
      data={champions}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
      contentContainerStyle={{ alignItems: 'center', backgroundColor: colors.BLACK }}
      ListHeaderComponent={
        <Header>
          <XStack w='100%' justifyContent='flex-start' pt={Platform.OS === 'ios' ? 20 : 0}>
            <BtnGoBack onPress={() => navigation.goBack()}>
              <Icon name="keyboard-arrow-left" size={30} color="#fafafa" />
            </BtnGoBack>
          </XStack>
        </Header>
      }
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AllYourChampions;