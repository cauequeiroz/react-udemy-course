import { FC } from "react";
import { Wrapper } from "./styles";
import { Todo } from "../todo";
import * as types from "../../types";

type TodoListProps = {
  items: types.Todo[];
  onCompleteTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
};

const TodoList: FC<TodoListProps> = (props) => {

  return (
    <Wrapper>
      {props.items.map((item) => (
        <Todo
          onClick={(id) => props.onCompleteTodo(id)}
          onDoubleClick={(id) => props.onRemoveTodo(id)}
          key={item.id}
          id={item.id}
          text={item.text}
          completed={item.completed}
        />
      ))}
    </Wrapper>
  );
};

export { TodoList };
