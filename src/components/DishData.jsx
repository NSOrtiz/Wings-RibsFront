import Dish from './Dish';
import React from 'react';
import { useState, useEffect } from 'react';
export default function DishData({ onUpdateTotal }) {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cart')) || [];
    setData(storedData);
  }, []);

  const handleTotalChange = (priceChange) => {
    onUpdateTotal(priceChange);
  };

  return (
    <section className="w-full h-full ">
      {Data.map((data) => {
        const newPrice = data.price - (data.price * data.discount) / 100;
        return (
          <Dish
            key={`dish-${data.item}`}
            photo={data.photo}
            item={data.item}
            discount={data.discount}
            newprice={newPrice}
            price={data.price}
            description={data.description}
            qty={data.qty}
            onTotalChange={handleTotalChange}
            className="w-full"
          />
        );
      })}
    </section>
  );
}
