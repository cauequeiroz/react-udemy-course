import { useState } from "react";
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const createNewExpense = ({title, amount, date}) => {
    const entry = {
      title,
      amount,
      date,
      id: Math.random().toString()
    };

    props.onNewExpense(entry);
    closeFormHandler();
  };

  const openFormHandler = () => setIsFormOpen(true);
  const closeFormHandler = () => setIsFormOpen(false);

  return (
    <div className="new-expense">
      {!isFormOpen && <button onClick={openFormHandler}>Add new expense</button>}
      {isFormOpen && <ExpenseForm onSubmitForm={createNewExpense} onCancel={closeFormHandler} />}
    </div>
  );
};

export default NewExpense;