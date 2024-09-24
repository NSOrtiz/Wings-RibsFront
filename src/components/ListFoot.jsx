import { CardsMenu, CardsPromo } from './Cards';
import React, { useRef, useEffect } from 'react';
import { cardsData } from './FoodData';

export function MenuFood() {
  const groupedData = cardsData.reduce((acc, card) => {
    const category = card.card_category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(card);
    return acc;
  }, {});

  return (
    <section className="w-full h-full">
      {Object.keys(groupedData).map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-2xl font-bold text-amber-600">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {groupedData[category].map((data) => (
              <CardsMenu
                key={`card-${data.item}`}
                photo={data.photo}
                item={data.item}
                discount={data.discount}
                subsidiary={data.subsidiary}
                newprice={data.newprice}
                price={data.price}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export function PromoFood() {
  const discountedCards = cardsData.filter((card) => card.discount > 0);

  const scrollContainer = useRef(null);
  let scrollInterval = null;

  const handleMouseMove = (e) => {
    const container = scrollContainer.current;
    const { left, right } = container.getBoundingClientRect();

    if (e.clientX < left + 50) {
      startScrolling(-5);
    } else if (e.clientX > right - 50) {
      startScrolling(5);
    } else {
      stopScrolling();
    }
  };

  const startScrolling = (speed) => {
    if (!scrollInterval) {
      scrollInterval = setInterval(() => {
        scrollContainer.current.scrollLeft += speed;
      }, 20);
    }
  };

  const stopScrolling = () => {
    clearInterval(scrollInterval);
    scrollInterval = null;
  };

  useEffect(() => {
    const container = scrollContainer.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', stopScrolling);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', stopScrolling);
    };
  }, []);
  return (
    <section
      ref={scrollContainer}
      className="flex flex-row w-full gap-2 overflow-x-auto scrollbar-hide"
    >
      {discountedCards.map((data) => (
        <div key={data.item}>
          <CardsPromo
            photo={data.photo}
            item={data.item}
            discount={data.discount}
            subsidiary={data.subsidiary}
            newprice={data.newprice}
            price={data.price}
          />
        </div>
      ))}
    </section>
  );
}
