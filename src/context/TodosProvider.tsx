import { createContext, useReducer } from "react"
import todosReducer, { Action, TodosState } from "./reducers/todos/reducer"

export const TodosContext = createContext<{
  state: TodosState
  dispatch: React.Dispatch<Action>
} | null>(null)

function TodosProvider({ children }: { children: React.ReactNode }) {
  const initialState = {
    todos: [],
  }
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosProvider
