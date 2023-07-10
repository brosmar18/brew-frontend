import images from './images';

const breakfast = [
  {
    title: 'Breakfast Burrito',
    price: '$8.99',
    desc: 'Eggs, cheese & refried beans, your choice of meat and/or veggies',
  },
  {
    title: 'Egg & Cheese Sandwhich',
    price: '$6.99',
    desc: 'Your choice of bread: white, wheat, sourdough, croissant, or gluten-free',
  },
  {
    title: 'Mother Eartch: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, green peppers, onions, mushcrooms, celery & cheese',
  },
  {
    title: 'Aesops: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, hummus, feta cheese, cucumbers, sprouts, bell peppers, artichoke hearts & onions.',
  },
  {
    title: 'Paleo: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, ham, sausage, green pepper & onion',
  },
  {
    title: 'Biscuits & Gravy',
    price: '$3.99',
    desc: 'One or Two Biscuit option',
  }
];

const lunch = [
  {
    title: 'Curry Chicken Sandwhich',
    price: '$8.99',
    desc: 'Curry mayo chicken salad on a croissant',
  },
  {
    title: "Turkey Confetta Sandwhich",
    price: '$8.99',
    desc: 'Turkey, cranberry & feta cheese',
  },
  {
    title: 'BBQ Pulled Pork Sliders',
    price: '$8.99',
    desc: '2 BBQ pulled pork & sauce on rolls',
  },
  {
    title: 'Mango Chutney Salami Sanwhich',
    price: '$8.99',
    desc: 'Ham, salami, mango chutney & goat cheese',
  },
  {
    title: 'Veggie Melt',
    price: '$8.99',
    desc: 'Hummus, sautted veggies & white cheddar',
  },
  {
    title: 'Medeteranian wrap',
    price: '$8.99',
    desc: 'Hummus, quinoa, mixed greens, cucumber, feta cheese, olives, onion & golden raisans.',
  }
];

const awards = [
  {
    imgUrl: images.award01,
    title: '2023 Community Votes',
    subtitle: 'Best Area Cafes and Coffee Shops',
  },
  {
    imgUrl: images.award02,
    title: '2023 Community Votes',
    subtitle: 'Best Area Restaurants',
  },
];

export default { breakfast, lunch, awards };