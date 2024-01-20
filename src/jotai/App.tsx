import TodoList from "./components/TodoList"
import FormAddTodo from "./components/FormAddTodo"

function App() {
  return (
    <div className="w-1/3 flex flex-col items-center m-auto gap-5">
      <h1 className="text-3xl font-bold underline text-center mt-3">
        My Todos
      </h1>
      <FormAddTodo />
      <TodoList />
    </div>
  )
}

export default App
