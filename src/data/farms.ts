import { Farm } from '../types/Farm';

export const farms: Farm[] = [
  {
    id: 1,
    name: "Ferme Soleil du Sahel",
    description: "Culture traditionnelle de mil et sorgho avec techniques agricoles durables",
    address: "Route de Ouagadougou, Burkina Faso",
    latitude: 12.3714,
    longitude: -1.5197,
    products: ["Mil", "Sorgho", "Arachides", "Karité"],
    imageUrl: "https://images.unsplash.com/photo-1591462391994-b84e56bb44eb"
  },
  {
    id: 2,
    name: "Coopérative du Kilimandjaro",
    description: "Production de café et bananes en agroforesterie",
    address: "Region du Kilimandjaro, Tanzanie",
    latitude: -3.0674,
    longitude: 37.3556,
    products: ["Café arabica", "Bananes", "Avocats"],
    imageUrl: "https://images.unsplash.com/photo-1497449493050-aad1e7cad165"
  },
  {
    id: 3,
    name: "Vergers de l'Atlas",
    description: "Culture d'agrumes et d'olives dans les montagnes de l'Atlas",
    address: "Région de Marrakech, Maroc",
    latitude: 31.6295,
    longitude: -7.9811,
    products: ["Oranges", "Olives", "Huile d'olive", "Citrons"],
    imageUrl: "https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83"
  },
  {
    id: 4,
    name: "Delta du Nil Bio",
    description: "Culture biologique de coton et de légumes dans le delta du Nil",
    address: "Delta du Nil, Égypte",
    latitude: 30.0444,
    longitude: 31.2357,
    products: ["Coton bio", "Tomates", "Aubergines"],
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2"
  }
];