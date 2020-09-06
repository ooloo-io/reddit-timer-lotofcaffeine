import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Bitter';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/bitter-v16-latin-regular.woff2') format('woff2')
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  src: local('Montserrat Regular'), local('Montserrat-Regular'),
       url('/fonts/montserrat-v14-latin-regular.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  src: local('Montserrat Medium'), local('Montserrat-Medium'),
       url('/fonts/montserrat-v14-latin-500.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
       url('/fonts/montserrat-v14-latin-600.woff2') format('woff2')
}

@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  src: local('Montserrat Bold'), local('Montserrat-Bold'),
       url('/fonts/montserrat-v14-latin-700.woff2') format('woff2')
}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.primary};
      scroll-behavior: smooth;
    }
  
    body{
    background-color: ${theme.colors.mainBg};
    font-size: ${theme.font.sizes.medium};
    line-height:${theme.font.lineHeight.default};
    color: ${theme.colors.lightGray};
  `}
`

export default GlobalStyles
