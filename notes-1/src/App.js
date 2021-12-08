import { useState } from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Macbook Pro',
    amount: 499.99,
    date: new Date(2020, 5, 13),
  },
  {
    id: 2,
    title: 'GTX 3080 8gb',
    amount: 1288.0,
    date: new Date(2020, 8, 20),
  },
  {
    id: 3,
    title: 'Playstation 5',
    amount: 300.0,
    date: new Date(2021, 2, 8),
  },
  {
    id: 4,
    title: 'Headset Razor',
    amount: 813.32,
    date: new Date(2021, 3, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_DATA);

  const newExpenseHandler = (expense) => {
    setExpenses(prevState => [expense, ...prevState]);
  };

  return <>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={expenses} />
  </>;
}

export default App;
