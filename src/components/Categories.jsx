import React, { useRef, useEffect, useState } from 'react';

export default function Categories({ onCategoryClick }) {
  const categories = [
    'Promociones',
    'Wings',
    'Boneless',
    'Snacks',
    'Ribs',
    'Burguers & Dogs',
    'Charolas',
    'Ensaladas',
    'Bebidas',
  ];

  const scrollContainer = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

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

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryClick(category);
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
            className={`border-solid border-amber-500 px-[16px] py-[4px] border-2 text-center rounded-full text-[12px] lg:text-[16px] shadow-md hover:bg-amber-500 hover:text-neutral-100 min-w-fit ${
              activeCategory === btn
                ? 'bg-amber-500 text-neutral-100'
                : 'text-amber-500'
            }`}
            onClick={() => handleCategoryClick(btn)} // Maneja el clic en el botón
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
