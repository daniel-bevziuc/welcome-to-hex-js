import React from 'react'
import { render } from '@testing-library/react'
import Project from './components/Project'
import Description from './components/Description'
import Industry from './components/Industry'
import User from './components/User'

test('renders User (username) component', () => {
  const user = { name: 'username', avatar: 'avatar' }

  const { getByText } = render(<User user={user} />)
  const username = getByText(/username/i)
  expect(username).toBeInTheDocument()
})

test('renders Project component', () => {
  const { getByText } = render(<Project project='text project' />)
  const text = getByText(/text project/i)
  expect(text).toBeInTheDocument()
})

test('renders Industry component', () => {
  const { getByText } = render(<Industry industry='text industry' />)
  const text = getByText(/text industry/i)
  expect(text).toBeInTheDocument()
})

test('renders Description component', () => {
  const { getByText } = render(<Description description='text description' />)
  const text = getByText(/text description/i)
  expect(text).toBeInTheDocument()
})
