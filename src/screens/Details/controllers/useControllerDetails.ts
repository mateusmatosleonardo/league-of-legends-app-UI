import { useRef, useState } from "react";
import { DetailsChampionType } from "../../../interfaces/interfaces";
import { data } from "../../../constants/data";

export const useControllerDetails = () => {
  const [liked, setLiked] = useState<boolean>(false);

  const [champion, setChampion] = useState<
    DetailsChampionType | null | undefined
  >(null);

  const [expanded, setExpanded] = useState(false);

  const animation = useRef<any>(null);
  const firstAnimation = useRef(true);

  const fetchChampion = (id: string) => {
    const championData = data.find((champion) => champion.id === id);
    if (championData) {
      setChampion(championData);
    }
  };

  const handleToggleExpansion = () => {
    setExpanded(!expanded);
  };

  return {
    champion,
    setChampion,
    fetchChampion,
    liked,
    setLiked,
    animation,
    firstAnimation,
    expanded,
    setExpanded,
    handleToggleExpansion,
  };
};
