import React from "react";
import * as S from "./styles";
import { FooterDetailsProps } from "./interface";

const FooterDetails: React.FC<FooterDetailsProps> = ({
  icon,
  roleOfChampion,
  difficulty,
  renderDifficulty
}: FooterDetailsProps) => {
  return (
    <S.Container>
      <S.WrapperFunction>
        <S.IconFunction
          source={icon}
        />
        <S.WrapperText>
          <S.StaticTitleFunction>Função</S.StaticTitleFunction>
          <S.TitleFunction>{roleOfChampion}</S.TitleFunction>
        </S.WrapperText>
      </S.WrapperFunction>

      <S.WrapperDifficulty>
        <S.TitleDifficulty>Dificuldade</S.TitleDifficulty>
        <S.Difficulty>{difficulty}</S.Difficulty>
        <S.WrapperDifficultyIcons>
          {renderDifficulty}
        </S.WrapperDifficultyIcons>
      </S.WrapperDifficulty>
    </S.Container>
  )
}

export default FooterDetails;