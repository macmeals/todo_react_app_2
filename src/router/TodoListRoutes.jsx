import { TodoList } from "../component/TodoList"
import { TodoUpdate } from "../component/TodoUpdate"

export const TodoListRoutes = [
  { path: "", exact: true, children: <TodoList /> },

  { path: "todoupdate", exact: false, children: <TodoUpdate /> },
]
