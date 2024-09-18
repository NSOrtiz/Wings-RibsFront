import React from 'react';

export default function Dish(props) {
  console.log('props recibidos en Dish:', props);
  return (
    <section className="px-[16px] py-[4px] flex flex-col justify-center items-start gap-[8px]">
      <div className="w-full h-fit flex flex-row gap-[16px]">
        <img
          src={props.photo}
          alt={props.item}
          className="w-[70px] h-[70px] object-cover relative rounded-[16px]"
        />
        <div>
          <p>{props.item}</p>
          <p>{props.description}</p>
          <div>
            <div className="w-full flex">
              {props.discount !== 0 ? (
                <span className="w-full flex flex-row gap-1 items-center">
                  <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                    $
                  </p>
                  <p id="ubuntu-bold" className="text-[20px] text-neutral-800">
                    {props.newprice}
                  </p>
                  <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                    mxn
                  </p>
                  <p
                    id="ubuntu-regular"
                    className="text-[12px] text-neutral-500 line-through "
                  >
                    ${props.price}mxn
                  </p>
                </span>
              ) : (
                <span className="w-full flex flex-row gap-1 items-center">
                  <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                    $
                  </p>
                  <p id="ubuntu-bold" className="text-[20px] text-neutral-800">
                    {props.price}
                  </p>
                  <p id="ubuntu-bold" className="text-[12px] text-neutral-800">
                    mxn
                  </p>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
