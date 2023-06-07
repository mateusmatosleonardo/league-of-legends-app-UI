import { v4 as uuidv4 } from "uuid";
import {
  DetailsChampionType,
  EnumDifficulty,
  EnumFunction,
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
        iconSkill: skills.j0,
        descriptionSkill:
          "Jinx recebe um aumento drástico de Velocidade de Movimento e de Velocidade de Ataque sempre que ajuda a destruir uma estrutura ou a abater um Campeão inimigo ou monstro épico da selva.",
      },
      {
        nameSkill: "1 - TROCANDO!",
        iconSkill: skills.j1,
        descriptionSkill:
          "Jinx modifica seus ataques básicos ao trocar entre Pow-Pow, sua metralhadora, e Fishbones, seu lança-mísseis. Ataques com Pow-Pow concedem Velocidade de Ataque, enquanto ataques com Fishbones causam dano em área de ação, aumentam o alcance e drenam Mana.",
      },
      {
        nameSkill: "2 - ZAP!",
        iconSkill: skills.j2,
        descriptionSkill:
          "Jinx usa Zapper, sua pistola de choques, para disparar um projétil que causa dano ao primeiro inimigo atingido, reduzindo sua velocidade e revelando-o.",
      },
      {
        nameSkill: "3 - MORDIDINHA FLAMEJANTE!",
        iconSkill: skills.j3,
        descriptionSkill:
          "Jinx arremessa uma fileira de granadas imobilizantes que explodem após 5s, deixando os inimigos em chamas. Mordidinha Flamejante morde os Campeões inimigos que caminharem sobre ela, enraizando-os no local.",
      },
      {
        nameSkill: "ULTIMATE - SUPER MEGA MÍSSIL DA MORTE!",
        iconSkill: skills.j4,
        descriptionSkill:
          "Jinx dispara no mapa um supermíssil que acumula dano ao longo do trajeto. O míssil explode ao colidir com um Campeão inimigo, causando dano a ele e a inimigos ao redor com base na Vida perdida deles.",
      },
    ],
    type: EnumType.Marksmen,
    typeBr: EnumTypeBr.Atiradores,
    function: EnumFunction.Shooter,
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
    function: EnumFunction.Assassin,
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
    function: EnumFunction.Fighter,
    iconFunction: skills.Lutador,
    difficulty: EnumDifficulty.easy,
  },
  {
    id: uuidv4(),
    image: images.Ahri,
    name: "Ahri",
    surname: "A Raposa de Nove Caudas",
    description:
      "A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma predadora poderosa, porém rebelde, Ahri agora viaja pelo mundo em busca de vestígios dos seus antepassados enquanto tenta substituir as memórias roubadas por novas de sua própria autoria.",
    skills: [
      {
        nameSkill: "PASSIVA - FURTO DE ESSÊNCIA",
        iconSkill: skills.a1,
        descriptionSkill:
          "Quando Ahri atinge um alvo com uma habilidade, ela ganha um acúmulo de Furto de Essência. Com uma quantidade suficiente de acúmulos, a próxima habilidade dela a atingir um inimigo também a cura.",
      },
      {
        nameSkill: "1 - ORBE DA ILUSÃO",
        iconSkill: skills.a2,
        descriptionSkill:
          "Ahri lança e puxa de volta seu orbe, causando Dano Mágico na ida e Dano Verdadeiro na volta.",
      },
      {
        nameSkill: "2 - FOGO DE RAPOSA",
        iconSkill: skills.a3,
        descriptionSkill:
          "Ahri recebe um breve impulso de Velocidade de Movimento e lança três Fogos de Raposa que perseguem e atacam inimigos próximos.",
      },
      {
        nameSkill: "3 - ENCANTO",
        iconSkill: skills.a4,
        descriptionSkill:
          "Ahri manda um beijo que causa dano e encanta um inimigo, interrompendo imediatamente qualquer habilidade de movimento em progresso e fazendo com que ele ande inofensivamente em sua direção. O alvo temporariamente sofre dano aumentado de Ahri.",
      },
      {
        nameSkill: "ULTIMATE - ÍMPETO ESPIRITUAL",
        iconSkill: skills.a5,
        descriptionSkill:
          "Ahri avança e dispara raios de essência, causando dano a inimigos próximos. Ímpeto Espiritual pode ser conjurado até três vezes antes de entrar em Tempo de Recarga.",
      },
    ],
    type: EnumType.Wizards,
    typeBr: EnumTypeBr.Magos,
    function: EnumFunction.Mage,
    iconFunction: skills.Mago,
    difficulty: EnumDifficulty.medium,
  },
  {
    id: uuidv4(),
    image: images.Thresh,
    name: "Thresh",
    surname: "O Guardião das Correntes",
    description:
      "Sádico e astuto, Thresh é um espírito ambicioso e incansável das Ilhas das Sombras. Ele já foi guardião de incontáveis segredos arcanos, mas acabou sucumbindo a poderes maiores do que a vida e a morte. Agora, Thresh vive atormentando e corrompendo vítimas de forma lenta e dolorosamente criativa. Seus alvos sofrem muito além de seus corpos mortais, pois Thresh aflige as próprias almas, aprisionando-as em sua lanterna maldita para torturá-las por toda a eternidade.",
    skills: [
      {
        nameSkill: "PASSIVA - CONDENAÇÃO",
        iconSkill: skills.t0,
        descriptionSkill:
          "Thresh pode colher as almas de inimigos que morrerem perto dele, recebendo Armadura e Poder de Habilidade permanentemente.",
      },
      {
        nameSkill: "1 - SENTENÇA",
        iconSkill: skills.t1,
        descriptionSkill:
          "Thresh prende um inimigo em suas correntes e puxa em sua direção. Ativar essa habilidade uma segunda vez puxa Thresh em direção ao inimigo.",
      },
      {
        nameSkill: "2 - PASSAGEM SOMBRIA",
        iconSkill: skills.t2,
        descriptionSkill:
          "Arremessa uma lanterna em um local-alvo. Aliados podem clicar na lanterna para avançar na direção de Thresh.",
      },
      {
        nameSkill: "3 - ESFOLAR",
        iconSkill: skills.t3,
        descriptionSkill:
          "Os ataques de Thresh são fortalecidos: quanto mais tempo ele esperar entre ataques, mais dano ele causará. Ao ativar, Thresh arrasta sua corrente e empurra todos os inimigos atingidos na direção do golpe.",
      },
      {
        nameSkill: "ULTIMATE - A CAIXA",
        iconSkill: skills.t4,
        descriptionSkill:
          "Uma prisão feita de paredes que, se quebradas, causam dano e Lentidão.",
      },
    ],
    type: EnumType.Tanks,
    typeBr: EnumTypeBr.Tanques,
    function: EnumFunction.Tank,
    iconFunction: skills.Tanque,
    difficulty: EnumDifficulty.hard,
  },
  {
    id: uuidv4(),
    image: images.Sona,
    name: "Sona",
    surname: "A Mestra das Cordas",
    description:
      "Sona é um prodígio do etwahl, expressando-se apenas por meio de seus acordes graciosos e árias vibrantes. Seus modos gentis e refinados conquistaram a nobreza demaciana, embora alguns especulem que suas melodias cativantes, na verdade, exalem magia – uma possibilidade perigosa no reino. Silenciosa diante de estranhos, mas facilmente compreendida pelos amigos, Sona dedilha acordes não só para tranquilizar os aliados feridos, mas para derrubar inimigos desavisados.",
    skills: [
      {
        nameSkill: "PASSIVA - POWER CHORD",
        iconSkill: skills.s0,
        descriptionSkill:
          "Depois de conjurar 3 habilidades, o próximo ataque básico de Sona causará Dano Mágico adicional e um efeito extra com base na última música ativada.",
      },
      {
        nameSkill: "1 - HINO DO VALOR",
        iconSkill: skills.s1,
        descriptionSkill:
          "Sona toca o Hino do Valor, conjurando rajadas de som, causando Dano Mágico a dois inimigos próximos, priorizando Campeões e monstros. Sona recebe uma aura temporária que concede dano adicional no próximo ataque de aliados próximos contra inimigos.",
      },
      {
        nameSkill: "2 - ÁRIA DA PERSEVERANÇA",
        iconSkill: skills.s2,
        descriptionSkill:
          "Sona toca a Ária da Perseverança, conjurando melodias protetoras, curando a si mesma e a um aliado ferido próximo. Sona recebe uma aura temporária que concede um escudo momentâneo a aliados marcados pela área.",
      },
      {
        nameSkill: "3 - CANÇÃO DA CELERIDADE",
        iconSkill: skills.s3,
        descriptionSkill:
          "Sona toca a Canção da Celeridade, concedendo Velocidade de Movimento adicional a aliados próximos. Sona recebe uma aura temporária que concede Velocidade de Movimento adicional a Campeões aliados marcados pela área.",
      },
      {
        nameSkill: "ULTIMATE - CRESCENDO",
        iconSkill: skills.s4,
        descriptionSkill:
          "Sona toca o seu melhor acorde, causando Dano Mágico, atordoando Campeões inimigos e forçando-os a dançar. Cada nível dessa habilidade reduz o Tempo de Recarga base das habilidades básicas de Sona.",
      },
    ],
    type: EnumType.Supports,
    typeBr: EnumTypeBr.Suportes,
    function: EnumFunction.Support,
    iconFunction: skills.Suporte,
    difficulty: EnumDifficulty.easy,
  },
];
