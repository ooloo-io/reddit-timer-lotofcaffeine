import React, { FC } from 'react'
import * as S from './styles'
import { Logo } from '../Logo'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LinkComponent from '../LinkComponent'

type LinkWrapperPros = {
  to: string
  out?: boolean
}

const LinkWrapper: FC<LinkWrapperPros> = ({ children, to, out }) => {
  if (out) {
    return (
      <S.Component as='div'>
        <Link to={to}>{children}</Link>
      </S.Component>
    )
  }
  return (
    <S.Component>
      <Link to={to}>{children}</Link>
    </S.Component>
  )
}

export const Header = () => (
  <S.Wrapper>
    <S.Nav>
      <LinkWrapper out to='/'>
        <Logo />
      </LinkWrapper>
      <ul>
        <LinkWrapper to='/search/javascript'>
          <LinkComponent>Search</LinkComponent>
        </LinkWrapper>
        <LinkWrapper to='/#how-it-works'>
          <LinkComponent>How it works</LinkComponent>
        </LinkWrapper>
        <LinkWrapper to='/#about'>
          <LinkComponent>About</LinkComponent>
        </LinkWrapper>
      </ul>
    </S.Nav>
  </S.Wrapper>
)
