import { v4 as uuidv4 } from "uuid";
import {
  DetailsChampionType,
  EnumTypeChampion,
  EnumTypeChampionBr,
} from "../interfaces/interfaces";
import images from "./images";
import skills from "./skills";

export const data: DetailsChampionType[] = [
  {
    id: uuidv4(),
    imgChampion: images.Jinx,
    nameChampion: "Jinx",
    surname: "O Gatilho Desenfreado",
    description:
      "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
    skills: [
      {
        nameSkill: "PASSIVA - ANIME-SE!",
        imgSkill: skills.Passiva,
        descriptionSkill:
          "Jinx recebe um aumento drástico de Velocidade de Movimento e de Velocidade de Ataque sempre que ajuda a destruir uma estrutura ou a abater um Campeão inimigo ou monstro épico da selva.",
      },
      {
        nameSkill: "1 - TROCANDO!",
        imgSkill: skills.Trocando,
        descriptionSkill:
          "Jinx modifica seus ataques básicos ao trocar entre Pow-Pow, sua metralhadora, e Fishbones, seu lança-mísseis. Ataques com Pow-Pow concedem Velocidade de Ataque, enquanto ataques com Fishbones causam dano em área de ação, aumentam o alcance e drenam Mana.",
      },
      {
        nameSkill: "2 - ZAP!",
        imgSkill: skills.Zap,
        descriptionSkill:
          "Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.",
      },
      {
        nameSkill: "3 - MORDIDINHA FLAMEJANTE!",
        imgSkill: skills.MordidinhaFlamejante,
        descriptionSkill:
          "Jinx arremessa uma fileira de granadas imobilizantes que explodem após 5s, deixando os inimigos em chamas. Mordidinha Flamejante morde os Campeões inimigos que caminharem sobre ela, enraizando-os no local.",
      },
      {
        nameSkill: "ULTIMATE - SUPER MEGA MÍSSIL DA MORTE!",
        imgSkill: skills.SuperMegaMissilDaMorte,
        descriptionSkill:
          "Jinx dispara no mapa um supermíssil que acumula dano ao longo do trajeto. O míssil explode ao colidir com um Campeão inimigo, causando dano a ele e a inimigos ao redor com base na Vida perdida deles.",
      },
    ],
    typeChampion: EnumTypeChampion.Marksmen,
    typeChampionPtBr: EnumTypeChampionBr.Atiradores,
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
