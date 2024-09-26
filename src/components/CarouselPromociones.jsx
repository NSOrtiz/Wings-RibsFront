import { CardsPromo } from './Cards';
import React, { useRef, useEffect } from 'react';
import { cardsData } from './FoodData';

export default function PromoCarrusel() {
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
