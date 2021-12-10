import { FC } from "react";
import { Wrapper } from "./styles";
import { Todo } from "../todo";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const TodoList: FC = () => {
  const items = useSelector((state: RootState) => state.items);

  return (
    <Wrapper>
      {items.map((item) => (
        <Todo
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
