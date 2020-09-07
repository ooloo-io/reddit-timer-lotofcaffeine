import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

type LinkWrapperPros = {
  to: string
  out?: boolean
}

const LinkWrapper: FC<LinkWrapperPros> = ({ children, to, out }) => {
  if (out) {
    return (
      <S.Wrapper as='div'>
        <Link to={to}>{children}</Link>
      </S.Wrapper>
    )
  }
  return (
    <S.Wrapper>
      <Link to={to}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
