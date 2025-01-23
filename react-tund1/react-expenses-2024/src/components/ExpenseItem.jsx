// ExpenseItem.jsx
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.jsx";

const ExpenseItem = (props) => {

  console.log(props);
  console.log(props.data);

  return (
    <div className="expense-item">
      <ExpenseDate date={props.data.date}/>
      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
        <div className="expense-item__price">
          €{props.data.price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
