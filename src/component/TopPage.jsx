// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import React from "react"
import { Link } from "react-router-dom"
import { css } from "@emotion/react"

export const TopPage = () => {
  const topStyle = css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

  return (
    <div css={topStyle}>
      <h1>Todoアプリ</h1>
      <Link to="/todoregister">Todo登録</Link>
    </div>
  )
}
