import { useState } from "react";
import { AddTodo } from "./components/add-todo";
import { StatusBar } from "./components/status-bar";
import { TodoList } from "./components/todo-list";
import { GlobalStyle } from "./styles";
import * as types from "./types";

function App() {
  const [state, setState] = useState<types.TodoList>({
    items: [],
    count: 0,
    completeCount: 0,
  });

  const handleAddTodo = (text: string) => {
    const newItem: types.Todo = {
      id: new Date().toISOString(),
      text,
      completed: false,
    };

    setState((prevState) => ({
      items: [...prevState.items, newItem],
      count: prevState.count + 1,
      completeCount: prevState.completeCount,
    }));
  };

  const handleCompleteTodo = (id: string) => {
    setState(({ items, count, completeCount }) => {
      const newItems = items.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });

      return {
        items: newItems,
        count,
        completeCount: newItems.filter((item) => item.completed).length,
      };
    });
  };

  const handleRemoveTodo = (id: string) => {
    setState(({ items, count }) => {
      const newItems = items.filter((item) => item.id !== id);

      return {
        items: newItems,
        count: count - 1,
        completeCount: newItems.filter((item) => item.completed).length,
      };
    });
  };

  return (
    <>
      <GlobalStyle />
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        items={state.items}
        onCompleteTodo={handleCompleteTodo}
        onRemoveTodo={handleRemoveTodo}
      />
      <StatusBar count={state.count} completeCount={state.completeCount} />
    </>
  );
}

export default App;
