import "./ExpenseItem.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div>
      <h2>Let's get started!</h2>

      <ExpenseItem
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
      />
    </div>
  );
}

export default Expenses;
