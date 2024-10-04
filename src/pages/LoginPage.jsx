import { useForm } from 'react-hook-form';
import { NavBar } from '../components/NavBar';
import React from 'react';
import LogoPR from '../assets/W&R2.png';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <>
      <div>
        <NavBar />
        <div className="max-w-full mx-auto p-10 rounded-sm md:max-w-5xl">
          <div className="flex">
            <div className="py-2 w-full">
              {signinErrors.map((error, i) => (
                <div
                  className="mx-auto rounded-md bg-neutral-800 text-amber-50 py-2 px-2 font-bold w-64 text-center"
                  key={i}
                >
                  {error}
                </div>
              ))}
              <form onSubmit={onSubmit} className="flex flex-col gap-2">
                <div className="p-4">
                  <div id="ubuntu-bold">
                    <img
                      className="mx-auto"
                      src={LogoPR}
                      height="115px"
                      width="223px"
                    ></img>
                    <p className="text-center text-[36px] text-amber-600 p-2 ">
                      Inicio
                    </p>
                  </div>
                </div>
                <p
                  id="ubuntu-medium"
                  className="text-center font-bold text-[16px] text-neutral-500"
                >
                  Introduce tu correo electrónico
                </p>
                <div className="flex flex-col gap-6 pt-10">
                  <span className="flex flex-col gap-1">
                    {errors.username && (
                      <p className="font-bold text-[12px] text-amber-600">
                        Nombre completo es requerido
                      </p>
                    )}
                    <p className="text-neutral-500 font-bold text-[20px]">
                      Correo electrónico
                    </p>
                    <input
                      type="email"
                      {...register('email', { required: true })}
                      className="w-full px-4 py-2 rounded-md border border-gray-500"
                      placeholder="Ingresa tu Correo"
                    />
                    {errors.email && (
                      <p className="font-bold text-[12px] text-amber-600 ">
                        *Correo electrónico es requerido
                      </p>
                    )}
                  </span>
                  <span className="flex flex-col gap-1">
                    <p className="text-neutral-500 font-bold text-[20px]">
                      Contraseña
                    </p>
                    <input
                      type="password"
                      {...register('password', { required: true })}
                      className="w-full px-4 py-2 rounded-md border border-gray-500"
                      placeholder="Ingresa tu Contraseña"
                    />
                    {errors.password && (
                      <p className="font-bold text-[12px] text-amber-600">
                        *La contraseña es requerida
                      </p>
                    )}
                  </span>
                </div>
                <div className="flex flex-col w-96 p-5 mx-auto">
                  <div id="ubuntu-medium">
                    <div className="flex p-4 gap-3 w-full  text-amber-500">
                      <br />
                      <input type="checkbox" name="check" />
                      <p className="text-center text-[16px]">
                        Acepto los términos y condiciones
                      </p>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className=" w-full bg-amber-500 hover:bg-amber-600 text-white text-[16px] py-[8px] px-[16px] rounded-[8px] hover:shadow-lg"
                    >
                      <p className="font-bold text-lg text-[28px]">Inicio</p>
                    </button>
                  </div>
                  <p className="text-center p-3">o</p>
                  <div className="w-full text-center">
                    <div className="border border-gray-600 bg-neutral-100 rounded-xl px-2 py-1 hover:bg-white hover:shadow-lg">
                      <img
                        className="inline rounded-full"
                        src="https://e7.pngegg.com/pngimages/704/688/png-clipart-google-google-thumbnail.png"
                        height="25px"
                        width="25px"
                      />
                      <button type="submit" className="px-2 font-bold ">
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
