import React, { useCallback, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import Card, { ICard } from "./components/Card/Card";
import OptionRow from "./components/OptionRow/OptionRow";

import Jinx from '../../assets/champions/jinx.jpg';
import Ashe from '../../assets/champions/ashe.jpg';
import Caitlyn from '../../assets/champions/caitlyn.jpg';
import Janna from '../../assets/champions/janna.jpg';

import Braum from '../../assets/champions/tank/braum.jpg';
import DrMundo from '../../assets/champions/tank/drmundo.jpg';
import Garen from '../../assets/champions/tank/garen.jpg';

interface IList {
  data: ICard[];
}

import { styles } from "./styles";

const champions = {
  jinx: Jinx,
  ashe: Ashe,
  caitlyn: Caitlyn,
  janna: Janna,
  braum: Braum,
  drmundo: DrMundo,
  garen: Garen
}

const totalSpace: number = 90;

export const List: React.FC = () => {

  const [select, setSelect] = useState<'all' | 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks'>('all');

  const [list, setList] = useState<ICard[]>([
    {
      imgChampion: champions.jinx,
      nameChampion: 'Jinx',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: champions.ashe,
      nameChampion: 'Ashe',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: champions.caitlyn,
      nameChampion: 'Caitlyn',
      typeChampion: 'marksmen',
      typeChampionPtBr: 'atiradores'
    },
    {
      imgChampion: champions.janna,
      nameChampion: 'Janna',
      typeChampion: 'supports',
      typeChampionPtBr: 'suportes',
    },
    {
      imgChampion: champions.drmundo,
      nameChampion: 'DrMundo',
      typeChampion: 'tanks',
      typeChampionPtBr: 'tanques'
    },
    {
      imgChampion: champions.garen,
      nameChampion: 'Garen',
      typeChampion: 'tanks',
      typeChampionPtBr: 'tanques'
    },
    {
      imgChampion: champions.braum,
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
      <OptionRow select={select} setSelect={setSelect} />
      <CurrentFlatlist />
    </React.Fragment>
  )
}