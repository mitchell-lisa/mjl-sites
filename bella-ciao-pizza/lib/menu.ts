export type Pie = {
  number: string;
  name: string;
  ingredients: readonly string[];
  /** Original listing sentence. Kept so schema text does not drift from the board. */
  listing: string;
  note?: string;
};

export const pies: readonly Pie[] = [
  {
    number: "01",
    name: "Zingaro",
    ingredients: ["Fresh heirloom tomatoes", "basil", "fresh mozzarella"],
    listing: "Fresh heirloom tomatoes, basil, and fresh mozzarella.",
  },
  {
    number: "02",
    name: "Carini",
    ingredients: ["Tomato sauce", "fresh mozzarella", "basil", "EVOO"],
    listing: "Tomato sauce, fresh mozzarella, basil, and EVOO.",
  },
  {
    number: "03",
    name: "Cinisi",
    ingredients: ["Tomato sauce", "pepperoni", "cheese"],
    listing: "Tomato sauce, pepperoni, and cheese.",
  },
  {
    number: "04",
    name: "Baaria",
    ingredients: ["White cheese pizza", "arugula", "prosciutto", "balsamic glaze"],
    listing: "White cheese pizza, arugula, prosciutto, and balsamic glaze.",
  },
  {
    number: "05",
    name: "Terrasini",
    ingredients: ["Tomato sauce", "mushrooms", "onions"],
    listing: "Tomato sauce, mushrooms, and onions.",
  },
  {
    number: "06",
    name: "Cefalu",
    ingredients: ["Tomato sauce", "sausage", "peppers", "onions"],
    listing: "Tomato sauce, sausage, peppers, and onions.",
  },
  {
    number: "07",
    name: "Taormina",
    ingredients: ["Tomato pie", "light mozzarella", "basil", "oregano", "EVOO"],
    listing: "Tomato pie, light mozzarella, basil, oregano, and EVOO.",
  },
  {
    number: "08",
    name: "Montelepre",
    ingredients: ["Spinach", "broccoli", "mushrooms", "peppers", "onions"],
    listing: "Vegetarian. Spinach, broccoli, mushrooms, peppers, and onions.",
    note: "Vegetarian",
  },
  {
    number: "09",
    name: "Palermo",
    ingredients: [
      "Tomato sauce",
      "roasted garlic",
      "Parmigiano",
      "oregano",
      "EVOO",
      "basil",
    ],
    listing: "Tomato sauce, roasted garlic, Parmigiano, oregano, EVOO, basil.",
  },
  {
    number: "10",
    name: "Catania",
    ingredients: [
      "White pizza",
      "mozzarella",
      "spinach",
      "ricotta",
      "Parmigiano",
      "truffle oil",
    ],
    listing:
      "White pizza, mozzarella, spinach, ricotta, Parmigiano, and truffle oil.",
  },
  {
    number: "11",
    name: "Sanpieri",
    ingredients: ["Italian sausage", "cheese", "tomato sauce"],
    listing: "Italian sausage, cheese, and tomato sauce.",
  },
  {
    number: "12",
    name: "Trapani",
    ingredients: ["Fresh mozzarella", "pistachio pesto", "white pizza"],
    listing: "Fresh mozzarella, pistachio pesto, white pizza.",
  },
  {
    number: "13",
    name: "Volcano",
    ingredients: ["Chicken cutlet", "mozzarella", "buffalo sauce"],
    listing: "Chicken cutlet, mozzarella, and buffalo sauce.",
  },
];

export function pieByName(name: string) {
  return pies.find((pie) => pie.name === name);
}
