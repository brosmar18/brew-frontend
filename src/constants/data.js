import images from './images';

const breakfast = [
  {
    title: 'Breakfast Burrito',
    price: '$8.99',
    desc: 'Eggs, cheese & refried beans, your choice of meat and/or veggies',
    imgUrl: '/burrito.png'
  },
  {
    title: 'Egg & Cheese Sandwhich',
    price: '$6.99',
    desc: 'Your choice of bread: white, wheat, sourdough, croissant, or gluten-free',
    imgUrl: '/eggCheese.png'
  },
  {
    title: 'Mother Earth: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, green peppers, onions, mushrooms, celery & cheese',
    imgUrl: '/motherEarth.png'
  },
  {
    title: 'Aesops: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, hummus, feta cheese, cucumbers, sprouts, bell peppers, artichoke hearts & onions.',
    imgUrl: '/aesopsOmelette.png'
  },
  {
    title: 'Paleo: Bowl/Wrap/Omelette',
    price: '$8.99',
    desc: 'Eggs, ham, sausage, green peppers & onion',
    imgUrl: '/paleoBowl.png'
  },
  {
    title: 'Biscuits & Gravy',
    price: '$3.99',
    desc: 'One or Two Biscuit option',
    imgUrl: '/biscuitsGravy.png'
  }
];

const lunch = [
  {
    title: 'Curry Chicken Sandwhich',
    price: '$8.99',
    desc: 'Curry mayo chicken salad on a croissant',
    imgUrl: '/curryChicken.png'
  },
  {
    title: "Turkey Confetta Sandwhich",
    price: '$8.99',
    desc: 'Turkey, cranberry & feta cheese',
    imgUrl: '/turkeyConfetta.png'
  },
  {
    title: 'BBQ Pulled Pork Sliders',
    price: '$8.99',
    desc: '2 BBQ pulled pork & sauce on rolls',
    imgUrl: '/porkSliders.png'
  },
  {
    title: 'Mango Chutney Salami Sanwhich',
    price: '$8.99',
    desc: 'Ham, salami, mango chutney & goat cheese',
    imgUrl: '/mangoChutney.png'
  },
  {
    title: 'Veggie Melt',
    price: '$8.99',
    desc: 'Hummus, sautted veggies & white cheddar',
    imgUrl: '/veggieMelt.png'
  },
  {
    title: 'Medeteranian wrap',
    price: '$8.99',
    desc: 'Hummus, quinoa, mixed greens, cucumber, feta cheese, olives, onion & golden raisans.',
    imgUrl: '/medWrap.png'
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

const drinks = [
  {
    title: 'Latte',
    price: '$3.99',
    desc: 'Espresso with steamed milk and a touch of foam',
    imgUrl: ''
  },
  {
    title: 'Cappuccino',
    price: '$3.99',
    desc: 'Equal parts of espresso, steamed milk, and foam',
    imgUrl: ''
  },
  {
    title: 'Americano',
    price: '$2.99',
    desc: 'Espresso shots topped with hot water',
    imgUrl: ''
  },
  {
    title: 'Espresso',
    price: '$2.50',
    desc: 'Full-bodied and strong coffee',
    imgUrl: ''
  },
  {
    title: 'Mocha',
    price: '$4.50',
    desc: 'Espresso with steamed milk and chocolate',
    imgUrl: ''
  },
  {
    title: 'Iced Latte',
    price: '$4.50',
    desc: 'Espresso and chilled milk over ice',
    imgUrl: ''
  },
  {
    title: 'Iced Americano',
    price: '$3.50',
    desc: 'Espresso shots topped with cold water and served over ice',
    imgUrl: ''
  },
  {
    title: 'Cold Brew',
    price: '$3.99',
    desc: 'Brewed with cold water for a smooth, full-bodied flavor',
    imgUrl: ''
  },
  {
    title: 'Frappuccino',
    price: '$4.99',
    desc: 'Iced, blended coffee drink with milk and flavorings',
    imgUrl: ''
  },
];

const data = {breakfast, lunch, drinks, awards};
export default data;
