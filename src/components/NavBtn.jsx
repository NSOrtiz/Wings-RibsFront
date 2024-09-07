import React from 'react';
import clsx from 'clsx';
import '../CSS/colors_text.css';

export default function NavBar() {
  const buttons = ['Log In', 'Register'];
  return (
    <div>
      {buttons.map((btn) => {
        return (
          <button
            key={btn}
            className={clsx(
              'py-[3px] px-[28px] text-center rounded-[12px] title5 hover:bg-amber-600 hover:text-neutral-800',
              {
                'bg-amber-500 text-neutral-100 mr-[20px]': btn === 'Log In',
                'bg-neutral-100 text-amber-600 hover:bg-amber-100 hover:text-slate-800':
                  btn === 'Register',
              }
            )}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}
