import styled, { css } from 'styled-components'
import { LogoProps } from '.'

const wrapperModifier = {
  hideTitle: () => css`
    .text {
      display: none;
      pointer-events: none;
    }
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, hideTitle }) => css`
    color: ${theme.colors[color!]};
    width: 15rem;
    height: 3.6rem;
    ${!!hideTitle && wrapperModifier.hideTitle}
  `};
`
