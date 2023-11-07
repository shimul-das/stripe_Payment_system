import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './Pages/Payments/PaymentForm';

const stripePromise = loadStripe('pk_test_51NFKkyCpN9cKlS27sbJvD1MIyZpW0lAR8Yu84qWdtRIBLJEsdXonxiBSz38GcD2NMlAe89VhRaAzgGPi2MiCQGxO00BJFLoBlZ');

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <h1>Donation Page</h1>
        <PaymentForm />
      </div>
    </Elements>
  );
};

export default App;

