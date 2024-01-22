/* eslint-disable @typescript-eslint/no-explicit-any */
import { Todo } from "../../types"
import { produce } from "immer"

export interface TodosState {
  todos: Todo[]
}

export interface Action {
  type: any
  payload: any
}

function todosReducer(state: TodosState, action: Action) {
  switch (action.type) {
    case "add":
      return produce(state, (draft) => {
        draft.todos.push({
          id: getId(),
          text: action.payload.text,
          completed: false,
        })
      })
    case "delete":
      return produce(state, (draft) => {
        draft.todos = draft.todos.filter(
          (todo) => todo.id !== action.payload.id,
        )
      })
    case "check":
      return produce(state, (draft) => {
        const index = draft.todos.findIndex(
          (todo) => todo.id === action.payload.id,
        )
        if (index === -1) return
        draft.todos[index].completed = !draft.todos[index].completed
      })
    default:
      return state
  }
}

const getId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export default todosReducer
