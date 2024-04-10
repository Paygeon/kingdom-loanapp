import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders business type selector form', () => {
  render(<App />);
  const headingElement = screen.getByText(/Please Select Your Business Type/i);
  expect(headingElement).toBeInTheDocument();
});