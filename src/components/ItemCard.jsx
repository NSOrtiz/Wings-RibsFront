import React, { useState, useEffect } from 'react';

export default function ItemCard(props) {
  return (
    <section className="p-2">
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] border-b border-neutral-400 items-center justify-items-center pb-4">
        <p className="col-span-2 lg:col-span-1 text-center text-[16px] text-neutral-800">
          {props.id}
        </p>
        <p className="text-center text-[16px] text-neutral-800">
          {props.category}
        </p>
        <img
          src={props.photo}
          alt=""
          className="w-[100px] h-[100px] rounded-full object-cover relative"
        />
        <p className="text-center text-[16px] text-neutral-800 ">
          {props.item} {props.description}
        </p>
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
          />
          <img
            className="w-[30px] h-[30px] cursor-pointer hover:scale-125"
            src="/icons/delete-yellow.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
