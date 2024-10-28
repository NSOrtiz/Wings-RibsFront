import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import ItemCard from './ItemCard';
import {
  EditProductForm,
  LogicalDeleted,
  EnableItem,
  DeleteItem,
} from './ModalProductos';

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

function ScrollableList({ selectedSubsidiary, showItem, isEditingMode }) {
  const [ListData, setListData] = useState([]);
  const scrollContainer = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productData, setProductData] = useState(null);

  let scrollInterval = null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        const filteredData = response.data
          .filter((item) => item.subsidiary === selectedSubsidiary)
          .filter((item) => item.showitem === showItem)
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
    if (selectedSubsidiary) {
      fetchData();
    } else {
      setListData([]);
    }
  }, [selectedSubsidiary]);

  const handleEdit = (data) => {
    setProductData(data);
    setIsModalOpen(true);
  };

  const handleDelete = (data) => {
    setProductData(data);
    setIsDeleteModalOpen(true);
  };

  const handleEnable = (data) => {
    setProductData(data);
    setIsModalOpen(true);
  };

  const handleDeleteItem = (data) => {
    setProductData(data);
    setIsDeleteModalOpen(true);
  };

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
      className="w-full h-screen overflow-y-auto custom-scrollbar"
    >
      {ListData.map((data) => {
        const options = 'aderezos';
        return (
          <ItemCard
            key={`dish-${data._id}`}
            category={data.category}
            photo={data.photo}
            item={data.item}
            description={data.description}
            options={options}
            time={data.timecook}
            price={data.price}
            discount={data.discount}
            _id={data._id}
            onEdit={isEditingMode ? handleEdit : handleEnable}
            onDelete={isEditingMode ? handleDelete : handleDeleteItem}
          />
        );
      })}
      {isModalOpen &&
        (isEditingMode ? (
          <EditProductForm
            onClose={() => setIsModalOpen(false)}
            productData={productData}
          />
        ) : (
          <EnableItem
            onClose={() => setIsModalOpen(false)}
            productData={productData}
          />
        ))}
      {isDeleteModalOpen &&
        (isEditingMode ? (
          <LogicalDeleted
            onClose={() => setIsDeleteModalOpen(false)}
            productData={productData}
          />
        ) : (
          <DeleteItem
            onClose={() => setIsDeleteModalOpen(false)}
            productData={productData}
          />
        ))}
    </section>
  );
}

export function ListData({ selectedSubsidiary }) {
  return (
    <ScrollableList
      selectedSubsidiary={selectedSubsidiary}
      showItem={true}
      isEditingMode={true}
    />
  );
}
export function ListDataFalse({ selectedSubsidiary }) {
  return (
    <ScrollableList
      selectedSubsidiary={selectedSubsidiary}
      showItem={false}
      isEditingMode={false}
    />
  );
}
