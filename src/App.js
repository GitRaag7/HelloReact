import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import "./components/Expenses/Expenses.css";

const PREV_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(PREV_EXPENSES);

  const addNewExpensesHandler = (expenses) => {
    setExpenses((prevExpenses) => {
      console.log("---expenses---");
      console.log(expenses);
      console.log(prevExpenses);
      return [expenses, ...PREV_EXPENSES];
    });

    console.log("In App.js");
    console.log(expenses);
  };

  return (
    <div className="expenses">
      {/* Expenses components */}
      <NewExpenses onAddNewExpenses={addNewExpensesHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
