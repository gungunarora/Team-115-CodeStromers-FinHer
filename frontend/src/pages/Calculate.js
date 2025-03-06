import React, { useState } from "react";
import "./Calculate.css";
import imagewoman from "../assets/women.png";

const Calculate = () => {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpending, setTotalSpending] = useState(0);
  const [budgetInput, setBudgetInput] = useState("");
  const [expenseInput, setExpenseInput] = useState("");

  const handleSetBudget = () => {
    setTotalBudget(parseFloat(budgetInput) || 0);
    setBudgetInput("");
  };

  const handleAddExpense = () => {
    setTotalSpending((prev) => prev + (parseFloat(expenseInput) || 0));
    setExpenseInput("");
  };

  const remainingBalance = totalBudget - totalSpending;

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <div>
          <h1>
            <span className="highlight">Budgeting</span>
          </h1>
          <h2>Take control of your budget together</h2>
          <p>Budgeting together just got a whole lot easier—and even fun!</p>
          <button className="btn">Start budgeting now</button>
        </div>
        <div className="image-container">
          <img src={imagewoman} alt="Finance Illustration" />
        </div>
      </div>

      {/* Budget Management */}
      <div className="budget-management">
        <h3>Manage Your Budget</h3>
        <div className="budget-info">
          <p>
            Managing money can be overwhelming, but it doesn’t have to be! This
            budgeting tool is
            <strong> designed specifically for women</strong>—whether you’re a
            working professional, stay-at-home mom, freelancer, or student.
          </p>
          <p>
            Women juggle multiple financial responsibilities, from household
            expenses to savings and investments. A well-planned budget helps
            you:
          </p>
          <ul>
            <li>✔️ Take control of your income and expenses</li>
            <li>✔️ Save efficiently for future goals</li>
            <li>✔️ Reduce unnecessary spending</li>
            <li>✔️ Plan ahead for financial security</li>
          </ul>
          <p>
            <strong>How to Use This Tool?</strong> <br />
            - **Set Your Budget** 📝 → Define your monthly spending limit.{" "}
            <br />
            - **Track Expenses** 💸 → Log daily expenses to stay within budget.{" "}
            <br />- **Analyze Your Balance** 💡 → See how much you have left at
            any time.
          </p>
        </div>
      </div>
      <div className="budget-grid">
        <div className="card">
          <h5>Total Budget</h5>
          <p className="budget-amount">${totalBudget}</p>
          <input
            type="number"
            className="input"
            placeholder="Enter budget"
            value={budgetInput}
            onChange={(e) => setBudgetInput(e.target.value)}
          />
          <button className="btn" onClick={handleSetBudget}>
            Set Budget
          </button>
        </div>
        <div className="card">
          <h5>Total Spending</h5>
          <p className="spending-amount">${totalSpending}</p>
          <input
            type="number"
            className="input"
            placeholder="Enter expense"
            value={expenseInput}
            onChange={(e) => setExpenseInput(e.target.value)}
          />
          <button className="btn expense" onClick={handleAddExpense}>
            Add Expense
          </button>
        </div>
        <div className="card">
          <h5>Remaining Balance</h5>
          <p className="balance-amount">${remainingBalance}</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h3>Ready to take control of your budget?</h3>
        <p>Start tracking your expenses and savings today!</p>
        <button className="btn">Get Started Now</button>
      </div>
    </div>
  );
};

export default Calculate;
