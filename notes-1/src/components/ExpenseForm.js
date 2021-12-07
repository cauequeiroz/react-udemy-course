import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  
  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    props.onSubmitForm({ title, amount, date });
    resetForm();
  }

  const resetForm = () => {
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={changeTitleHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={amount} onChange={changeAmountHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2020-12-31" value={date} onChange={changeDateHandler} />
        </div>
      </div>

      <div className="new-expense__actions">
        <button>Add expense</button>
      </div>
    </form>
  )
};

export default ExpenseForm;