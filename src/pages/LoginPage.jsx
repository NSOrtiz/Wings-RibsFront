import { useForm } from 'react-hook-form';
import NavBar from './NavBar';
import React from 'react';
import LogoPR from '../assets/W&R2.png';

export default function LoginPage() {
  const { register } = useForm();

  return (
    <>
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
                        src={LogoPR}
                        height="115px"
                        width="223px"
                      ></img>
                      <p className="text-center text-2xl text-amber-600 p-2 ">
                        Inicio
                      </p>
                    </div>
                  </div>
                  <br />
                  <p className="text-center font-bold text-neutral-500">
                    Introduce tú correo electrónico
                  </p>
                  <br />

                  <p className="text-neutral-500 font-bold text-xl">
                    Correo electrónico
                  </p>
                  <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                    placeholder="Email"
                  />
                  <p className="text-neutral-500 font-bold text-xl">
                    Contraseña
                  </p>
                  <input
                    type="password"
                    {...register('password', { required: true })}
                    className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                    placeholder="Contraseña"
                  />
                  <div className="flex flex-col w-96 p-5 mx-auto">
                    <div id="ubuntu-medium">
                      <div className="flex p-4 gap-3 w-full  text-amber-500">
                        <br />
                        <input type="checkbox" name="check" />
                        <p className="text-center">
                          Acepto los terminos y condiciones
                        </p>
                      </div>
                      <br />
                      <button
                        type="submit"
                        className=" w-full px-2 py-2 rounded-xl border border-orange-400 bg-yellow-500 text-white"
                      >
                        <p>Inicio</p>
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
                        <button type="submit" className="px-2">
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
    </>
  );
}
