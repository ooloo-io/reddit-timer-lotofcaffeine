import React from 'react'
import { screen } from '@testing-library/react'
import App from './App'
import { renderWithTheme } from './utils/tests/helpers'

test('renders App', () => {
  renderWithTheme(<App />)
})
