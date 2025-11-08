
import React, { useState } from "react";

export default function IncomeForm({ setIncome }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome(Number(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Enter your monthly income:</h3>
      <input
        type="number"
        placeholder="e.g. 2000"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        
      />
      <button type="submit">Save</button>
    </form>
  );
}
