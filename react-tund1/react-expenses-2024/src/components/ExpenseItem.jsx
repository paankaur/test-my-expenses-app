// ExpenseItem.jsx
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";
import Card from "./Card.jsx";

const ExpenseItem = (props) => {


  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data.date}/>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">
          €{props.data.price.toFixed(2)}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
