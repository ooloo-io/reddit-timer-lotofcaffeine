import React from 'react'
import * as S from './styles'

export type LinkProps = {
  children: React.ReactNode
  color?: 'link' | 'darkGray'
  size?: 'medium' | 'small'
}

const LinkComponent = ({
  children,
  color = 'darkGray',
  size = 'medium',
}: LinkProps) => (
  <S.Wrapper color={color} size={size}>
    <p>{children}</p>
  </S.Wrapper>
)

export default LinkComponent
