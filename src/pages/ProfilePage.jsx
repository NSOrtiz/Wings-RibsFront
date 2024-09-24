import { useForm } from 'react-hook-form';
import NavBar from '../components/NavBar';
import React from 'react';
/*import visaLogo from '../assets/visa-logo.png';
import paypalLogo from '../assets/paypal-logo.png';*/

export default function MetodoDePago() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aquí podrías manejar los datos del formulario, como enviarlos a un backend
  };

  return (
    <>
      <div>
        <NavBar />
        <div className="max-w-full mx-auto bg-slate-50 p-10 rounded-sm md:max-w-5xl">
          <div className="flex">
            <div className="py-2 w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="p-4">
                  <div id="ubuntu-medium">
                    <p className="text-center text-[36px] text-amber-600 p-2">
                      Método de Pago
                    </p>
                  </div>
                </div>
                <br />
                <p className="text-center font-bold text-[16px] text-neutral-500">
                  Introduce los detalles de tu tarjeta
                </p>
                <br />
                <p className="text-neutral-500 font-bold text-[20px]">Nombre en la tarjeta</p>
                <input
                  type="text"
                  {...register('cardName', { required: "El nombre en la tarjeta es obligatorio" })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="Nombre en la tarjeta"
                />
                {errors.cardName && <span className="text-red-500">{errors.cardName.message}</span>}
                
                <p className="text-neutral-500 font-bold text-[20px]">Número de tarjeta</p>
                <input
                  type="text"
                  {...register('cardNumber', { required: "El número de tarjeta es obligatorio" })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="Número de tarjeta"
                />
                {errors.cardNumber && <span className="text-red-500">{errors.cardNumber.message}</span>}
                
                <p className="text-neutral-500 font-bold text-[20px]">Fecha de expiración</p>
                <input
                  type="date"
                  {...register('expiryDate', { required: "La fecha de expiración es obligatoria" })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                />
                {errors.expiryDate && <span className="text-red-500">{errors.expiryDate.message}</span>}

                <p className="text-neutral-500 font-bold text-[20px]">CVV</p>
                <input
                  type="text"
                  {...register('cvv', { required: "El CVV es obligatorio" })}
                  className="w-full px-4 py-2 rounded-md border border-gray-500 my-2"
                  placeholder="CVV"
                />
                {errors.cvv && <span className="text-red-500">{errors.cvv.message}</span>}
                
                <br />
                <p className="text-neutral-500 font-bold text-[20px]">Tipo de Tarjeta</p>
                <div className="flex justify-center gap-4 my-4">
                  <img src={visaLogo} alt="Visa Logo" className="w-24 h-24" />
                  <img src={paypalLogo} alt="PayPal Logo" className="w-24 h-24" />
                </div>
                <div className="flex flex-col w-96 p-5 mx-auto">
                  <div id="ubuntu-medium">
                    <button
                      type="submit"
                      className="w-full px-2 py-2 rounded-xl border border-orange-400 bg-amber-500 text-white"
                    >
                      <p className="font-bold text-lg text-[28px]">Pagar</p>
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
                      <button type="button" className="px-2 font-bold">
                        Continuar con Google
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





