// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const TodoList = () => {
  const todoStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  const linkstyle = css`
    font-size: 20px;
    height: 50px;
  `

  // StyledListからpropsを受け取り、todoFlagがtrueの場合、text-decoration:line-throughとなる
  const StyledList = styled.li`
    display: flex;
    > p {
      width: 60vw;
      text-decoration: ${(props) => (props.todoflag ? "line-through" : "")};
    }
  `
  const Listbutton = styled.button`
    color: black;
    background-color: white;
    display: inline-block;
    padding: 0.5em 1.7em;
    margin: 30px 30px 30px 0;
    border: 1px solid black;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    text-shadow: 0 0.04em 0.04em rgba(255, 255, 255, 0.253);
    text-align: center;
    transition: all 0.2s;

    &:hover {
      color: white;
      background-color: black;
    }
  `

  const { state } = useLocation()
  const [todoLists, setTodoLists] = useState([])

  // 画面変移時に一度だけ、TodoListのStateを更新する。
  // その為UseEffectの第二変数に[]を記載
  useEffect(() => {
    setTodoLists(state.state)
  }, [])

  // todoリストを削除する関数onDeleteTodoを定義
  const onDeleteTodo = (index) => {
    const deleteTodos = [...todoLists] // 削除する対象のデータ配列を関数deleteTodoに格納
    deleteTodos.splice(index, 1) // index番号から１番目の要素を削除
    setTodoLists(deleteTodos)
    // setTodoListsでtodoListsにstate保存
  }

  // todoリストを完了（completeFlagをTrueにする）関数onCompleteTodoを定義
  const onCompleteTodo = (index) => {
    const CompleteTodos = [...todoLists] // 完了する対象のデータ配列を関数CompTodosTodoに格納
    CompleteTodos[index].completeFlag = true //対象のデータ配列のCompleteFlagをTrueにする
    setTodoLists(CompleteTodos) // setTodoListsでtodoListsにstate保存
    console.log(todoLists)
  }

  return (
    <div css={todoStyle}>
      <h2>Todo一覧</h2>
      <ul>
        {todoLists.map((todos, index) => {
          return (
            <StyledList key={todos.id} todoflag={todos.completeFlag}>
              <p>{todos.todo}</p>
              <Listbutton onClick={() => onDeleteTodo(index)}>削除</Listbutton>
              <Listbutton onClick={() => onCompleteTodo(index)}>
                完了
              </Listbutton>
            </StyledList>
          )
        })}
      </ul>

      <Link to="/todoregister" css={linkstyle}>
        Todo登録
      </Link>
    </div>
  )
}
