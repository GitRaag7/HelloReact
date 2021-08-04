import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //const datex = new Date(2021, 6, 26);
  //const loan = "Platinum loan";
  //const value = 50000000;

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
