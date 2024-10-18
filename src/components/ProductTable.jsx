import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';

export default function ListData() {
  const [ListData, setListData] = useState([]);

  const scrollContainer = useRef(null);

  const categoryOrder = [
    'Wings',
    'Boneless',
    'Snacks',
    'Ribs',
    'Burguers & Dogs',
    'Charolas',
    'Ensaladas',
    'Bebidas',
  ];

  let scrollInterval = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        const filteredData = response.data
          .filter((item) => item.subsidiary === 'Loma Real')
          .sort(
            (a, b) =>
              categoryOrder.indexOf(a.category) -
              categoryOrder.indexOf(b.category)
          );
        setListData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

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
      className="w-full h-[500px] overflow-y-auto custom-scrollbar"
    >
      {ListData.map((data) => {
        const time = 20;
        const options = 'aderezos';
        return (
          <ItemCard
            key={`dish-${data._id}`}
            category={data.category}
            photo={data.photo}
            item={data.item}
            description={data.description}
            options={options}
            time={time}
            price={data.price}
            discount={data.discount}
            _id={data._id}
          />
        );
      })}
    </section>
  );
}
