// src/components/AutoPayment.js
import React, { useState } from 'react';

const AutoPayment = () => {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSchedule = () => {
    // Here you'd set up an API call to schedule the payment
    console.log(`Scheduled ${amount} for ${frequency} payments.`);
  };

  return (
    <div>
      <h2>Auto Payment Scheduling</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select onChange={(e) => setFrequency(e.target.value)}>
        <option value="monthly">Monthly</option>
        <option value="weekly">Weekly</option>
        <option value="yearly">Yearly</option>
      </select>
      <button onClick={handleSchedule}>Schedule</button>
    </div>
  );
};

export default AutoPayment;
