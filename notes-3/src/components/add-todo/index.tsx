import { FC, FormEvent, useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store";
import { Form, Label, Input, Button } from "./styles";

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
      <Label htmlFor="add-todo">Create new todo:</Label>
      <Input type="text" id="add-todo" ref={$input} />
      <Button>Add</Button>
    </Form>
  );
};

export { AddTodo };
