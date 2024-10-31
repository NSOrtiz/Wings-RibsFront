import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Clave pública de Stripe
const stripePromise = loadStripe("pk_test_51QDrCjLdb3cGGjzGXdyQ6Ev1HzyhL5ye89mE9NtPYoKkc1naCRfvDFlzjCmOFZwRWEP6zdMArEac4kLM7tJaHKta00lTLMw2eB");

export default function MetodoDePago() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/estatus-pedido');
  };

  return (
    <div className="min-h-screen bg-neutral-200 relative">
      <NavBar />
      <div className="flex justify-center py-10">
        {/* Contenedor principal */}
        <div
          className="flex flex-col items-center gap-4 px-[80px] py-0 flex-1"
          style={{
            padding: '0px 80px',
            background: 'rgba(255, 255, 255, 0.08)',
          }}
        >
          {/* Contenedor interno */}
          <div
            className="flex flex-col items-center gap-4"
            style={{ padding: '0px 80px', flex: '1 0 0' }}
          >
            {/* Contenedor para el título "Métodos de Pago" */}
            <div
              className="flex flex-col justify-center"
              style={{
                width: '311px',
                height: '55px',
                color: '#F59E0B',
                textAlign: 'center',
                fontFamily: 'Ubuntu',
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: 'normal',
                letterSpacing: '0.96px',
              }}
            >
              Métodos de Pago
            </div>

            {/* Título "Detalle de tarjeta" */}
            <div
              className="flex justify-center items-center gap-8 p-8 self-stretch"
              style={{
                display: 'flex',
                padding: '8px',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                alignSelf: 'stretch',
              }}
            >
              <h3 className="text-black text-xl font-semibold text-center">
                Detalle de tarjeta
              </h3>
            </div>

            {/* Contenedor de logos de tarjetas */}
            <div className="flex gap-4 mb-4">
              <img
                src="/images/logo-mastercard.png"
                alt="Mastercard"
                className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
              />
              <img
                src="/images/logo-visa.png"
                alt="Visa"
                className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
              />
              <img
                src="/images/logo-rupay.png"
                alt="Rupay"
                className="w-[75px] h-[55px] rounded-[5px] bg-[lightgray] bg-center bg-cover border-[rgba(217, 217, 217, 0.20)]"
              />
            </div>

            {/* Formulario de pago */}
            <Elements stripe={stripePromise}>
              <CheckoutForm onPaymentSuccess={handleClick} />
            </Elements>

            {/* Contenedor de subtotales y totales */}
            <div
              className="w-full flex flex-col gap-4"
              style={{
                display: 'flex',
                paddingBottom: '16px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                alignSelf: 'stretch',
                borderBottom: '0.5px solid #667473',
              }}
            >
              {/* Contenedor para "Subtotal" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-500 text-[16px] font-[400] font-Ubuntu leading-normal tracking-[0.2px]">
                  Subtotal
                </span>
                <span className="text-amber-600 text-[16px] font-[500] font-Ubuntu leading-normal text-right">
                  $123.45
                </span>
              </div>

              {/* Contenedor para "Shipping" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-500 text-[16px] font-[400] font-Ubuntu leading-normal tracking-[0.2px]">
                  Shipping
                </span>
                <span className="text-amber-600 text-[16px] font-[500] font-Ubuntu leading-normal text-right">
                  $12.34
                </span>
              </div>

              {/* Contenedor para "Total" */}
              <div className="w-full flex justify-between items-center">
                <span className="text-neutral-700 text-[20px] font-[700] font-Ubuntu leading-normal tracking-[0.2px]">
                  Total
                </span>
                <span className="text-amber-700 text-[20px] font-[700] font-Ubuntu leading-normal text-right">
                  $135.79
                </span>
              </div>
            </div>

            {/* Botón "Pagar" */}
            <div
              className="w-full flex justify-center"
              style={{ paddingTop: '16px' }}
            >
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutForm({ onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cardHolderName, setCardHolderName] = useState("");
  const [subject, setSubject] = useState(""); // Estado para el asunto

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: 13579, // Monto en centavos
          subject: subject, // Agregar el asunto aquí
          original_data: {
            // Datos originales que quieras incluir
            example_field: "example_value",
          }
        }),
      });

      const { clientSecret } = await res.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: cardHolderName,
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === 'succeeded') {
          // Navegar al estatus del pedido después del pago exitoso
          onPaymentSuccess();
        }
      }
    } catch (error) {
      setError("Hubo un error al procesar el pago");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="cardHolderName" className="text-neutral-500 text-[16px] font-[400] font-Ubuntu">
          Nombre del titular
        </label>
        <input
          type="text"
          id="cardHolderName"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          className="border rounded p-2 border-gray-300"
          required
        />
      </div>

      {/* Campo para el asunto */}
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="subject" className="text-neutral-500 text-[16px] font-[400] font-Ubuntu">
          Asunto
        </label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border rounded p-2 border-gray-300"
          required
        />
      </div>

      <CardElement className="p-4 border border-gray-300 rounded" />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{ paddingTop: '12px' }}
        className="w-[300px] flex justify-center items-center gap-[4px] p-[12px] bg-amber-500 text-white rounded-[16px] border-[1px] border-amber-500 shadow-md"
      >
        {loading ? "Procesando..." : "Pagar"}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
}
