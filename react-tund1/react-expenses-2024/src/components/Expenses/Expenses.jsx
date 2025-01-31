// Expenses.jsx
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx"

const Expenses = (props) => {




  return (
    <Card className="expenses">
      {props.items.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;