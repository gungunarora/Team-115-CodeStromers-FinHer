import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QRCodePayment = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  return (
    <div className="qr-payment-container">
      <h2>QR Code Payment</h2>
      <div className="input-container">
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Recipient (QR Code)"
          className="input-field"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="input-field"
        />
      </div>
      <div className="qr-code-container">
        <QRCodeCanvas value={`upi://pay?pa=${recipient}&pn=PayeeName&mc=0000&tid=12345&tr=123456&tn=Payment&am=${amount}&cu=INR`} />
      </div>
    </div>
  );
};

export default QRCodePayment;
