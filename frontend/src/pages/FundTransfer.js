// src/components/FundTransfer.js
import React, { useState } from 'react';
import axios from 'axios';

const FundTransfer = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [method, setMethod] = useState('UPI');
  const [status, setStatus] = useState('');

  const handleTransfer = async () => {
    try {
      const response = await axios.post('/api/fund-transfer', { amount, recipient, method });
      setStatus(`Transfer successful to ${recipient}`);
    } catch (error) {
      setStatus('Transfer failed');
    }
  };

  return (
    <div>
      <h2>Fund Transfer</h2>
      <input
        type="text"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        placeholder="Recipient (UPI ID)"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select onChange={(e) => setMethod(e.target.value)}>
        <option value="UPI">UPI</option>
        <option value="Bank Transfer">Bank Transfer</option>
        <option value="Wallet">Wallet</option>
      </select>
      <button onClick={handleTransfer}>Send</button>
      <p>{status}</p>
    </div>
  );
};

export default FundTransfer;