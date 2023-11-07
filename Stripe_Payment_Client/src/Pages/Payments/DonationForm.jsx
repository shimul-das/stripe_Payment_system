// // // DonationForm.js

// // import React, { useState } from 'react';

// // const DonationForm = () => {
// //   const [donationAmount, setDonationAmount] = useState(10); // Default to $10

// //   const handleInputChange = (e) => {
// //     setDonationAmount(e.target.value);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     // Handle the submission to Stripe here
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         Donation Amount ($):
// //         <input
// //           type="number"
// //           value={donationAmount}
// //           onChange={handleInputChange}
// //         />
// //       </label>
// //       <button type="submit">Donate</button>
// //     </form>
// //   );
// // };

// // export default DonationForm;

// import React, { useState } from 'react';

// const DonationForm = () => {
//   const [donationAmount, setDonationAmount] = useState(10); // Default to $10
//   const [clientSecret, setClientSecret] = useState('');

//   const handleInputChange = (e) => {
//     setDonationAmount(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/create-payment-intent', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: donationAmount * 100, // Stripe expects amount in cents
//           currency: 'usd', // Change this to your desired currency
//         }),
//       });

//       const { client_secret } = await response.json();
//       setClientSecret(client_secret);
//     } catch (error) {
//       console.error('Error creating payment intent:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Donation Amount ($):
//         <input
//           type="number"
//           value={donationAmount}
//           onChange={handleInputChange}
//         />
//       </label>
//       <button type="submit">Donate</button>
//     </form>
//   );
// };

// export default DonationForm;

