import { createSlice } from "@reduxjs/toolkit"

export interface Todo {
  id: string
  text: string
  completed: boolean
}

export interface TodoListState {
  todos: Todo[]
}

const initialState: TodoListState = {
  todos: [],
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: { payload: { todo: string } }) => {
      state.todos.push({
        id: getId(),
        text: action.payload.todo,
        completed: false,
      })
    },
    checkTodo: (state, action: { payload: { id: string } }) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      )
      state.todos[index].completed = !state.todos[index].completed
    },
    deleteTodo: (state, action: { payload: { id: string } }) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
    },
  },
})

const getId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export const { addTodo, checkTodo, deleteTodo } = todosSlice.actions

const todosReducer = todosSlice.reducer
export default todosReducer
