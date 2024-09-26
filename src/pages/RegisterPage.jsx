import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import NavBar from '../components/NavBar';
import React, { useEffect } from 'react';

import LogoPR from '../assets/W&R2.png';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    //el navigate se puede cambiar una vez terminada la página del menu exclusivo de cliente
    if (isAuthenticated) navigate('/home/menu');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div>
        <NavBar />
        <div className="max-w-full mx-auto bg-slate-50 p-10 rounded-sm md:max-w-5xl">
          <div className="flex">
            <div className="py-2 w-full">
              {registerErrors.map((error, i) => (
                <div
                  className="mx-auto rounded-md bg-neutral-800 text-amber-50 py-2 px-2 font-bold w-64 text-center"
                  key={i}
                >
                  {error}
                </div>
              ))}
              <form onSubmit={onSubmit}>
                <div className="p-4">
                  <div id="ubuntu-medium">
                    <img
                      className="mx-auto"
                      src={LogoPR}
                      height="115px"
                      width="223px"
                    ></img>
                    <p className="text-center text-[36px] text-amber-600 p-2 ">
                      Registrate
                    </p>
                  </div>
                </div>
                <br />
                <p className="text-center font-bold text-[16px] text-neutral-500">
                  Introduce los datos correctamente
                </p>
                <br />
                <p className="text-neutral-500 font-bold text-[20px]">
                  Nombre completo
                </p>
                <input
                  type="text"
                  {...register('username', { required: true })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="Ingresa tú Nombre"
                />
                {errors.username && (
                  <p className="font-bold text-[20px] text-amber-600 p-2">
                    Nombre completo es requerido
                  </p>
                )}
                <p className="text-neutral-500 font-bold text-[20px]">
                  Correo electrónico
                </p>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="Ingresa tú Correo"
                />
                {errors.email && (
                  <p className="font-bold text-[20px] text-amber-600 p-2">
                    Correo electrónico es requerido
                  </p>
                )}
                <p className="text-neutral-500 font-bold text-[20px]">
                  Contraseña
                </p>
                <input
                  type="password"
                  {...register('password', { required: true })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="Ingresa tú Contraseña"
                />
                {errors.password && (
                  <p className="font-bold text-[20px] text-amber-600 p-2">
                    La contraseña es requerida
                  </p>
                )}
                <div className="flex flex-col w-96 p-5 mx-auto">
                  <div id="ubuntu-medium">
                    <div className="flex p-4 gap-3 w-full  text-amber-500">
                      <br />
                      <input type="checkbox" name="check" />
                      <p className="text-center text-[16px]">
                        Acepto los terminos y condiciones
                      </p>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className=" w-full px-2 py-2 rounded-xl border border-orange-400 bg-amber-500 text-white"
                    >
                      <p className="font-bold text-lg text-[28px]">
                        Registrate
                      </p>
                    </button>
                  </div>
                  <p className="text-center p-3">o</p>
                  <div className="w-full text-center">
                    <div className="border border-gray-600 bg-neutral-100 rounded-xl px-2 py-1">
                      <img
                        className="inline rounded-full"
                        src="https://e7.pngegg.com/pngimages/704/688/png-clipart-google-google-thumbnail.png"
                        height="25px"
                        width="25px"
                      />
                      <button type="submit" className="px-2 font-bold">
                        Continuar con google
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
