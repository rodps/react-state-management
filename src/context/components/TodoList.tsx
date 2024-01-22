import useTodos from "../hooks/use-todos"
import TodoItem from "./TodoItem"

function TodoList() {
  const { state } = useTodos()

  return (
    <ul className="w-full">
      {state.todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
