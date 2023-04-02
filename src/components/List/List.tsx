import React, { useCallback, useState } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import Card, { ICard } from "./components/Card/Card";
import Select from "./components/Select/Select";

import Jinx from '../../assets/champions/jinx.jpg';
import Ashe from '../../assets/champions/ashe.jpg';
import Caitlyn from '../../assets/champions/caitlyn.jpg';
import Janna from '../../assets/champions/janna.jpg';

import Braum from '../../assets/champions/tank/braum.jpg';
import DrMundo from '../../assets/champions/tank/drmundo.jpg';
import Garen from '../../assets/champions/tank/garen.jpg';

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

const totalSpace = 90;

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

  const filteredTanks = list.filter(c => c.typeChampion.includes('tanks'));

  const FlatListRender: React.FC = (props: any) => {
    return (
      <FlatList
        contentContainerStyle={styles.list}
        data={props}
        keyExtractor={item => item.nameChampion}
        renderItem={renderItem}
        getItemLayout={(data, index) => (
          { length: totalSpace, offset: totalSpace * index, index }
        )}
      />
    )
  }

  const Selected: React.FC = () => {
    return (
      <React.Fragment>
        {select === 'all' ? <FlatList
          contentContainerStyle={styles.list}
          data={list}
          keyExtractor={item => item.nameChampion}
          renderItem={renderItem}
        /> : select === 'assassins' ?
          <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : select === 'fighters' ? <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : select === 'mages' ? <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : select === 'marksmen' ? <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : select === 'supports' ? <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : select === 'tanks' ? <FlatList
            contentContainerStyle={styles.list}
            data={filteredTanks}
            keyExtractor={item => item.nameChampion}
            renderItem={renderItem}
          /> : null}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Select select={select} setSelect={setSelect} />
      <Selected />
    </React.Fragment>
  )
}

