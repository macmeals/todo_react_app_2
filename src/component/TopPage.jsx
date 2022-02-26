import React from "react"
import { Link } from "react-router-dom"

export const TopPage = () => {
  return (
    <div>
      <h1>Todoアプリ</h1>
      <Link to="/todoregister">1.Todo登録</Link>
      <Link to="/todolist">2.Todo一覧</Link>
    </div>
  )
}
