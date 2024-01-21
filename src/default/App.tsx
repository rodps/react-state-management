import { useState } from "react"
import TodoList from "./components/TodoList"
import FormAddTodo from "./components/FormAddTodo"
import { TodoType } from "./types"

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])

  const onSubmit = (todo: TodoType) => {
    if (todo.text == "") return
    if (todos.find((t) => t.text === todo.text)) return
    setTodos([...todos, todo])
  }

  const onDelete = (todo: TodoType) => {
    setTodos(todos.filter((t) => t.text !== todo.text))
  }

  const onCheck = (todo: TodoType) => {
    setTodos(
      todos.map((t) => {
        if (t.text === todo.text) {
          return {
            ...t,
            completed: !t.completed,
          }
        }
        return t
      }),
    )
  }

  return (
    <div className="w-1/3 flex flex-col items-center m-auto gap-5">
      <h1 className="text-3xl font-bold underline text-center mt-3">
        My Todos
      </h1>
      <FormAddTodo onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} onCheck={onCheck} />
    </div>
  )
}

export default App
