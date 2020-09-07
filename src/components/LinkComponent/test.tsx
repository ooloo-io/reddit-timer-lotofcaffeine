import React from 'react'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/tests/helpers'
import LinkComponent from '.'

describe('
<LinkComponent />', () => {
it('should render the heading', () => {
const { container } = renderWithTheme(
<LinkComponent />)

expect(screen.getByRole('heading', { name: /LinkComponent/i })).toBeInTheDocument()

expect(container.firstChild).toMatchSnapshot()
})
})