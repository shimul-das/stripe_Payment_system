// import React, { useState } from 'react';
// import DonationForm from './DonationForm';
// import PaymentForm from './PaymentForm';

// const Payment = () => {
//   const [formData, setFormData] = useState(null);
//   const [paymentMethod, setPaymentMethod] = useState(null);

//   const handleDonationSubmit = (data) => {
//     setFormData(data);
//   };

//   const handlePaymentSuccess = (paymentMethodId) => {
//     setPaymentMethod(paymentMethodId);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       {formData ? (
//         <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
//       ) : (
//         <DonationForm onSubmit={handleDonationSubmit} />
//       )}
//       {paymentMethod && (
//         <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-4">
//           <h2 className="text-xl font-bold mb-4">Transaction Successful</h2>
//           <p>Payment Method ID: {paymentMethod}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payment;

// import React, { useState } from 'react';


// const PaymentPage = () => {
//   return (
// <div>
//     <h1>This is a payment page</h1>
// </div>
//   );
// };

// export default PaymentPage;
