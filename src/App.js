
import React, { useState } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import Summary from "./components/Summary";

function App() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <Header />
      <IncomeForm setIncome={setIncome} />
      <ExpenseForm addExpense={addExpense} />
      <Summary income={income} expenses={expenses} />
    </div>
  );
}

export default App;
