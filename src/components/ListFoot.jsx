import { CardsMenu } from './Cards';
import React, { useRef, useEffect } from 'react';
import { cardsData } from './FoodData';

export function MenuFood() {
  let groupedData = {};
  const scrollContainer = useRef(null);
  const categoryRefs = {};

  let scrollInterval = null;

  const handleMouseMove = (e) => {
    const container = scrollContainer.current;
    const { top, bottom } = container.getBoundingClientRect();

    if (e.clientY < top + 50) {
      startScrolling(-10);
    } else if (e.clientY > bottom - 50) {
      startScrolling(10);
    } else {
      stopScrolling();
    }
  };

  const startScrolling = (speed) => {
    if (!scrollInterval) {
      scrollInterval = setInterval(() => {
        scrollContainer.current.scrollTop += speed;
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

  const datafilter = cardsData.filter(
    (card) => card.subsidiary === 'Loma Real'
  );

  const discountedItems = datafilter.filter((card) => card.discount !== 0);
  if (discountedItems.length > 0) {
    groupedData['Promociones'] = discountedItems;
  }

  datafilter.forEach((card) => {
    const category = card.card_category;
    if (!groupedData[category]) {
      groupedData[category] = [];
    }
    groupedData[category].push(card);
  }, {});

  return (
    <section
      ref={scrollContainer}
      className="w-full h-screen flex flex-col gap-2 overflow-y-auto scrollbar-hide pb-4"
    >
      {Object.keys(groupedData).map((category) => {
        const categoryRef = useRef();
        categoryRefs[category] = categoryRef;
        return (
          <div key={category} className="mb-8" ref={categoryRef}>
            <h2
              id={category}
              className="text-[24px] md:text-[28px] font-bold text-amber-500 pb-1 bg-neutral-950 px-6 rounded-t-[20px]"
            >
              {category}
            </h2>
            <div className="grid justify-items-center grid-cols-1 show2-cards show3-cards show4-cards show-4cards gap-y-6 gap-x-4 pt-4">
              {groupedData[category].map((data) => (
                <CardsMenu
                  key={`card-${data.item}`}
                  photo={data.photo}
                  item={data.item}
                  discount={data.discount}
                  subsidiary={data.subsidiary}
                  newprice={data.newprice}
                  price={data.price}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
