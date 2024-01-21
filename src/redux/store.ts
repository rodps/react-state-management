import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./features/todos/todosSlice"

const store = configureStore({
  reducer: {
    todoList: todosReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
