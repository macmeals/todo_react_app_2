// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { LinkText } from "./LinkText"
import { Button } from "./Button"

export const TodoList = () => {
  const todoStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  const todoTitleStyle = css`
    width: 80vw;
    background-color: #eee6e6;
  `
  const todoListStyle = css`
    width: 80vw;
    padding-inline-start: 0;
  `

  // StyledListからpropsを受け取り、todoFlagがtrueの場合、text-decoration:line-throughとなる
  const StyledList = styled.li`
    display: flex;
    padding-left: 20px;
    align-items: center;
    > p {
      width: 20vw;
      text-decoration: ${(props) => (props.todoflag ? "line-through" : "")};
      margin-block-start: 0;
      margin-block-end: 0;
    }
    &:nth-of-type(2n) {
      background-color: #ffeded;
    }
  `

  const TodoTitles = styled.div`
    display: flex;
    margin-left: 20px;
    > p {
      width: 20vw;
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
  }

  return (
    <div css={todoStyle}>
      <h2>Todo一覧</h2>
      <div css={todoTitleStyle}>
        <TodoTitles>
          <p>Todo開始日</p>
          <p>Todo終了日</p>
          <p>Todoタスク</p>
        </TodoTitles>
      </div>
      <ul css={todoListStyle}>
        {todoLists.map((todos, index) => {
          return (
            <StyledList key={todos.id} todoflag={todos.completeFlag}>
              <p>{todos.from}</p>
              <p>{todos.end}</p>
              <p>{todos.todo}</p>
              {/* Buttonコンポーネントにアロー関数で関数onDeleteTodo(index)をPropsで渡す。indexは引数 */}
              <Button onClickEvent={() => onDeleteTodo(index)}>削除</Button>
              {/* Buttonコンポーネントにアロー関数で関数onCompleteTodo(index)をPropsで渡す。indexは引数 */}
              <Button onClickEvent={() => onCompleteTodo(index)}>完了</Button>
            </StyledList>
          )
        })}
      </ul>
      <LinkText destination={"/todoregister"}>Todo登録</LinkText>
    </div>
  )
}
