import { useState } from "react/cjs/react.development";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { items } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const onChangeFilteredYear = (selected) => setFilteredYear(selected);

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChange={onChangeFilteredYear} />
      <ExpenseItem
        title={items[0].title}
        amount={items[0].amount}
        date={items[0].date}
      />
      <ExpenseItem
        title={items[1].title}
        amount={items[1].amount}
        date={items[1].date}
      />
      <ExpenseItem
        title={items[2].title}
        amount={items[2].amount}
        date={items[2].date}
      />
      <ExpenseItem
        title={items[3].title}
        amount={items[3].amount}
        date={items[3].date}
      />
    </div>
  );
}

export default Expenses;
