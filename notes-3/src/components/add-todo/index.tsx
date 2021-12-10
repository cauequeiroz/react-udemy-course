import { FC, FormEvent, useRef } from 'react';
import { Form } from './styles';

type AddTodoProps = {
  onAddTodo: (text: string) => void
};

const AddTodo: FC<AddTodoProps> = (props) => {
  const $input = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = $input.current!.value;
    if (!enteredText.trim().length) return;

    props.onAddTodo(enteredText);
    $input.current!.value = '';
  };

  return (
    <Form onSubmit={submitHandler}>
      <label htmlFor="add-todo">Create new todo:</label>
      <input type="text" id="add-todo" ref={$input} />
      <button>Add</button>
    </Form>
  );
};

export { AddTodo };