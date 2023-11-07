// import React from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useForm, Controller } from 'react-hook-form';

// const PaymentForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const { handleSubmit, control, setValue, watch } = useForm();

//   const onSubmit = async (data) => {
//     console.log(parseFloat(data.amount));
//     if (!stripe || !elements) {
//       return; // Stripe or Elements not yet available
//     }

//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.error(error);
//     } else {
//       const response = await fetch('http://localhost:5000/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({  amount: parseFloat(data.amount) }), // Use the amount from form data
//       });

//       const { clientSecret } = await response.json();

//       const { error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: paymentMethod.id,
//       });

//       if (error) {
//         console.error(error);
//       } else {
//         console.log('Payment successful!', paymentMethod);
//       }
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-4">
//         <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
//           Amount
//         </label>
//         <div className="flex">
//           <Controller
//             name="amount"
//             control={control}
//             defaultValue=""
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="number"
//                 step="0.01"
//                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 placeholder="Enter amount"
//               />
//             )}
//           />
//           <button
//             type="button"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
//             onClick={() => setValue('showCardElement', true)}
//           >
//             Donate
//           </button>
//         </div>
//       </div>
//       {watch('showCardElement') && (
//         <div className="mb-4">
//           <CardElement />
//         </div>
//       )}
//       {watch('showCardElement') && (
//         <button
//           type="submit"
//           disabled={!stripe}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Confirm Payment
//         </button>
//       )}
//     </form>
//   );
// };

// export default PaymentForm;


import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { handleSubmit, control, setValue, watch } = useForm();
  const [showCardElement, setShowCardElement] = useState(false);

  const onSubmit = async (data) => {
    if (!stripe || !elements) {
      return; // Stripe or Elements not yet available
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const response = await fetch('http://localhost:5000/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  amount: parseFloat(data.amount) }), // Use the amount from form data
      });

      const { clientSecret } = await response.json();

      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (error) {
        console.error(error);
      } else {
        const transactionId = paymentMethod.id; // Assuming Stripe provides a transaction ID
        Swal.fire({
          icon: 'success',
          title: 'Payment Successful!',
          text: `Transaction ID: ${transactionId}`,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <div className="flex">
          <Controller
            name="amount"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="number"
                step="0.01"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter amount"
              />
            )}
          />
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => setShowCardElement(true)}
          >
            Donate
          </button>
        </div>
      </div>
      {showCardElement && (
        <div className="mb-4">
          <CardElement />
        </div>
      )}
      {showCardElement && (
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Confirm Payment
        </button>
      )}
    </form>
  );
};

export default PaymentForm;
