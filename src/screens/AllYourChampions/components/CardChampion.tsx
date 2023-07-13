import { CardProps } from "../../../interfaces/interfaces";
import { Stack, YStack } from "tamagui";
import { Dimensions, Image, Pressable } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

const { width } = Dimensions.get('window');

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_SemiBold};
  font-size: ${({ theme }) => RFValue(theme.sizes.lg)}px;
  color: ${({ theme }) => theme.colors.WHITE};
`;

export const Surname = styled.Text`
  font-family: ${({ theme }) => theme.fonts.Montserrat_Regular};
  font-size: ${({ theme }) => RFValue(theme.sizes.xs)}px;
  color: ${({ theme }) => theme.colors.GRAY_SECONDARY};
  margin-top: 4px;
`;

const CardChampion = ({ ...item }: CardProps) => {

  return (
    <Pressable onPress={item.navigation}>
      <YStack
        w={(width / 2) - 20}
        borderRadius={8}
        marginHorizontal="$2"
        marginBottom="$2"
      >
        <Stack margin="$2" borderRadius={8}>
          <Image
            source={item.image}
            style={{ width: '100%', height: 180, overflow: 'hidden', borderRadius: 8, }}
            resizeMode='cover'
          />
        </Stack>
        <YStack pl="$2">
          <Name>{item.name}</Name>
          <Surname>{item.surname}</Surname>
        </YStack>
      </YStack>
    </Pressable>
  )
}

export default CardChampion;