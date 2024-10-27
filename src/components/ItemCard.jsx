import React, { useState, useEffect } from 'react';
import { EditProductForm, LogicalDeleted } from './ModalProductos';

export default function ItemCard(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpenEdit = () => {
    setIsModalOpen(true);
  };
  const handleCloseModals = () => {
    setIsModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  const handleDeletedProduct = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <section className="p-2">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-400 items-center justify-items-center pb-4">
        <p className="text-center text-[16px] text-neutral-800">
          {props.category}
        </p>
        <img
          src={props.photo}
          alt={props.item}
          className="w-[100px] h-[100px] rounded-full object-cover relative"
        />
        <span className="text-center flex flex-col">
          <p className="text-center text-[16px] font-semibold text-neutral-800 ">
            {props.item}
          </p>
          <p className="text-center text-[16px] font-normal text-neutral-800 ">
            {props.description}
          </p>
        </span>
        <p className="text-center text-[16px] text-neutral-800 ">
          {props.options}
        </p>
        <p className="text-center text-[16px] text-neutral-800 ">
          {props.time}
        </p>
        <p className="text-center text-[16px] text-neutral-800 ">
          {props.price}
        </p>
        <p className="text-center text-[16px] text-neutral-800 ">
          {props.discount}
        </p>
        <div className="flex flex-row gap-2 justify-end">
          <img
            src="/icons/edit-yellow.svg"
            alt=""
            className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
            onClick={handleOpenEdit}
          />
          <img
            className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
            src="/icons/delete-yellow.svg"
            alt=""
            onClick={handleDeletedProduct}
          />
        </div>
      </div>
      {isModalOpen && (
        <EditProductForm
          onClose={handleCloseModals}
          productData={{
            item: props.item,
            description: props.description,
            price: props.price,
            discount: props.discount,
            category: props.category,
            timecook: props.time,
            _id: props._id,
          }}
        />
      )}
      {isDeleteModalOpen && (
        <LogicalDeleted
          onClose={handleCloseModals}
          productData={{
            showitem: props.showitem,
            _id: props._id,
          }}
        />
      )}
    </section>
  );
}
