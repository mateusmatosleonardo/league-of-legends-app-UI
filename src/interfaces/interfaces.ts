import { NavigationProp } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";
import { RootStackParamsList } from "../routes/types";

export enum EnumTypeChampion {
  Assassins = "assassins",
  Fighters = "fighters",
  Mages = "mages",
  Marksmen = "marksmen",
  Supports = "supports",
  Tanks = "tanks",
}

export enum EnumTypeChampionBr {
  Assassinos = "assassinos",
  Lutadores = "lutadores",
  Magos = "magos",
  Atiradores = "atiradores",
  Suportes = "suportes",
  Tanques = "tanques",
}

export interface ChampionType {
  id: string;
  imgChampion: ImageSourcePropType;
  nameChampion: string;
  typeChampion: EnumTypeChampion;
  typeChampionPtBr: EnumTypeChampionBr;
}

export interface CardProps extends ChampionType {
  onPress?: () => void;
}

export interface Skills {
  nameSkill: string;
  imgSkill: ImageSourcePropType;
  descriptionSkill: string;
}

export interface DetailsChampionType extends ChampionType {
  surname?: string;
  description?: string;
  skills?: Skills[];
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
