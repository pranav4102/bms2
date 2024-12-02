import React from 'react';
import { PaymentForm } from '../components/PaymentForm';

export const Payment = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 px-6">
      <h1 className="text-2xl font-bold mb-6">Payment</h1>
      <PaymentForm />
    </div>
  );
};