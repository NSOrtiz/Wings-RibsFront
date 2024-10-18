import React from 'react';

export default function ProfileVendor() {
  return (
    <div className="pl-6 flex flex-row gap-8 border-b border-neutral-500 mb-6 justify-items-center">
      <img className="w-[60px] h-[40px] col-span-full bg-yellow-800  rounded-full "></img>
      <p className="font-bold text-center  pt-1">Nombre</p>
      <p className="font-bold text-center basis-1/2 pt-1 ">algo@gmail.com</p>
      <p className="font-bold text-center basis-1/2 pt-1">1111111111</p>
      <p className="font-bold text-center basis-1/4 pt-1">ID</p>
      <div className=" basis-1/4 pt-1 flex flex-row gap-2 justify-end">
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
  );
}
