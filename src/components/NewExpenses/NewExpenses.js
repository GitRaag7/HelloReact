import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpense = () => {
  //for applying some styling around the form
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
