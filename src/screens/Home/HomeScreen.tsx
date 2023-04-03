import React from 'react';
import { Layout, Header, List } from '../../components';
import { Logo } from '../../constants';
import { Title } from './styles';

const HomeScreen: React.FC = () => {
  return (
    <Layout>
      <Header>
        <Logo width={38} height={38} />
      </Header>
      <Title>Selecione{' ' + ' '}seu{' ' + ' '}campeão</Title>
      <List />
    </Layout >
  );
}

export default HomeScreen;