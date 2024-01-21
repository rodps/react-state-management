import { create } from "zustand"

export type TodoType = {
  completed: boolean
  text: string
}

export interface TodoListState {
  todos: TodoType[]
  addTodo: (todo: string) => void
  deleteTodo: (todo: TodoType) => void
  checkTodo: (todo: TodoType) => void
}

const useTodoListStore = create<TodoListState>()((set, get) => ({
  todos: [],
  addTodo: (todo: string) => {
    if (todo == "") return
    if (get().todos.find((t) => t.text === todo)) return
    set((state) => ({
      todos: [
        ...state.todos,
        {
          text: todo,
          completed: false,
        },
      ],
    }))
  },
  deleteTodo: (todo: TodoType) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
  checkTodo: (todo: TodoType) =>
    set((state) => {
      const todos = state.todos.map((t) => {
        if (t.text === todo.text) {
          return {
            ...t,
            completed: !t.completed,
          }
        }
        return t
      })
      return { todos }
    }),
}))

export default useTodoListStore
