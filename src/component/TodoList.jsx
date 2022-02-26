import { Link } from "react-router-dom"

export const TodoList = () => {
  return (
    <div>
      <h2>Todo一覧</h2>
      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
