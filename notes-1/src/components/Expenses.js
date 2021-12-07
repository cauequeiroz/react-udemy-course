import { useState } from "react/cjs/react.development";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./Chart/ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const onChangeFilteredYear = (selected) => setFilteredYear(selected);

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChange={onChangeFilteredYear} />
      <ExpensesChart items={filteredItems} />
      <ExpenseList items={filteredItems} />
    </div>
  );
}

export default Expenses;
