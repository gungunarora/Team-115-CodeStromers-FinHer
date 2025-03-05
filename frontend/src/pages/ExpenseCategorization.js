// src/components/ExpenseCategorization.js
import React, { useState } from 'react';

const ExpenseCategorization = () => {
  const [expense, setExpense] = useState('');
  const [category, setCategory] = useState('Food');

  const handleCategorize = () => {
    console.log(`Categorized ${expense} under ${category}`);
  };

  return (
    <div>
      <h2>Expense Categorization</h2>
      <input
        type="text"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        placeholder="Expense Description"
      />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button onClick={handleCategorize}>Categorize</button>
    </div>
  );
};

export default ExpenseCategorization;