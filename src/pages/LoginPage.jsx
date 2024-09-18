import { useForm } from 'react-hook-form';
import NavBar from '../components/NavBar';
import React from 'react';
<<<<<<< HEAD
import LogoPR from '../assets/W&R2.png';
import { useAuth } from '../context/AuthContext';
=======
>>>>>>> 8636628f8d66f4a5e62bf61e0a0b5b5c982b2e30

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
<<<<<<< HEAD
      <div>
        <NavBar />
        <div className="max-w-full mx-auto bg-slate-50 p-10 rounded-sm md:max-w-5xl">
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
                      Inicio
                    </p>
                  </div>
                </div>
                <br />
                <p className="text-center font-bold text-[16px] text-neutral-500">
                  Introduce tú correo electrónico
                </p>
                <br />

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
=======
      <>
        <div>
          <NavBar />
          <div className="max-w-full mx-auto bg-slate-50 p-10 rounded-sm md:max-w-5xl">
            <div className="flex">
              <div className="py-2 w-full">
                <form>
                  <div className="p-4">
                    <div id="ubuntu-medium">
                      <img
                        className="mx-auto"
                        src="/images/W&R2.png"
                        height="115px"
                        width="223px"
                      ></img>
                      <p className="text-center text-2xl text-amber-600 p-2 ">
                        Inicio
>>>>>>> 8636628f8d66f4a5e62bf61e0a0b5b5c982b2e30
                      </p>
                    </div>
                    <br />
                    <button
                      type="submit"
                      className=" w-full px-2 py-2 rounded-xl border border-orange-400 bg-amber-500 text-white"
                    >
                      <p className="font-bold text-lg text-[28px]">Inicio</p>
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
