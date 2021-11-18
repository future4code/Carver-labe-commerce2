import FogueteSingle from "./img/01_foguete_single.jpg";
import FogueteDoble from "./img/02_foguete_doble.jpg";
import FogueteJunior from "./img/03_foguete_junior.jpg";
import FogueteBlaster from "./img/04_foguete_blaster.jpg";
import NaveClassic from "./img/05_nave_classic.jpg";
import NaveMegalodon from "./img/06_nave_megalodon.jpg";
import OnibusPluto from "./img/07_onibus_esp_pluto.jpg";
import OnibusNetuno from "./img/08_onibus_esp_netuno.jpg";
import CapsulaMini from "./img/09_capsula_mini.jpg";
import ComboFoguete from "./img/10_combo_foguete.jpg";
import ComboOnibus from "./img/11_combo_netuno.jpg";
import ComboSuperFamily from "./img/12_combo_super_family.jpg";

export const produtos = [
  {
    id: 1,
    nome: "Foguete Single",
    valor: Number(25.0).toFixed(2),
    image: FogueteSingle,
    descricao:"É ideal para o transporte de apenas um passageiro. Econômico e veloz",
  },
  {
    id: 2,
    nome: "Foguete Doble",
    valor: Number(45.99).toFixed(2),
    image: FogueteDoble,
    descricao: "É ideal para 2 passageiros adultos com até uma criança. Econômico e veloz!",
  },
  {
    id: 3,
    nome: "Foguete Junior",
    valor: Number(59.99).toFixed(2),
    image: FogueteJunior,
    descricao: "É ideal para o transporte de família com até 4 membros. Econômico e veloz!",
  },
  {
    id: 4,
    nome: "Foguete Blaster",
    valor: Number(80.0).toFixed(2),
    image: FogueteBlaster,
    descricao: "Comporta até 5 passageiros em uma viagem extremamente veloz!",
  },
  {
    id: 5,
    nome: "Nave Classic",
    valor: Number(95.0).toFixed(2),
    image: NaveClassic,
    descricao: "Visual clássico, com tecnologia de ponta!",
  },
  {
    id: 6,
    nome: "Nave Megalodon",
    valor: Number(200.0).toFixed(2),
    image: NaveMegalodon,
    descricao: "Robusta, comporta grupos de até 50 pessoas confortavelmente!",
  },
  {
    id: 7,
    nome: "Ônibus Espacial Pluto",
    valor: Number(120.0).toFixed(2),
    image: OnibusPluto,
    descricao: "Transportes mais longos com precisão de centímetros, uso inteligente de combustível. Carrega até 10 pessoas!",
  },
  {
    id: 8,
    nome: "Onibus Espacial Netuno",
    valor: Number(150.0).toFixed(2),
    image: OnibusNetuno,
    descricao: "Transportes intergaláticos, com precisão e economia. Carrega grupos de 20 pessoas com segurança.",
  },
  {
    id: 9,
    nome: "Cápsula Mini",
    valor: Number(25.0).toFixed(2),
    image: CapsulaMini,
    descricao: "É ideal para o transporte de apenas um passageiro. Pode ser acoplado a qualquer ônibus espacial de nossa linha.",
  },
  {
    id: 10,
    nome: "Combo de Foguetes",
    valor: Number(110.0).toFixed(2),
    image: ComboFoguete,
    descricao: "Para quem busca velocidade em dobro!",
  },
  {
    id: 11,
    nome: "Combo Netuno",
    valor: Number(400.0).toFixed(2),
    image: ComboOnibus,
    descricao: "Transporte seguro para grupos grandes, pensado para escolas e empresas.",
  },
  {
    id: 12,
    nome: "Combo Super Family",
    valor: Number(550.0).toFixed(2),
    image: ComboSuperFamily,
    descricao: "Comporta pequenas populações com segurança e estabilidade.",
  },
];
