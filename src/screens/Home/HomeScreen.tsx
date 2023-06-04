import React from 'react';
import { Layout, Header, List, CustomText } from '../../components';
import { Logo } from '../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme/theme';

const HomeScreen: React.FC = () => {

  const { colors, sizes, spacing, fonts } = theme;

  return (
    <Layout>
      <Header>
        <Logo width={38} height={38} />
      </Header>
      <CustomText
        color={colors.WHITE}
        size={RFValue(sizes.xl) + 1.5}
        fontFamily={fonts.Montserrat_SemiBold}
        pt={spacing.md}
        pb={spacing.sm}
        alignment='center'
      >
        Selecione{' ' + ' '}seu{' ' + ' '}campeão
      </CustomText>
      <List />
    </Layout >
  );
}

export default HomeScreen;