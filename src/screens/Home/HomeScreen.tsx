import React from 'react';

import Layout from '../../components/Layout/Layout';
import Header from '../../components/Header/Header';

import Logo from '../../assets/logo.svg';

import { FontAwesome5 } from '@expo/vector-icons';
import * as S from './styles';
import { List } from '../../components/List';


const HomeScreen: React.FC = () => {

  return (
    <Layout>

      <Header>
        <Logo width={38} height={38} />
        <FontAwesome5 name="user" size={20} color="#353534" />
      </Header>

      <S.Title>Selecione{' ' + ' '}seu{' ' + ' '}campeão</S.Title>

      <List />

      <S.EmptyContainer />

    </Layout >
  );
}

export default HomeScreen;