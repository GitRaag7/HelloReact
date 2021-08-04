import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useSatate("");
  const [enteredAmount, setEnteredAmount] = useSatate("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeEventHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeEventHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeEventHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeEventHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChnage={amountChangeEventHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2021-08-13"
            onChange={dateChangeEventHandler}
          />
        </div>
        <div className="new-expense__controls">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
