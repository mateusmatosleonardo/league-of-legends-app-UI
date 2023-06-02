import { v4 as uuidv4 } from "uuid";
import {
  DetailsChampionType,
  EnumDifficulty,
  EnumType,
  EnumTypeBr,
} from "../interfaces/interfaces";
import images from "./images";
import skills from "./skills";

export const data: DetailsChampionType[] = [
  {
    id: uuidv4(),
    image: images.Jinx,
    name: "Jinx",
    surname: "O Gatilho Desenfreado",
    description:
      "Uma criminosa impulsiva e maníaca de Zaun, Jinx vive para disseminar o caos sem se preocupar com as consequências. Com um arsenal de armas mortais, ela detona as explosões mais altas e mais luminosas para deixar um rastro de destruição e pânico por onde passa. Jinx abomina o tédio e deixa alegremente sua marca caótica de pandemônio aonde quer que vá.",
    skills: [
      {
        nameSkill: "PASSIVA - ANIME-SE!",
        iconSkill: skills.Passiva,
        descriptionSkill:
          "Jinx recebe um aumento drástico de Velocidade de Movimento e de Velocidade de Ataque sempre que ajuda a destruir uma estrutura ou a abater um Campeão inimigo ou monstro épico da selva.",
      },
      {
        nameSkill: "1 - TROCANDO!",
        iconSkill: skills.Trocando,
        descriptionSkill:
          "Jinx modifica seus ataques básicos ao trocar entre Pow-Pow, sua metralhadora, e Fishbones, seu lança-mísseis. Ataques com Pow-Pow concedem Velocidade de Ataque, enquanto ataques com Fishbones causam dano em área de ação, aumentam o alcance e drenam Mana.",
      },
      {
        nameSkill: "2 - ZAP!",
        iconSkill: skills.Zap,
        descriptionSkill:
          "Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.",
      },
      {
        nameSkill: "3 - MORDIDINHA FLAMEJANTE!",
        iconSkill: skills.MordidinhaFlamejante,
        descriptionSkill:
          "Jinx arremessa uma fileira de granadas imobilizantes que explodem após 5s, deixando os inimigos em chamas. Mordidinha Flamejante morde os Campeões inimigos que caminharem sobre ela, enraizando-os no local.",
      },
      {
        nameSkill: "ULTIMATE - SUPER MEGA MÍSSIL DA MORTE!",
        iconSkill: skills.SuperMegaMissilDaMorte,
        descriptionSkill:
          "Jinx dispara no mapa um supermíssil que acumula dano ao longo do trajeto. O míssil explode ao colidir com um Campeão inimigo, causando dano a ele e a inimigos ao redor com base na Vida perdida deles.",
      },
    ],
    type: EnumType.Marksmen,
    typeBr: EnumTypeBr.Atiradores,
    function: "Atirador",
    iconFunction: skills.Atirador,
    difficulty: EnumDifficulty.easy,
  },
  {
    id: uuidv4(),
    image: images.KaiSa,
    name: "Kai'Sa",
    surname: "A Filha do Vazio",
    description:
      "Capturada pelo Vazio quando era apenas uma criança, Kai'Sa conseguiu sobreviver por pura persistência e força de vontade. Suas experiências fizeram dela uma caçadora mortífera e, para alguns, a anunciadora de um futuro que seria melhor não viver para ver. Inserida em uma desconfortável simbiose com uma carapaça viva do Vazio, é chegada a hora de decidir se ela perdoará os mortais que a chamam de monstro e derrotará a ameaçadora escuridão junto a eles… ou se ela simplesmente os esquecerá, deixando o Vazio consumir o mundo que um dia também a deixou para trás.",
    skills: [
      {
        nameSkill: "PASSIVA - SEGUNDA PELE",
        iconSkill: skills.k1,
        descriptionSkill:
          "Os ataques básicos de Kai'Sa acumulam Plasma, causando Dano Mágico adicional crescente. Efeitos imobilizadores de aliados ajudam a acumular Plasma. Além disso, as aquisições de itens de Kai'Sa aprimoram suas habilidades básicas, deixando-as mais poderosas.",
      },
      {
        nameSkill: "1 - CHUVA ICATHIANA",
        iconSkill: skills.k2,
        descriptionSkill:
          "Kai'Sa dispara uma chuva de projéteis que vão atrás de alvos próximos. Arma Viva: Chuva Icathiana é aprimorada e lança mais mísseis.",
      },
      {
        nameSkill: "2 - EXPLORADORA DO VAZIO",
        iconSkill: skills.k3,
        descriptionSkill:
          "Kai'Sa lança um projétil de longo alcance, revelando e marcando inimigos com sua passiva. Arma Viva: Exploradora do Vazio é aprimorada, fazendo com que aplique mais marcas de Plasma e reduza o Tempo de Recarga ao atingir um Campeão.",
      },
      {
        nameSkill: "3 - SOBRECARGA",
        iconSkill: skills.k4,
        descriptionSkill:
          "Kai'Sa aumenta brevemente sua Velocidade de Movimento, depois aumenta sua Velocidade de Ataque. Arma Viva: Sobrecarga é aprimorada e concede Invisibilidade por um breve período.",
      },
      {
        nameSkill: "ULTIMATE - INSTINTO ASSASSINO",
        iconSkill: skills.k5,
        descriptionSkill:
          "Kai'Sa avança para perto de um Campeão inimigo afetado por Plasma, ganhando um escudo temporário.",
      },
    ],
    type: EnumType.Assassins,
    typeBr: EnumTypeBr.Assassinos,
    function: "Assassino",
    iconFunction: skills.Assassino,
    difficulty: EnumDifficulty.medium,
  },
  {
    id: uuidv4(),
    image: images.Vi,
    name: "Vi",
    surname: "A Defensora de Piltover",
    description:
      "Antiga criminosa das ruas impiedosas de Zaun, Vi é uma mulher temível, impulsiva e explosiva com um respeito bem frágil pelas autoridades. Ao crescer praticamente sozinha, Vi desenvolveu instintos de sobrevivência afiados e um senso de humor ácido. Agora, trabalhando lado a lado com os Vigias para manter a paz em Piltover, ela porta poderosas manoplas hextec capazes de esmagar paredes e suspeitos com facilidade.",
    skills: [
      {
        nameSkill: "PASSIVA - PANCADA CERTEIRA",
        iconSkill: skills.vi1,
        descriptionSkill:
          "Todo terceiro ataque contra o mesmo inimigo causa dano equivalente a um percentual da Vida máxima do alvo, reduz a Armadura do alvo e concede Velocidade de Ataque a Vi.",
      },
      {
        nameSkill: "1 - QUEBRA-COFRES",
        iconSkill: skills.vi2,
        descriptionSkill:
          "Vi carrega suas manoplas e desfere um soco capaz de quebrar cofres, empurrando-a para a frente. Os inimigos que ela atingir são empurrados para trás e recebem um acúmulo de Pancada Certeira.",
      },
      {
        nameSkill: "2 - BLINDAGEM",
        iconSkill: skills.vi3,
        descriptionSkill:
          "Vi ganha acúmulos de Blindagem ao acertar algum inimigo com um ataque ou uma habilidade. Ativar Blindagem gera um escudo que absorve dano. Com o máximo de acúmulos, Vi também recebe Velocidade de Movimento.",
      },
      {
        nameSkill: "3 - FORÇA EXCESSIVA",
        iconSkill: skills.vi4,
        descriptionSkill:
          "O próximo ataque de Vi atravessará seu alvo, causando dano aos inimigos atrás dele.",
      },
      {
        nameSkill: "ULTIMATE - SAQUE E ENTERRADA",
        iconSkill: skills.vi5,
        descriptionSkill:
          "Vi persegue um inimigo em alta velocidade, arremessando para o lado qualquer um que estiver em seu trajeto. Ao alcançar o alvo, ela o arremessa ao ar, salta atrás dele e o golpeia de volta ao chão.",
      },
    ],
    type: EnumType.Fighters,
    typeBr: EnumTypeBr.Lutadores,
    function: "Lutador",
    iconFunction: skills.Lutador,
    difficulty: EnumDifficulty.easy,
  },
];

/*
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
*/
