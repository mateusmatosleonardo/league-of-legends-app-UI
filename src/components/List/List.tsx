import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import useChampionStore from "../../stores/useChampionStore";
import Card from "./components/Card/Card";
import OptionRow from "./components/OptionRow/OptionRow";
import Search from "./components/Search/Search";
import { styles } from "./styles";
import { MotiView } from "moti";
import { CardProps, HomeScreenProps, ListType } from "../../interfaces/interfaces";
import { useNavigation } from "@react-navigation/native";

const totalSpace: number = 90;

const List: React.FC = () => {

  const { champions } = useChampionStore();

  const [search, setSearch] = useState('');

  const [select, setSelect] = useState<'all' | 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks'>('all');

  const navigation = useNavigation<HomeScreenProps>();

  const renderItem = useCallback(({ item, index }: ListRenderItemInfo<CardProps>) => {
    return (
      <MotiView
        from={{ opacity: 0, translateX: 20 }}
        animate={{
          opacity: 1,
          translateX: 0,
        }}
        transition={{ delay: 380 + index * 380 }}
      >
        <Card {...item} onPress={() => navigation.navigate('DetailsScreen', { id: item.id })} />
      </MotiView>
    )
  }, [])

  const filteredAssassins = champions.filter(c => c.typeChampion.includes('assassins'));
  const filteredFighters = champions.filter(c => c.typeChampion.includes('fighters'));
  const filteredMages = champions.filter(c => c.typeChampion.includes('mages'));
  const filteredMarksmen = champions.filter(c => c.typeChampion.includes('marksmen'));
  const filteredSupports = champions.filter(c => c.typeChampion.includes('supports'));
  const filteredTanks = champions.filter(c => c.typeChampion.includes('tanks'));
  const filteredChampion = search.length > 0 ? champions.filter(c => c.nameChampion.includes(search)) : champions;

  const SelectedFlatlist: React.FC<ListType> = ({ data }: ListType) => {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={data.sort((a, b) => a.nameChampion.localeCompare(b.nameChampion))}
        keyExtractor={item => item.nameChampion}
        renderItem={renderItem}
        getItemLayout={(data, index) => (
          { length: totalSpace, offset: totalSpace * index, index }
        )}
      />
    )
  }

  const CurrentFlatlist: React.FC = () => {
    return (
      <SelectedFlatlist
        data={select === 'all' ?
          champions : select === 'assassins' ?
            filteredAssassins : select === 'fighters' ?
              filteredFighters : select === 'mages' ?
                filteredMages : select === 'marksmen' ?
                  filteredMarksmen : select === 'supports' ?
                    filteredSupports : select === 'tanks' ?
                      filteredTanks : []} />
    )
  }

  return (
    <React.Fragment>
      <OptionRow select={select} setSelect={setSelect} disabled={search.length > 0 ? true : false} />
      {search.length > 0 ?
        <FlatList
          data={filteredChampion}
          keyExtractor={item => item.nameChampion}
          renderItem={renderItem}
          contentContainerStyle={{ paddingHorizontal: 20 }}
        /> : <CurrentFlatlist />}
      <Search
        value={search}
        onChangeText={setSearch}
      />
    </React.Fragment>
  )
}

export default List;