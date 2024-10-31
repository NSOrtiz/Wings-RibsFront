import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardsMenu } from './Cards.jsx';

export const FoodData = () => {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch the data from the backend API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items'); // Adjust the URL if needed
        setCardsData(response.data); // Assuming your API returns an array of items
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {cardsData.map((item) => (
        <CardsMenu
          key={item.id}
          item={item.item}
          subsidiary={item.subsidiary}
          photo={item.photo}
          price={item.price}
          discount={item.discount}
          newprice={() => item.price - (item.price * item.discount) / 100}
          description={item.description}
          category={item.category}
        />
      ))}
    </div>
  );
};
