import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "./styles";

import { AddTodo } from "./components/add-todo";
import { StatusBar } from "./components/status-bar";
import { TodoList } from "./components/todo-list";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <AddTodo />
      <TodoList />
      <StatusBar />
    </Provider>
  );
}

export default App;
