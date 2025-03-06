import React from 'react';
import { deleteEntry } from '../services/api';

const BudgetTable = ({ entries, onEntryDeleted }) => {
    const handleDelete = async (id) => {
        await deleteEntry(id);
        onEntryDeleted();
    };

    return (
        <table>
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
                {entries.map(entry => (
                    <tr key={entry._id}>
                        <td>{entry.date}</td>
                        <td>{entry.total}</td>
                        <td>{entry.used}</td>
                        <td>{entry.savings}</td>
                        <td>{entry.savingsPercent.toFixed(2)}%</td>
                        <td>{entry.notes}</td>
                        <td><button onClick={() => handleDelete(entry._id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BudgetTable;