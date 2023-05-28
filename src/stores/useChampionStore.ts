import { create } from "zustand";
import { data } from "../constants/data";
import { ChampionType } from "../interfaces/interfaces";

export type State = {
  champions: ChampionType[];
};

const useChampionStore = create<State>((set) => ({
  champions: data,
}));

export default useChampionStore;
