import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";

function Expenses(props) {
  const [FilteredYear, SetFilteredYearValue] = useState("");
  //let FilteredExpense = [];
  const getSelectedYearHandler = (selectedYear) => {
    SetFilteredYearValue(selectedYear);
    console.log(props);
  };
  // function filteredYear(value) {
  //   return value.date.getFullYear().toString() === selectedYear;
  // }
  // let FilteredExpense = Object.entries(props)[0][1].filter(filteredYear);
  const FilteredExpense = props.items.filter((expense) => {
    console.log(FilteredYear);
    return expense.date.getFullYear().toString() === FilteredYear;
  });
  console.log("Filtered Expenses");
  console.log(FilteredExpense);

  return (
    <div>
      <ExpenseFilter
        selected={FilteredYear}
        onGetSelectedYear={getSelectedYearHandler}
      />
      <Card>
        <ExpensesList item={FilteredExpense} />
      </Card>
    </div>
  );
}

export default Expenses;
