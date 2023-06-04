import React from "react";
import { FooterDetailsProps } from "./interface";
import { StaticTitleFunction, TitleDifficulty, TitleFunction, Difficulty } from "./styles";
import { Avatar, Stack, XStack } from "tamagui";

const FooterDetails: React.FC<FooterDetailsProps> = ({
  icon,
  roleOfChampion,
  difficulty,
  renderDifficulty
}: FooterDetailsProps) => {
  return (
    <XStack
      w="100%"
      px="$4"
      pb="$3.5"
      mt="$6"
      justifyContent="space-between"
      alignItems="center"
    >
      <XStack justifyContent="space-between" alignItems="center">
        <Avatar size="$7">
          <Avatar.Image
            source={icon}
          />
        </Avatar>
        <Stack ml="$5">
          <StaticTitleFunction>Função</StaticTitleFunction>
          <TitleFunction>{roleOfChampion}</TitleFunction>
        </Stack>
      </XStack>
      <Stack>
        <TitleDifficulty>Dificuldade</TitleDifficulty>
        <Difficulty>{difficulty}</Difficulty>
        <XStack>
          {renderDifficulty}
        </XStack>
      </Stack>
    </XStack>
  )
}

export default FooterDetails;