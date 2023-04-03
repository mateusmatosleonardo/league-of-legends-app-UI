import React from 'react';
import * as S from './styles';

interface SelectProps {
  select: 'all' | 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks';
  setSelect: (select: 'all' | 'assassins' | 'fighters' | 'mages' | 'marksmen' | 'supports' | 'tanks') => void;
}

const OptionRow: React.FC<SelectProps> = ({ select, setSelect }: SelectProps) => {
  return (
    <S.WrapperSelect>
      <S.TypesOfChampions
        horizontal
        overScrollMode="never"
        bounces={false}
        showsHorizontalScrollIndicator={false}
      >
        <S.HandleType onPress={() => setSelect('all')}>
          <S.Type style={select === 'all' ? { color: "#cd8d04" } : null}>Todos</S.Type>
          {select === 'all' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('assassins')}>
          <S.Type style={select === 'assassins' ? { color: "#cd8d04" } : null}>Assassinos</S.Type>
          {select === 'assassins' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('fighters')}>
          <S.Type style={select === 'fighters' ? { color: "#cd8d04" } : null}>Lutadores</S.Type>
          {select === 'fighters' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('mages')}>
          <S.Type style={select === 'mages' ? { color: "#cd8d04" } : null}>Magos</S.Type>
          {select === 'mages' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('marksmen')}>
          <S.Type style={select === 'marksmen' ? { color: "#cd8d04" } : null}>Atiradores</S.Type>
          {select === 'marksmen' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('supports')}>
          <S.Type style={select === 'supports' ? { color: "#cd8d04" } : null}>Suportes</S.Type>
          {select === 'supports' ? <S.Hatch /> : null}
        </S.HandleType>
        <S.HandleType onPress={() => setSelect('tanks')} style={{ marginRight: 0 }}>
          <S.Type style={select === 'tanks' ? { color: "#cd8d04" } : null} >Tanques</S.Type>
          {select === 'tanks' ? <S.Hatch /> : null}
        </S.HandleType>
      </S.TypesOfChampions>
    </S.WrapperSelect>
  );
}

export default OptionRow;