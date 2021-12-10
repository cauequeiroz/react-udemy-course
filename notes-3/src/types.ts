export type Todo = {
  id: string,
  text: string,
  completed: boolean
}

export type TodoList = {
  items: Todo[],
  count: number,
  completeCount: number
};