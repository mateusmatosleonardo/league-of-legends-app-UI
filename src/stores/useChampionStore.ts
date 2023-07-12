import { create } from "zustand";
import { data } from "../constants/data";
import { DetailsChampionType } from "../interfaces/interfaces";

export type State = {
  champions: DetailsChampionType[];
};

const useChampionStore = create<State>((set) => ({
  champions: data,
}));

export default useChampionStore;
