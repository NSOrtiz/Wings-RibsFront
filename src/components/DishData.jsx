import Dish from './Dish';
import React from 'react';

export default function DishData({ onUpdateTotal }) {
  const Data = [
    {
      item: 'Wings 8 piezas',
      photo:
        'https://img.freepik.com/foto-gratis/alitas-pollo-al-bufalo-frescas-aperitivo-salado-ai-generativa_188544-8118.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 120,
      discount: 15,
      description: 'Deliciosas alitas de pollo estilo búfalo',
    },

    {
      item: 'Wings 12 piezas',
      photo:
        'https://img.freepik.com/foto-gratis/alitas-pollo-al-bufalo-frescas-aperitivo-salado-ai-generativa_188544-8118.jpg?ga=GA1.1.1033137900.1717898657&semt=ais_hybrid',
      price: 120,
      discount: 20,
      description: 'Deliciosas alitas de pollo estilo búfalo',
    },
  ];

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
            onTotalChange={handleTotalChange}
            className="w-full"
          />
        );
      })}
    </section>
  );
}
