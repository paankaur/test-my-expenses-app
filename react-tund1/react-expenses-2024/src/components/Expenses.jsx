// Expenses.jsx
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";

const Expenses = (props) => {




  return (
    <div className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default Expenses;