// "@emotion/react"には以下が必須
/** @jsxImportSource @emotion/react */

import { Link } from "react-router-dom"
import { css } from "@emotion/react"

export const LinkText = (props) => {
  const { destination, linkState } = props
  const linkstyle = css`
    font-size: 20px;
    height: 50px;
  `

  return (
    <Link to={destination} state={{ state: linkState }} css={linkstyle}>
      {props.children}
    </Link>
  )
}
