import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Dashboard.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [section, setSection] = useState("Overview");
  const [data, setData] = useState({
    Overview: [300, 1000, 200, 500, 500],
    Investments: [20000, 50000, 15000, 10000, 5000],
    Expenses: [600, 1200, 400, 700, 300],
    Income: [5000, 7000, 3000, 2000, 1000],
    Debt: [8000, 15000, 5000, 2000, 1000],
    Goals: [10000, 20000, 15000, 25000, 5000],
  });

  const [netWorth, setNetWorth] = useState(120000);
  const [totalAssets, setTotalAssets] = useState(150000);
  const [totalLiabilities, setTotalLiabilities] = useState(30000);

  const chartData = {
    labels: ["Groceries", "Rent", "Utilities", "Entertainment", "Others"],
    datasets: [
      {
        label: "Expense Amount ($)",
        data: data[section],
        backgroundColor: ["#F1F7ED", "#020202", "#7CA982", "#315C2B", "#81726A"],
      },
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    window.location.href = "/login"; // Redirect to login
  };




  return (
    <div className="d-flex min-vh-100 bg-light text-dark">
      <aside className="bg-dark text-white p-4 position-fixed h-100 rounded-end shadow-lg" style={{ width: '250px' }}>
        <h2 className="text-center mb-4">Finance Dashboard </h2>
        <button
          className="btn btn-danger w-100 mb-4"
          onClick={handleLogout}
        >
          Logout
        </button>
        <ul className="list-unstyled">
          {Object.keys(data).map((item) => (
            <li key={item} className="p-2 rounded mb-2 text-center bg-secondary text-white cursor-pointer" onClick={() => setSection(item)}>
              {item}
            </li>
          ))}
        </ul>
      </aside>
      <main className="ms-5 p-4" style={{ marginLeft: '270px', width: '100%' }}>
        <h2 className="mb-4">{section}</h2>
        <div className="row g-3">
          <div className="col-md-3 setting-md-3"><Card title="Net Worth" value={netWorth} onChange={setNetWorth} /></div>
          <div className="col-md-3"><Card title="Total Assets" value={totalAssets} onChange={setTotalAssets} /></div>
          <div className="col-md-3"><Card title="Total Liabilities" value={totalLiabilities} onChange={setTotalLiabilities} /></div>
        </div>
        <div className="bg-white p-4 rounded shadow mt-4 setting-md-4">
          <Bar data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value, onChange }) => {
  return (
    <div className="card text-center p-3 shadow-sm">
      <h3 className="card-title">{title}</h3>
      <p className="text-success fw-bold fs-4">${value}</p>
      <input
        type="number"
        className="form-control text-end"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default Dashboard;
