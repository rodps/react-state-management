import { useState } from "react"
import TodoList from "./components/TodoList"
import FormAddTodo from "./components/FormAddTodo"
import { TodoListType } from "../types"

function App() {
  const [todos, setTodos] = useState<TodoListType>([])

  const onSubmit = (todo: string) => {
    if (todo == "") return
    setTodos([...todos, { text: todo, completed: false }])
  }

  const onDelete = (index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="w-1/3 flex flex-col items-center m-auto gap-5">
      <h1 className="text-3xl font-bold underline text-center mt-3">
        My Todos
      </h1>
      <FormAddTodo onSubmit={onSubmit} />
      <TodoList todos={todos} onDelete={onDelete} />
    </div>
  )
}

export default App
