import React, { useRef, useEffect } from 'react';

export default function Categories() {
  const categories = [
    'Promociones',
    'Combos',
    'Wings',
    'Bonles',
    'Snacks',
    'Ribs',
    'Burguers & Dogs',
    'Charolas',
    'Ensaldas',
    'Combos',
    'Bebidas',
  ];

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
    <div
      ref={scrollContainer}
      className="flex flex-row w-full gap-2 overflow-x-auto scrollbar-hide"
    >
      {categories.map((btn) => {
        return (
          <button
            key={`btn-${btn}`}
            id="ubuntu-bold"
            className="text-amber-500 border-solid border-amber-500 px-[16px] py-[4px] border-2 text-center rounded-full text-[12px] lg:text-[16px] shadow-md hover:bg-amber-500 hover:text-neutral-100 min-w-fit"
          >
            {' '}
            {btn}
          </button>
        );
      })}
    </div>
  );
}
