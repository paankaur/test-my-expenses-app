// App.jsx
import React from "react";
import Expenses from "./components/Expenses/Expenses.jsx";
import NewExpense from "./components/NewExpense/NewExpense.jsx";

const App = () => {
  const expenses = [
    {
      date: new Date(2025, 1, 23),
      title: "New Book",
      price: 30.99,
    },
    {
      date: new Date(2025, 1, 23),
      title: "New Jeans",
      price: 99.99,
    },
  ];

  const addExpenseHandeler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandeler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
