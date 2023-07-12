import React from 'react';
import { Layout, Header, List, ForYou, ProPlayerBuilds } from '../../components';
import { Logo } from '../../constants';
import { ScrollView, SectionList, SectionListRenderItem, View } from 'react-native';
import { useTheme } from 'styled-components';

type Section = {
  title: string;
  data: string[];
};

const HomeScreen: React.FC = () => {

  const { colors } = useTheme();

  const sections: Section[] = [
    { title: 'Header', data: ['header'] },
    { title: 'List', data: ['list'] },
    { title: 'For You', data: ['forYou'] },
    { title: 'ProPlayerBuilds', data: ['proPlayerBuilds'] },
  ];

  const renderItem: SectionListRenderItem<string, Section> = ({ item, section }) => {
    switch (section.title) {
      case 'Header':
        return (
          <Header>
            <Logo width={38} height={38} />
          </Header>
        );
      case 'List':
        return <List />;
      case 'For You':
        return <ForYou />;
      case 'ProPlayerBuilds':
        return <ProPlayerBuilds />;
      default:
        return null;
    }
  };

  return (
    <View style={{ backgroundColor: colors.BLACK, flex: 1 }}>
      <SectionList
        sections={sections}
        renderItem={renderItem}
        keyExtractor={(item, index) => item + index}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ backgroundColor: 'transparent' }}
      />
    </View>
  );
}

export default HomeScreen;