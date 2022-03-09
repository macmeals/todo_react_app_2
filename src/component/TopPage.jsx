import React from "react"
import { Link } from "react-router-dom"

export const TopPage = () => {
  return (
    <div>
      <h1>Todoアプリ</h1>
      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
