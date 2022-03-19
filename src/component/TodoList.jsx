// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

// import { Link, useLocation } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { LinkText } from "./LinkText"
import { EventButton } from "./Button"

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
    &:nth-child(even) {
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
    console.log(todoLists)
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
              {/* EvnentButtonコンポーネントを呼び出す */}
              <EventButton
                clickEvent={onDeleteTodo}
                indexNumber={index}
                buttonName={"削除"}
              />
              <EventButton
                clickEvent={onCompleteTodo}
                indexNumber={index}
                buttonName={"完了"}
              />
            </StyledList>
          )
        })}
      </ul>
      <LinkText destination={"/todoregister"} linkName={"Todo登録"} />
    </div>
  )
}
