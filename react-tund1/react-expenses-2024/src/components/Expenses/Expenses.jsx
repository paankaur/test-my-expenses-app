// Expenses.jsx
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem.jsx";
import Card from "../UI/Card.jsx";
import ExpensesFilter from "../Filter/ExpensesFilter.jsx";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2025");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={yearChangeHandler} />
      
      {filteredExpenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </Card>
  );
};

export default Expenses;
