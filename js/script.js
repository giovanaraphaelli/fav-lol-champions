import { sennaDescricao } from "./senna-descricao.js";
import { luxDescricao } from "./lux-descricao.js";
import { sorakaDescricao } from "./soraka-descricao.js";
import { leonaDescricao } from "./leona-descricao.js";
import { morganaDescricao } from "./morgana-descricao.js";
import { initScrollReveal } from "./scroll-reveal.js";

initScrollReveal();
sennaDescricao(
  ".senna-passiva",
  "ABSOLVIÇÃO",
  "Passiva",
  "Quando unidades são abatidas perto de Senna, suas almas são periodicamente aprisionadas na Névoa Negra. Senna pode atacar essas almas para libertá-las, absorvendo a Névoa que as aprisiona na morte. A Névoa é o combustível do poder de seu Canhão Relicário, alimentando-o com Dano de Ataque, Alcance de Ataque e Chance de Acerto Crítico. Ataques do Canhão Relicário de Senna demoram mais para disparar, causam dano adicional e concedem a ela brevemente uma parte da Velocidade de Movimento do alvo.",
  "images/habilidades-senna/senna-passiva-gif.gif"
);
sennaDescricao(
  ".senna-q",
  "ESCURIDÃO PERFURANTE",
  "Q",
  "Dos canos gêmeos de seu Canhão Relicário, Senna dispara um raio unificado de luz e sombra através do alvo, curando aliados e causando dano a inimigos.",
  "images/habilidades-senna/senna-q-gif.gif"
);
sennaDescricao(
  ".senna-w",
  "ABRAÇO FINAL",
  "W",
  "Senna dispara uma onda de Névoa Negra. Se atingir um inimigo, ela o aprisiona ferozmente, enraizando o alvo e tudo que estiver ao redor dele após um curto intervalo.",
  "images/habilidades-senna/senna-w-gif.gif"
);

sennaDescricao(
  ".senna-e",
  "MALDIÇÃO DA NÉVOA NEGRA",
  "E",
  "Senna reúne a Névoa que ela armazenou em sua arma e a transforma em uma tempestade ao seu redor, abraçando a escuridão e se tornando um espectro. Os aliados que entram na área são camuflados e também tomam a forma de espectros enquanto a Névoa os envolve. Espectros têm sua Velocidade de Movimento aumentada, são inalvejáveis e escondem a própria identidade.",
  "images/habilidades-senna/senna-e-gif.gif"
);

sennaDescricao(
  ".senna-r",
  "SOMBRA DA ALVORADA",
  "R",
  "Senna invoca as pedras relicárias dos Sentinelas caídos, dividindo seu canhão relicário em uma miríade de luz e sombra. Ela, então, dispara um raio global que concede escudo a aliados, enquanto causa dano aos inimigos atingidos no centro.",
  "images/habilidades-senna/senna-r-gif.gif"
);
luxDescricao(
  ".lux-passiva",
  "ILUMINAÇÃO",
  "Passiva",
  "As habilidades de dano de Lux carregam o alvo com energia por alguns segundos. O próximo ataque de Lux incendeia a energia, causando Dano Mágico adicional (com base no nível de Lux) ao alvo.",
  "images/habilidades-lux/lux-passiva-gif.gif"
);
luxDescricao(
  ".lux-q",
  "LIGAÇÃO DA LUZ",
  "Q",
  "Lux atira uma esfera de luz que se prende e causa dano em até duas unidades inimigas.",
  "images/habilidades-lux/lux-q-gif.gif"
);
luxDescricao(
  ".lux-w",
  "BARREIRA PRISMÁTICA",
  "W",
  "Lux lança sua varinha e uma luz envolve todos os aliados atingidos, protegendo-os contra dano inimigo.",
  "images/habilidades-lux/lux-w-gif.gif"
);

luxDescricao(
  ".lux-e",
  "SINGULARIDADE LUCENTE",
  "E",
  "Dispara uma luz irregular em uma área, reduzindo a velocidade de inimigos próximos. Lux pode detoná-la para causar dano aos inimigos na área de ação.",
  "images/habilidades-lux/lux-e-gif.gif"
);

luxDescricao(
  ".lux-r",
  "CENTELHA FINAL",
  "R",
  "Após acumular energia, Lux dispara um feixe de luz que causa dano a todos os inimigos na área. Além disso, ativa a habilidade passiva de Lux e reinicia a duração do efeito de Iluminação.",
  "images/habilidades-lux/lux-r-gif.gif"
);

