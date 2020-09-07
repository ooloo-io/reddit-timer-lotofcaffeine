import React from 'react'
import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'
import { Logo } from '.'
import 'jest-styled-components'

describe('<Logo />', () => {
  it('should render a blue label by default', () => {
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Reddit Timer/i).parentElement).toHaveStyle({
      color: '#1e2537',
    })
  })
})
