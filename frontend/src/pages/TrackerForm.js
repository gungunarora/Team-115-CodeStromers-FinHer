import React, { useState } from 'react';
import { addEntry } from '../services/api';

const BudgetForm = ({ onEntryAdded }) => {
    const [date, setDate] = useState('');
    const [total, setTotal] = useState('');
    const [used, setUsed] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addEntry({ date, total, used, notes });
        onEntryAdded();
        setDate(''); setTotal(''); setUsed(''); setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} placeholder="Total Money" required />
            <input type="number" value={used} onChange={(e) => setUsed(e.target.value)} placeholder="Money Used" required />
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Notes"></textarea>
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default BudgetForm;
