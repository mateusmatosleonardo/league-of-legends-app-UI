import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';

import Logo from '../../assets/logo.svg';

import { FontAwesome5 } from '@expo/vector-icons';
import {
  HandleType,
  Hatch,
  Title,
  Type,
  TypesOfChampions
} from './styles';

const HomeScreen: React.FC = () => {

  const [select, setSelect] = useState<'marksman' | 'support' | 'tank' | 'jungle'>('marksman');

  return (
    <Layout>
      <Header>
        <Logo width={45} height={45} />
        <FontAwesome5 name="user" size={26} color="#353534" />
      </Header>

      <Title>Choose{' ' + ' '}your{' ' + ' '}champion</Title>

      <TypesOfChampions>
        <HandleType onPress={() => setSelect('marksman')}>
          <Type style={select === 'marksman' ? { color: "#cd8d04" } : null}>Marksman</Type>
          {select === 'marksman' ? <Hatch /> : null}
        </HandleType>
        <HandleType onPress={() => setSelect('support')}>
          <Type style={select === 'support' ? { color: "#cd8d04" } : null}>Support</Type>
          {select === 'support' ? <Hatch /> : null}
        </HandleType>
        <HandleType onPress={() => setSelect('tank')}>
          <Type style={select === 'tank' ? { color: "#cd8d04" } : null} >Tank</Type>
          {select === 'tank' ? <Hatch /> : null}
        </HandleType>
        <HandleType onPress={() => setSelect('jungle')}>
          <Type style={select === 'jungle' ? { color: "#cd8d04" } : null}>Jungle</Type>
          {select === 'jungle' ? <Hatch /> : null}
        </HandleType>
      </TypesOfChampions>
    </Layout>
  );
}

export default HomeScreen;