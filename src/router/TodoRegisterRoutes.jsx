import { TodoRegister } from "../component/TodoRegister"
import { TodoList } from "../component/TodoList"

export const TodoRegisterRoutes = [
  { path: "", exact: true, children: <TodoRegister /> },
  { path: "todolist", exact: false, children: <TodoList /> },
]
