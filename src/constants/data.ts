import { v4 as uuidv4 } from "uuid";
import { DetailsChampionType } from "../interfaces/interfaces";
import images from "./images";

export const data: DetailsChampionType[] = [
  {
    id: uuidv4(),
    imgChampion: images.Jinx,
    nameChampion: "Jinx",
    surname: "O Gatilho Desenfreado",
    description:
      "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
    typeChampion: "marksmen",
    typeChampionPtBr: "atiradores",
  },
  {
    id: uuidv4(),
    imgChampion: images.Ashe,
    nameChampion: "Ashe",
    typeChampion: "marksmen",
    typeChampionPtBr: "atiradores",
  },
  {
    id: uuidv4(),
    imgChampion: images.Caitlyn,
    nameChampion: "Caitlyn",
    typeChampion: "marksmen",
    typeChampionPtBr: "atiradores",
  },
  {
    id: uuidv4(),
    imgChampion: images.Janna,
    nameChampion: "Janna",
    typeChampion: "supports",
    typeChampionPtBr: "suportes",
  },
  {
    id: uuidv4(),
    imgChampion: images.DrMundo,
    nameChampion: "DrMundo",
    typeChampion: "tanks",
    typeChampionPtBr: "tanques",
  },
  {
    id: uuidv4(),
    imgChampion: images.Garen,
    nameChampion: "Garen",
    typeChampion: "tanks",
    typeChampionPtBr: "tanques",
  },
  {
    id: uuidv4(),
    imgChampion: images.Braum,
    nameChampion: "Braum",
    typeChampion: "tanks",
    typeChampionPtBr: "tanques",
  },
  {
    id: uuidv4(),
    imgChampion: images.Vi,
    nameChampion: "Vi",
    typeChampion: "assassins",
    typeChampionPtBr: "assassinos",
  },
  {
    id: uuidv4(),
    imgChampion: images.Katarina,
    nameChampion: "Katarina",
    typeChampion: "assassins",
    typeChampionPtBr: "assassinos",
  },
  {
    id: uuidv4(),
    imgChampion: images.Ekko,
    nameChampion: "Ekko",
    typeChampion: "assassins",
    typeChampionPtBr: "assassinos",
  },
  {
    id: uuidv4(),
    imgChampion: images.Irelia,
    nameChampion: "Irelia",
    typeChampion: "assassins",
    typeChampionPtBr: "assassinos",
  },
  {
    id: uuidv4(),
    imgChampion: images.Pantheon,
    nameChampion: "Pantheon",
    typeChampion: "assassins",
    typeChampionPtBr: "assassinos",
  },
];
