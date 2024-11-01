import React from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const buttons = ['Inicio', 'Registro'];
  const navigate = useNavigate();
  //const { isAuthenticated, logout, user } = useAuth();

  function handleNavigation(btn) {
    if (btn === 'Inicio') {
      navigate('/login');
    } else if (btn === 'Registro') {
      navigate('/register');
    }
  }

  return (
    <div>
      {buttons.map((btn) => {
        return (
          <button
            key={btn}
            id="ubuntu-bold"
            onClick={() => handleNavigation(btn)}
            className={clsx(
              'py-[3px] px-[28px] text-center rounded-[12px] text-[20px] hover:bg-amber-600 hover:text-neutral-800',
              {
                'bg-amber-500 text-neutral-100 mr-[20px]': btn === 'Inicio',
                'bg-neutral-300 text-amber-600 hover:bg-amber-100 hover:text-slate-800':
                  btn === 'Registro',
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
