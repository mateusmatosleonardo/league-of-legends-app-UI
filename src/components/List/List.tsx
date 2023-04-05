import React, { useCallback, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import Card, { ICard } from "./components/Card/Card";
import OptionRow from "./components/OptionRow/OptionRow";
import Search from "./components/Search/Search";
import { images } from '../../constants';
import { styles } from "./styles";

interface IList {
  data: ICard[];
}

const totalSpace: number = 90;

const List: React.FC = () => {

  const [dataChampions, setDataChampions] = useState({});

  const [search, setSearch] = useState('');

  const [select, setSelect] = useState<'all' | 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks'>('all');

  const [list, setList] = useState<ICard[]>([
    {
      imgChampion: images.Jinx,
      nameChampion: 'Jinx',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: images.Ashe,
      nameChampion: 'Ashe',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: images.Caitlyn,
      nameChampion: 'Caitlyn',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: images.Janna,
      nameChampion: 'Janna',
      typeChampion: 'supports',
      typeChampionPtBr: 'suportes',
    },
    {
      imgChampion: images.DrMundo,
      nameChampion: 'DrMundo',
      typeChampion: 'tanks',
      typeChampionPtBr: 'tanques'
    },
    {
      imgChampion: images.Garen,
      nameChampion: 'Garen',
      typeChampion: 'tanks',
      typeChampionPtBr: 'tanques'
    },
    {
      imgChampion: images.Braum,
      nameChampion: 'Braum',
      typeChampion: 'tanks',
      typeChampionPtBr: 'tanques'
    },
  ]);

  const renderItem = useCallback(({ item }: ListRenderItemInfo<ICard>) => <Card {...item} />, [])

  const filteredAssassins = list.filter(c => c.typeChampion.includes('assassins'));
  const filteredFighters = list.filter(c => c.typeChampion.includes('fighters'));
  const filteredMages = list.filter(c => c.typeChampion.includes('mages'));
  const filteredMarksmen = list.filter(c => c.typeChampion.includes('marksmen'));
  const filteredSupports = list.filter(c => c.typeChampion.includes('supports'));
  const filteredTanks = list.filter(c => c.typeChampion.includes('tanks'));
  const filteredChampion = search.length > 0 ? list.filter(c => c.nameChampion.includes(search)) : list;

  const SelectedFlatlist: React.FC<IList> = ({ data }: IList) => {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={data}
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
          list : select === 'assassins' ?
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