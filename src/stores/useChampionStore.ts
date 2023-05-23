import { ImageSourcePropType } from "react-native";
import { create } from "zustand";
import { images } from "../constants";
import { data } from "../constants/data";

export interface ChampionType {
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

export type State = {
  champions: ChampionType[];
};

const useChampionStore = create<State>((set) => ({
  champions: data,
}));

export default useChampionStore;
