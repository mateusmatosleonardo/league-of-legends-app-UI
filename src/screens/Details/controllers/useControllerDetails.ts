import { useRef, useState } from "react";
import { DetailsChampionType } from "../../../interfaces/interfaces";
import { data } from "../../../constants/data";

export const useControllerDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const [liked, setLiked] = useState<boolean>(false);
  const [champion, setChampion] = useState<
    DetailsChampionType | null | undefined
  >(null);

  const animation = useRef<any>(null);
  const firstAnimation = useRef(true);

  const fetchChampion = (id: string) => {
    const championData = data.find((champion) => champion.id === id);
    if (championData) {
      setChampion(championData);
    }
  };

  const handleToggleExpansion = () => {
    if (!expanded) {
      setHeight(50);
    } else {
      setHeight(0);
    }
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
    height,
    setHeight,
    expanded,
    setExpanded,
    handleToggleExpansion,
  };
};
