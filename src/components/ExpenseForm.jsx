
import React, { useState } from "react";

export default function ExpenseForm({ addExpense }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addExpense({ name, amount: Number(amount) });
    setName("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add an expense:</h3>
      <input
        type="text"
        placeholder="Expense name (e.g. Rent)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        
      />
      <button type="submit">Add</button>
    </form>
  );
}
