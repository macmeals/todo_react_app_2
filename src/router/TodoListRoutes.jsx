import { TodoList } from "../component/TodoList"
import { TodoRegister } from "../component/TodoRegister"
import { TodoUpdate } from "../component/TodoUpdate"

export const TodoListRoutes = [
  { path: "", exact: true, children: <TodoList /> },
  { path: "todoregister", exact: false, children: <TodoRegister /> },
  { path: "todoupdate", exact: false, children: <TodoUpdate /> },
]
