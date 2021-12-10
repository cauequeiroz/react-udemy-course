import { configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as types from "./types";

const initialState: types.TodoList = {
  items: [],
  count: 0,
  completeCount: 0,
};

const slice = createSlice({
  name: "TodoList",
  initialState,
  reducers: {
    addNewTodo(state, { payload }: PayloadAction<string>) {
      const newItem: types.Todo = {
        id: new Date().toISOString(),
        text: payload,
        completed: false,
      };

      state.items.push(newItem);
      state.count += 1;
    },

    completeTodo(state, { payload }: PayloadAction<string>) {
      const item = state.items.find((todo) => todo.id === payload);

      if (item!.completed) {
        item!.completed = false;
        state.completeCount -= 1;
      } else {
        item!.completed = true;
        state.completeCount += 1;
      }
    },

    removeTodo(state, { payload }: PayloadAction<string>) {
      state.items = state.items.filter((todo) => todo.id !== payload);
      state.count -= 1;
      state.completeCount = state.items.filter((item) => item.completed).length;
    },
  },
});

const store = configureStore({
  reducer: slice.reducer,
});

export const { addNewTodo, completeTodo, removeTodo } = slice.actions;
export type RootState = ReturnType<typeof store.getState>;
export default store;
