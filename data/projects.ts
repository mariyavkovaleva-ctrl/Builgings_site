export interface Project {
  id: string;
  name: string;
  style: string;
  area: number;
  location: string;
  year: number;
  material: string;
  image: string;
  gallery: string[];
  description: string;
  featured?: boolean;
  tall?: boolean;
}

export const projects: Project[] = [
  {
    id: "karelian-residence",
    name: "Residence Karelian",
    style: "Скандинавский минимализм",
    area: 280,
    location: "Карелия",
    year: 2024,
    material: "Клеёный брус, панорамное остекление",
    image: "/images/project-01.png",
    gallery: ["/images/project-01.png", "/images/project-02.png", "/images/project-03.png"],
    description:
      "Двухэтажная резиденция на берегу лесного озера. Панорамное остекление первого этажа растворяет границу между интерьером и природой. Тёплая древесина контрастирует с тёмным фасадом.",
    featured: true,
    tall: true,
  },
  {
    id: "forest-glass",
    name: "Forest Glass House",
    style: "Панорамное остекление",
    area: 195,
    location: "Ленинградская область",
    year: 2023,
    material: "Каркас, стекло, натуральный камень",
    image: "/images/project-04.png",
    gallery: ["/images/project-04.png", "/images/project-05.png"],
    description:
      "Дом-акварium в сосновом лесу. Стеклянные стены от пола до потолка, терраса с видом на лесной массив и каминная зона для вечерних посиделок.",
  },
  {
    id: "nordic-retreat",
    name: "Nordic Retreat",
    style: "A-frame / шале",
    area: 165,
    location: "Приозерск",
    year: 2023,
    material: "Клеёный брус, металлочерепица",
    image: "/images/project-06.png",
    gallery: ["/images/project-06.png", "/images/project-07.png", "/images/project-08.png"],
    description:
      "Компактная A-frame резиденция для семейного отдыха. Крутая крыша, панорамный фронтон и открытая терраса с видом на озеро.",
    tall: true,
  },
  {
    id: "misty-pine",
    name: "Misty Pine Villa",
    style: "Современный минимализм",
    area: 220,
    location: "Выборгский район",
    year: 2024,
    material: "Газобетон, дерево, стекло",
    image: "/images/project-09.png",
    gallery: ["/images/project-09.png", "/images/project-10.png"],
    description:
      "Монолитный объём с глубокими свесами кровли. Интеграция в холмистый рельеф участка с сохранением естественного ландшафта.",
  },
  {
    id: "amber-light",
    name: "Amber Light Residence",
    style: "Контemporary forest",
    area: 310,
    location: "Карелия",
    year: 2025,
    material: "Клеёный брус, композитные панели",
    image: "/images/project-11.png",
    gallery: ["/images/project-11.png", "/images/project-12.png", "/images/project-13.png"],
    description:
      "Флагманский проект с двумя уровнями террас, сауной и панорамной гостиной. Тёплый янтарный свет из окон создаёт атмосферу уютного убежища в лесу.",
    featured: true,
  },
  {
    id: "lake-house",
    name: "Lake House",
    style: "Модульная архитектура",
    area: 145,
    location: "Ладожское озеро",
    year: 2022,
    material: "Каркас, фальцевая кровля",
    image: "/images/project-14.png",
    gallery: ["/images/project-14.png", "/images/project-15.png"],
    description:
      "Одноэтажный дом на сваях у воды. Модульная планировка с мастер-спальней, кабинетом и открытой кухней-столовой.",
    tall: true,
  },
  {
    id: "stone-creek",
    name: "Stone Creek",
    style: "Природный минимализм",
    area: 185,
    location: "Тверская область",
    year: 2023,
    material: "Камень, дерево, стекло",
    image: "/images/project-17.png",
    gallery: ["/images/project-17.png", "/images/project-18.png", "/images/project-19.png"],
    description:
      "Резиденция на склоне с террасами, спускающимися к ручью. Натуральный камень в отделке фасада и внутренних стен.",
  },
  {
    id: "horizon-box",
    name: "Horizon Box",
    style: "High-tech минимализм",
    area: 240,
    location: "Ленинградская область",
    year: 2024,
    material: "Монолит, стекло, металл",
    image: "/images/project-20.png",
    gallery: ["/images/project-20.png", "/images/project-21.png"],
    description:
      "Горизонтальный объём с плоской кровлей и wrap-around остеклением. Минималистичный интерьер с акцентом на вид из каждой комнаты.",
  },
  {
    id: "evergreen",
    name: "Evergreen Lodge",
    style: "Скандинавский шале",
    area: 175,
    location: "Карелия",
    year: 2022,
    material: "Клеёный брус, мягкая кровля",
    image: "/images/project-23.png",
    gallery: ["/images/project-23.png", "/images/project-24.png", "/images/project-25.png"],
    description:
      "Уютный дом в стиле финского шале с высокими потолками, камином и просторной кухней. Идеален для круглогодичного проживания.",
    tall: true,
  },
  {
    id: "twilight",
    name: "Twilight Pavilion",
    style: "Павильонная архитектура",
    area: 260,
    location: "Всеволожский район",
    year: 2025,
    material: "Клеёный брус, стекло, бетон",
    image: "/images/project-26.png",
    gallery: ["/images/project-26.png", "/images/project-27.png", "/images/project-28.png"],
    description:
      "Серия связанных павильонов с общей террасой. Жилая, гостевая и spa-зоны разделены, но объединены общим пространством.",
    featured: true,
  },
];

export const heroImage = "/images/project-07.png";
export const aboutImage = "/images/project-12.png";
