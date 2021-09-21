import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Cars in Jaipur heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cars in Jaipur/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders filter component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Filter by Origin/i);
  expect(linkElement).toBeInTheDocument();
});
