import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
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
        {FilteredExpense.map((abc) => (
          <ExpenseItem
            key={abc.id}
            amount={abc.amount}
            date={abc.date}
            title={abc.title}
          />
        ))}
        ;
        {/* <ExpenseItem
          id={props.exp[0].id}
          title={props.exp[0].title}
          amount={props.exp[0].amount}
          date={props.exp[0].date}
        />
        <ExpenseItem
          id={props.exp[1].id}
          title={props.exp[1].title}
          amount={props.exp[1].amount}
          date={props.exp[1].date}
        />
        <ExpenseItem
          id={props.exp[2].id}
          title={props.exp[2].title}
          amount={props.exp[2].amount}
          date={props.exp[2].date}
        />
        <ExpenseItem
          id={props.exp[3].id}
          title={props.exp[3].title}
          amount={props.exp[3].amount}
          date={props.exp[3].date}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
