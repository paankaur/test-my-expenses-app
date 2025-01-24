// App.jsx

// import React from 'react'
import Expenses from "./components/Expenses.jsx";

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

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
