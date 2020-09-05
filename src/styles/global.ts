import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      margin: 0;
      height: 100%;
      width: 100%;
    }
    body,
    input,
    button {
      font-family: ${theme.font.primary};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
