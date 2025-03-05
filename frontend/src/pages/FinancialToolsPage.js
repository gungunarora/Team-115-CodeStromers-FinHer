import React, { useState } from "react";
import AutoPayment from "./AutoPayment";
import ExpenseCategorization from "./ExpenseCategorization";
import FundTransfer from "./FundTransfer";
import QRCodePayment from "./QRCodePayment";
import "./Calculate.css"; // Using the same styling

const FinancialTools = () => {
  const [activeTab, setActiveTab] = useState("autoPayment");

  return (
    <div className="container">
      <h1 className="highlight">Financial Management Tools</h1>
      <p>Choose a tool to manage your finances efficiently.</p>

      <div className="tab-buttons">
        <button className={`btn ${activeTab === "autoPayment" ? "active" : ""}`} onClick={() => setActiveTab("autoPayment")}>Auto Payment</button>
        <button className={`btn ${activeTab === "expenseCategorization" ? "active" : ""}`} onClick={() => setActiveTab("expenseCategorization")}>Expense Categorization</button>
        <button className={`btn ${activeTab === "fundTransfer" ? "active" : ""}`} onClick={() => setActiveTab("fundTransfer")}>Fund Transfer</button>
        <button className={`btn ${activeTab === "qrCodePayment" ? "active" : ""}`} onClick={() => setActiveTab("qrCodePayment")}>QR Code Payment</button>
      </div>

      <div className="content-section">
        {activeTab === "autoPayment" && <AutoPayment />}
        {activeTab === "expenseCategorization" && <ExpenseCategorization />}
        {activeTab === "fundTransfer" && <FundTransfer />}
        {activeTab === "qrCodePayment" && <QRCodePayment />}
      </div>
    </div>
  );
};

export default FinancialTools;
