import React, { FC } from 'react'
import * as S from './styles'
import { Logo } from '../Logo'

import LinkComponent from '../LinkComponent'
import LinkWrapper from '../LinkWrapper'

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
