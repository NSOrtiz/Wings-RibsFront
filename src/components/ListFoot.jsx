import { CardsMenu } from './Cards';
import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';

export function MenuFood() {
  const [dataFilter, setDataFilter] = useState([]);
  const [groupedData, setGroupedData] = useState({});

  const scrollContainer = useRef(null);
  const categoryRefs = useRef({});

  const categoryOrder = [
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

  useEffect(() => {
    // Fetch con la API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        const filteredData = response.data
          .filter((card) => card.subsidiary === 'Paseo Loma Real')
          .filter((item) => item.showitem === true);
        setDataFilter(filteredData);
      } catch (error) {
        console.error('Error para obtner informacion:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Agrupar los datos por categorías
    const groupDataByCategory = () => {
      const grouped = {};

      // Agrupar las promociones
      const discountedItems = dataFilter.filter((card) => card.discount !== 0);
      if (discountedItems.length > 0) {
        grouped['Promociones'] = discountedItems;
      }

      // Agrupar por categorías
      dataFilter.forEach((card) => {
        const category = card.category;
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(card);
      });

      setGroupedData(grouped);
    };

    if (dataFilter.length > 0) {
      groupDataByCategory();
    }
  }, [dataFilter]);

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

  return (
    <section
      ref={scrollContainer}
      className="w-full h-screen flex flex-col gap-2 overflow-y-auto scrollbar-hide pb-4"
    >
      {Object.keys(groupedData)
        .sort((a, b) => {
          const indexA = categoryOrder.indexOf(a);
          const indexB = categoryOrder.indexOf(b);

          // Si la categoría no está en el arreglo categoryOrder, se coloca al final.
          return (
            (indexA === -1 ? categoryOrder.length : indexA) -
            (indexB === -1 ? categoryOrder.length : indexB)
          );
        })
        .map((category) => {
          if (!categoryRefs.current[category]) {
            categoryRefs.current[category] = React.createRef();
          }
          return (
            <div
              key={category}
              className="mb-8"
              ref={categoryRefs.current[category]}
            >
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
                    newprice={() =>
                      data.price - (data.price * data.discount) / 100
                    }
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
