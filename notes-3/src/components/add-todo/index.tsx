import { FC, FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store";
import { Form } from "./styles";

const AddTodo: FC = () => {
  const $input = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredText = $input.current!.value;
    if (!enteredText.trim().length) return;

    dispatch(addNewTodo(enteredText));
    $input.current!.value = "";
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
