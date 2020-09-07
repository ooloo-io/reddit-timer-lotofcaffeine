import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.header`
  max-width: 1283px;
  width: 89%;
  margin: 0 auto;
`

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  padding: 3.2rem 0;
  align-items: center;
  ul {
    margin-left: auto;
    display: flex;
    list-style: none;
    li + li {
      margin-left: 2.5rem;
    }
  }
`

export const Component = styled.li`
  a {
    text-decoration: none;
  }
`
