
import React from "react";

export default function Summary({ income, expenses }) {
  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = income - totalExpenses;

  return (
    <div>
      <h3>Summary</h3>
      <p><b>Income:</b> ${income}</p>
      <p><b>Total Expenses:</b> ${totalExpenses}</p>
      <p><b>Remaining:</b> ${remaining}</p>

      <h4>Expenses List:</h4>
      <ul>
        {expenses.map((e, i) => (
          <li key={i}>{e.name} - ${e.amount}</li>
        ))}
      </ul>
    </div>
  );
}
