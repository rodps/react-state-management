interface ITodoListProps {
  todos: string[]
  onDelete: (index: number) => void
}

function TodoList({ todos, onDelete }: ITodoListProps) {
  return (
    <ul className="w-full">
      {todos.map((todo, i) => (
        <li key={i} className="flex mb-3">
          <p className="flex-1">{todo}</p>
          <button
            onClick={() => onDelete(i)}
            className="py-2 px-4 bg-red-500 text-white rounded text-xs hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
