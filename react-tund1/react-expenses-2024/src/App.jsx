// App.jsx

// import React from 'react'
import ExpenseItem from "./components/ExpenseItem.jsx";

const App = () => {

const expenses = [
  {
    date: new Date(2025, 1, 23),
    title: "New Book",
    price: 30.99
  },
  {
    date: new Date(2025, 1, 23),
    title: "New Jeans",
    price: 99.99
  }
]

  // const data = {
  // date: new Date(2025, 1, 23),
  // title: "New Book",
  // price: 30.99
  // };
  return (
    <div className="App">
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} data={expense} />
      ))}
    </div>
  );
};

export default App;
