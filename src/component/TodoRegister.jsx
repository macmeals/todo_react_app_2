import { Link } from "react-router-dom"

export const TodoRegister = () => {
  return (
    <div>
      <h2>Todo登録</h2>
      <input type="text" />
      <button>登録</button>
      <Link to="/todolist">Todo一覧へ</Link>
    </div>
  )
}