sorakaDescricao(
  ".soraka-passiva",
  "SALVAÇÃO",
  "Passiva",
  "Soraka corre mais rapidamente em direção a aliados com pouca Vida.",
  "images/habilidades-soraka/soraka-passiva-gif.gif"
);
sorakaDescricao(
  ".soraka-q",
  "CHAMADO ESTELAR",
  "Q",
  "Uma estrela cai do céu no local-alvo, causando Dano Mágico e reduzindo a velocidade de inimigos. Se um Campeão inimigo for atingido por Chamado Estelar, Soraka regenera Vida.",
  "images/habilidades-soraka/soraka-q-gif.gif"
);
sorakaDescricao(
  ".soraka-w",
  "INFUSÃO ASTRAL",
  "W",
  "Soraka sacrifica parte de sua própria Vida para curar outro Campeão aliado.",
  "images/habilidades-soraka/soraka-w-gif.gif"
);

sorakaDescricao(
  ".soraka-e",
  "EQUINÓCIO",
  "E",
  "Cria uma área em um local, silenciando todos os inimigos dentro dela. Quando a área expira, os que ainda estiverem dentro são enraizados.",
  "images/habilidades-soraka/soraka-e-gif.gif"
);

sorakaDescricao(
  ".soraka-r",
  "DESEJO",
  "R",
  "Soraka enche seus aliados de esperança, instantaneamente restaurando Vida para si mesma e Campeões aliados.",
  "images/habilidades-soraka/soraka-r-gif.gif"
);

leonaDescricao(
  ".leona-passiva",
  "LUZ DO SOL",
  "Passiva",
  "Habilidades que causam dano atingem os inimigos com Luz do Sol por 1,5s. Quando Campeões aliados causam dano a esses alvos, a Luz do Sol é consumida para causar Dano Mágico adicional.",
  "images/habilidades-leona/leona-passiva-gif.gif"
);
leonaDescricao(
  ".leona-q",
  "PROTEÇÃO DA AURORA",
  "Q",
  "Leona usa seu escudo para fazer seu próximo ataque básico, causando Dano Mágico adicional e atordoando o alvo.",
  "images/habilidades-leona/leona-q-gif.gif"
);
leonaDescricao(
  ".leona-w",
  "ECLIPSE",
  "W",
  "Leona ergue seu escudo para receber redução de dano, Armadura e Resistência Mágica. Quando a duração chegar ao fim, caso haja inimigos próximos, ela causará Dano Mágico a eles e prolongará a duração do efeito.",
  "images/habilidades-leona/leona-w-gif.gif"
);

leonaDescricao(
  ".leona-e",
  "LÂMINA ZÊNITE",
  "E",
  "Leona projeta uma imagem solar da sua espada, causando Dano Mágico a todos os inimigos em uma fila. Quando a imagem some, o último campeão inimigo a ser acertado fica imobilizado por um curto periodo e Leona o ataca.",
  "images/habilidades-leona/leona-e-gif.gif"
);

leonaDescricao(
  ".leona-r",
  "LABAREDA SOLAR",
  "R",
  "Leona invoca um raio de energia solar do céu, causando dano aos inimigos em uma área. Inimigos no centro da área são atordoados, enquanto inimigos próximos à extremidade sofrem redução de velocidade.",
  "images/habilidades-leona/leona-r-gif.gif"
);
morganaDescricao(
  ".morgana-passiva",
  "SIFÃO DA ALMA",
  "Passiva",
  "Morgana drena o espírito dos inimigos, curando-se conforme causa dano a Campeões, tropas grandes e monstros médios e grandes da selva.",
  "images/habilidades-morgana/morgana-passiva-gif.gif"
);
morganaDescricao(
  ".morgana-q",
  "LIGAÇÃO DAS TREVAS",
  "Q",
  "Morgana prende um inimigo no lugar com magia sombria, forçando-o a sentir a dor que provocou e causando Dano Mágico.",
  "images/habilidades-morgana/morgana-q-gif.gif"
);
morganaDescricao(
  ".morgana-w",
  "SOMBRA ATORMENTADA",
  "W",
  "Morgana conjura uma sombra amaldiçoada em uma área, causando dano aos inimigos que ousarem permanecer em seu círculo sombrio. Eles sofrem Dano Mágico ao longo do tempo, que aumenta quanto mais suas Vidas estiverem baixas.",
  "images/habilidades-morgana/morgana-w-gif.gif"
);

morganaDescricao(
  ".morgana-e",
  "ESCUDO NEGRO",
  "E",
  "Morgana abençoa um aliado com uma barreira protetora de fogo estelar que absorve Dano Mágico e efeitos de desarme até que quebre.",
  "images/habilidades-morgana/morgana-e-gif.gif"
);

morganaDescricao(
  ".morgana-r",
  "GRILHÕES DA ALMA",
  "R",
  "Morgana libera a força total de seu poder celestial conforme desprende suas asas e flutua acima do chão. Ela lança correntes de dor sombria nos Campeões inimigos próximos, ganhando Velocidade de Movimento em direção a eles. As correntes causam redução de velocidade e um dano inicial e, depois de um intervalo, atordoarão aqueles que não conseguirem quebrá-las.",
  "images/habilidades-morgana/morgana-r-gif.gif"
);
