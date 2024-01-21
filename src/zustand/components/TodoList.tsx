import useTodoListStore from "../store"
import TodoItem from "./TodoItem"

function TodoList() {
  const todos = useTodoListStore((state) => state.todos)

  return (
    <ul className="w-full">
      {todos.map((todo, i) => (
        <TodoItem key={i} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
