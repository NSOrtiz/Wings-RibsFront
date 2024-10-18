import { CardsPromo } from './Cards';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export default function PromoCarrusel() {
  //const discountedCards = FoodData.filter((card) => card.discount > 0);

  const [discountedCards, setDiscountedCards] = useState([]);

  const scrollContainer = useRef(null);
  let scrollInterval = null;

  useEffect(() => {
    // Fetch con la API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        const discounted = response.data.filter((card) => card.discount > 0);
        setDiscountedCards(discounted);
      } catch (error) {
        console.error('Error para obtner informacion:', error);
      }
    };

    fetchData();
  }, []);

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
            newprice={() => data.price - (data.price * data.discount) / 100}
            price={data.price}
          />
        </div>
      ))}
    </section>
  );
}
