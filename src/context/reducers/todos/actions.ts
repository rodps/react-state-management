const addTodo = (text: string) => ({ type: "add", payload: { text } })
const deleteTodo = (id: string) => ({ type: "delete", payload: { id } })
const checkTodo = (id: string) => ({ type: "check", payload: { id } })

export { addTodo, deleteTodo, checkTodo }
