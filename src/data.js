import TrapicheMalbec from "./images/Trapiche-malbec.jpg";
import RutiniCabernet from "./images/Rutini-cabernet.jpg";
import NortonMalbec from "./images/Norton-malbec.jpg";
import PatagoniaIpa from "./images/Patagonia-Ipa.jpg";
import QuilmesLager from "./images/Quilmes-Lager.jpg";
import ImperialStout from "./images/Imperial-Stout.jpg";
import JohnnieWhisky from "./images/Johnnie-Whisky.jpg";
import AbsolutVodka from "./images/Absolut-Vodka.jpg";
import JoseTequila from "./images/Jose-Tequila.jpg";
import HavanaRon from "./images/Havana-Ron.jpg";
import DetapadorHeineken from "./images/Destapador-Heineken.jpg";
import VasoStella from "./images/Vaso-Stella.jpg";
import PosavasoCorona from "./images/Posavaso-Corona.jpg";
import ShakerBicardi from "./images/Shaker-Bicardi.jpg";
import CopaRiedel from "./images/Copa-Riedel.jpg";

const productos = {
  vinos: [
    {
      id: 1,
      producto: "Vino",
      estilo: "Malbec",
      marca: "Trapiche",
      precio: 1500,
      imagen: TrapicheMalbec,
      descripcion:
        "Un vino Malbec de la bodega Trapiche, ideal para carnes rojas.",
    },
    {
      id: 2,
      producto: "Vino",
      estilo: "Cabernet Sauvignon",
      marca: "Rutini",
      precio: 2000,
      imagen: RutiniCabernet,
      descripcion: "Cabernet Sauvignon de Rutini, un clásico con cuerpo.",
    },
    {
      id: 3,
      producto: "Vino",
      estilo: "Malbec",
      marca: "Norton",
      precio: 1800,
      imagen: NortonMalbec,
      descripcion: "Malbec Norton, equilibrado y con notas frutales.",
    },
  ],

  cervezas: [
    {
      id: 4,
      producto: "Cerveza",
      estilo: "IPA",
      marca: "Patagonia",
      precio: 350,
      imagen: PatagoniaIpa,
      descripcion: "Cerveza IPA de Patagonia, con notas cítricas y amargas.",
    },
    {
      id: 5,
      producto: "Cerveza",
      estilo: "Lager",
      marca: "Quilmes",
      precio: 200,
      imagen: QuilmesLager,
      descripcion: "Cerveza Lager clásica de Quilmes, refrescante y ligera.",
    },
    {
      id: 6,
      producto: "Cerveza",
      estilo: "Stout",
      marca: "Imperial",
      precio: 400,
      imagen: ImperialStout,
      descripcion:
        "Cerveza Stout de Imperial, con cuerpo robusto y sabor intenso.",
    },
  ],

  destilados: [
    {
      id: 7,
      producto: "Destilado",
      estilo: "Whisky",
      marca: "Johnnie Walker Black Label",
      precio: 5000,
      imagen: JohnnieWhisky,
      descripcion: "Whisky escocés de mezcla con 12 años de añejamiento.",
    },
    {
      id: 8,
      producto: "Destilado",
      estilo: "Vodka",
      marca: "Absolut",
      precio: 2500,
      imagen: AbsolutVodka,
      descripcion: "Vodka sueco de alta pureza, ideal para cócteles.",
    },
    {
      id: 9,
      producto: "Destilado",
      estilo: "Tequila",
      marca: "José Cuervo Especial",
      precio: 3000,
      imagen: JoseTequila,
      descripcion: "Tequila dorado de José Cuervo, con sabor suave y dulce.",
    },
    {
      id: 10,
      producto: "Destilado",
      estilo: "Ron",
      marca: "Havana Club Añejo",
      precio: 3500,
      imagen: HavanaRon,
      descripcion: "Ron cubano añejo, con notas de caramelo y especias.",
    },
  ],

  accesorios: [
    {
      id: 11,
      producto: "Accesorio",
      estilo: "Destapador",
      marca: "Heineken",
      precio: 500,
      imagen: DetapadorHeineken,
      descripcion: "Destapador de acero inoxidable con el logo de Heineken.",
    },
    {
      id: 12,
      producto: "Accesorio",
      estilo: "Vaso Cervecero",
      marca: "Stella Artois",
      precio: 1000,
      imagen: VasoStella,
      descripcion:
        "Vaso cervecero oficial de Stella Artois, capacidad de 500 ml.",
    },
    {
      id: 13,
      producto: "Accesorio",
      estilo: "Posa Vasos",
      marca: "Corona",
      precio: 300,
      imagen: PosavasoCorona,
      descripcion:
        "Set de 4 posa vasos de corcho con diseño de la marca Corona.",
    },
    {
      id: 14,
      producto: "Accesorio",
      estilo: "Shaker",
      marca: "Bacardi",
      precio: 1500,
      imagen: ShakerBicardi,
      descripcion: "Shaker metálico Bacardi para preparar cócteles.",
    },
    {
      id: 15,
      producto: "Accesorio",
      estilo: "Copa de Vino",
      marca: "Riedel",
      precio: 2000,
      imagen: CopaRiedel,
      descripcion: "Copa de vino Riedel diseñada para degustar vinos tintos.",
    },
  ],
};

export default productos;
