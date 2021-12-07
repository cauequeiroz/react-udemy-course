import ExpenseForm from "./ExpenseForm"
import './NewExpense.css';

const NewExpense = (props) => {
  const createNewExpense = ({title, amount, date}) => {
    const entry = {
      title,
      amount,
      date,
      id: Math.random().toString()
    };

    props.onNewExpense(entry);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={createNewExpense} />
    </div>
  );
};

export default NewExpense;