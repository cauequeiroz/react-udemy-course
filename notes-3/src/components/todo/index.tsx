import { FC } from 'react';
import { Wrapper } from "./styles";
import * as types from "../../types";

type TodoProps = types.Todo & {
  onClick: (id: string) => void,
  onDoubleClick: (id: string) => void
};

const Todo:FC<TodoProps> = (props) => {
  return (
    <Wrapper onClick={() => props.onClick(props.id)} onDoubleClick={() => props.onDoubleClick(props.id)} completed={props.completed}>
      {props.text}
    </Wrapper>
  );
};

export { Todo };