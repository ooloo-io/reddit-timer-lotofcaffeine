import styled, { css } from 'styled-components'
import { LinkProps } from '.'

export const Wrapper = styled.div<LinkProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes[size!]};
  `}
`
