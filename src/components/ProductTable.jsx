import React from 'react';
import ItemCard from './ItemCard';
import { cardsData } from './FoodData';

export default function ListData() {
  const fooddata = cardsData;
  return (
    <section className="w-full h-full ">
      {Object.values(fooddata).map((data) => {
        const time = 20;
        const options = 'aderezos';
        return (
          <ItemCard
            key={`dish-${data.id}`}
            id={data.id}
            category={data.card_category}
            photo={data.photo}
            item={data.item}
            description={data.description}
            options={options}
            time={time}
            price={data.price}
            discount={data.discount}
          />
        );
      })}
    </section>
  );
}
