import React from 'react';
import CarItem from './CarItem';

const cars = [
  {
    id: 1,
    model: 'Mercedes-Maybach S-Class',
    price: 400,
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/Maybach-S-Class/10866/1690453886358/front-left-side-47.jpg',
    description:
      'Mercedes-Benz Maybach S-Class has 2 Petrol Engine on offer. A 4 seater 12 cylinder car.',
  },
  {
    id: 2,
    model: 'Mercedes-Maybach S-Class',
    price: 400,
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/Maybach-S-Class/10866/1690453886358/front-left-side-47.jpg',
    description:
      'Mercedes-Benz Maybach S-Class has 2 Petrol Engine on offer. A 4 seater 12 cylinder car.',
  },
  {
    id: 3,
    model: 'Mercedes-Maybach S-Class',
    price: 400,
    image:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/Maybach-S-Class/10866/1690453886358/front-left-side-47.jpg',
    description:
      'Mercedes-Benz Maybach S-Class has 2 Petrol Engine on offer. A 4 seater 12 cylinder car.',
  },
];

const CarsList = () => (
  <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    {cars.map((car) => (
      <CarItem key={car.id} car={car} />
    ))}
  </ul>
);

export default CarsList;
