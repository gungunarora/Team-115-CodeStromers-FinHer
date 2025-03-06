import React, { useState } from "react";
import { Container, Table, Button, Form } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import "bootstrap/dist/css/bootstrap.min.css";
import "chart.js/auto";

const BudgetTracker = () => {
  const [date, setDate] = useState("");
  const [totalMoney, setTotalMoney] = useState("");
  const [moneyUsed, setMoneyUsed] = useState("");
  const [notes, setNotes] = useState("");
  const [entries, setEntries] = useState([]);
  
  let previousTotalSavings = 0;
  const dateLabels = entries.map(entry => entry.date);
  const savingsData = entries.map(entry => entry.savings);
  const savingsPercentage = entries.map(entry => entry.savingsPercent);
  const moneyUsedData = entries.map(entry => entry.used);
  
  const addEntry = () => {
    if (!date || totalMoney <= 0) {
      alert("Please enter a valid date and total money amount.");
      return;
    }
    
    const total = parseFloat(totalMoney) || 0;
    const used = parseFloat(moneyUsed) || 0;
    const savings = previousTotalSavings + total - used;
    previousTotalSavings = savings;
    const savingsPercent = total ? (savings / total) * 100 : 0;
    
    setEntries([...entries, { date, total, used, savings, savingsPercent, notes }]);
    setTotalMoney("");
    setMoneyUsed("");
    setNotes("");
  };
  
  const deleteEntry = (index) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };
  
  return (
    <Container className="mt-4">
      <h2 className="text-center">Daily Budget Tracker</h2>
      <Form.Control type="date" className="my-3" value={date} onChange={(e) => setDate(e.target.value)} />
      
      <Form.Group className="mb-3">
        <Form.Control as="textarea" className="sticky-note" value={notes} placeholder="Write your notes..." onChange={(e) => setNotes(e.target.value)} />
      </Form.Group>
      
      <h4>Money Management</h4>
      <Form.Group className="mb-3">
        <Form.Label>Total Money:</Form.Label>
        <Form.Control type="number" value={totalMoney} onChange={(e) => setTotalMoney(e.target.value)} placeholder="Enter total money" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Money Used:</Form.Label>
        <Form.Control type="number" value={moneyUsed} onChange={(e) => setMoneyUsed(e.target.value)} placeholder="Enter money used" />
      </Form.Group>
      
      <Table bordered>
        <thead>
          <tr>
            <th>Date</th>
            <th>Total Money</th>
            <th>Money Used</th>
            <th>Total Savings</th>
            <th>Savings (%)</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.total}</td>
              <td>{entry.used}</td>
              <td>{entry.savings}</td>
              <td>{entry.savingsPercent.toFixed(2)}%</td>
              <td>{entry.notes}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteEntry(index)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      
      <Button className="btncolor" onClick={addEntry}>Add Expense</Button>
      
      <div className="chart-container mt-4">
        <Line data={{ labels: dateLabels, datasets: [{ label: "Total Savings", data: savingsData, borderColor: "blue", backgroundColor: "rgba(0, 123, 255, 0.2)", fill: true, tension: 0.4 }] }} />
      </div>
      <div className="chart-container mt-4">
        <Line data={{ labels: dateLabels, datasets: [{ label: "Savings Percentage", data: savingsPercentage, borderColor: "green", backgroundColor: "rgba(40, 167, 69, 0.2)", fill: true, tension: 0.4 }] }} />
      </div>
      <div className="chart-container mt-4">
        <Line data={{ labels: dateLabels, datasets: [{ label: "Money Used", data: moneyUsedData, borderColor: "red", backgroundColor: "rgba(255, 99, 132, 0.2)", fill: true, tension: 0.4 }] }} />
      </div>
    </Container>
  );
};

export default BudgetTracker;


