import { FC } from "react";
import { useDispatch } from "react-redux";

import { completeTodo, removeTodo } from "../../store";
import * as types from "../../types";

import { Wrapper } from "./styles";

const Todo: FC<types.Todo> = (props) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      onClick={() => dispatch(completeTodo(props.id))}
      onDoubleClick={() => dispatch(removeTodo(props.id))}
      completed={props.completed}
    >
      {props.text}
    </Wrapper>
  );
};

export { Todo };
