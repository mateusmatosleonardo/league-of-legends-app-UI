import { NavigationProp } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";
import { RootStackParamsList } from "../routes/types";

export interface ChampionType {
  id: string;
  imgChampion: ImageSourcePropType;
  nameChampion: string;
  typeChampion:
    | "assassins"
    | "fighters"
    | "mages"
    | "marksmen"
    | "supports"
    | "tanks";
  typeChampionPtBr:
    | "assassinos"
    | "lutadores"
    | "magos"
    | "atiradores"
    | "suportes"
    | "tanques";
}

export interface CardProps extends ChampionType {
  onPress?: () => void;
}

export interface DetailsChampionType extends ChampionType {
  surname?: string;
  description?: string;
}

export interface OptionRowProps {
  select:
    | "all"
    | "assassins"
    | "fighters"
    | "mages"
    | "marksmen"
    | "supports"
    | "tanks";
  setSelect: (
    select:
      | "all"
      | "assassins"
      | "fighters"
      | "mages"
      | "marksmen"
      | "supports"
      | "tanks"
  ) => void;
  disabled: boolean;
}

export interface SearchProps {
  value: string;
  onChangeText: (text: string) => void;
}

export interface ListType {
  data: CardProps[];
}

export type HomeScreenProps = NavigationProp<RootStackParamsList, "Home">;
