import { proxy } from "valtio"

export interface Todo {
  id: string
  text: string
  completed: boolean
}

interface TodoListStore {
  todos: Todo[]
}

const store = proxy<TodoListStore>({
  todos: [],
})

const addTodo = (todo: string) => {
  store.todos.push({
    id: getId(),
    text: todo,
    completed: false,
  })
}

const checkTodo = (id: string) => {
  const index = store.todos.findIndex((todo) => todo.id === id)
  store.todos[index].completed = !store.todos[index].completed
}

const deleteTodo = (id: string) => {
  store.todos = store.todos.filter((todo) => todo.id !== id)
}

const getId = (): string => {
  return Math.random().toString(36).substring(2, 15)
}

export { store, addTodo, checkTodo, deleteTodo }
